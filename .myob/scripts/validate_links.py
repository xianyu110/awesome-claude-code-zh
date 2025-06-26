import csv
import requests
import time
from datetime import datetime
from urllib.parse import urlparse
import random
import json
import sys
import argparse

def validate_link(url, retry_count=0, max_retries=3, quiet=False):
    """
    Check if a URL returns a 40x status code with rate limiting and retry logic.
    Returns tuple (is_active, status_code/error_message)
    """
    try:
        # Add a timeout and user agent to avoid being blocked
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.head(url, timeout=15, headers=headers, allow_redirects=True)
        
        # Handle rate limiting (429 Too Many Requests)
        if response.status_code == 429:
            if retry_count < max_retries:
                # Exponential backoff with jitter
                wait_time = (2 ** retry_count) + random.uniform(1, 3)
                if not quiet:
                    print(f"⏳ Rate limited for {url}. Waiting {wait_time:.1f}s before retry {retry_count + 1}/{max_retries}")
                time.sleep(wait_time)
                return validate_link(url, retry_count + 1, max_retries, quiet)
            else:
                if not quiet:
                    print(f"❌ {url} - Status: 429 (Rate limited after {max_retries} retries)")
                return False, 429
        
        # Check if status code is in 40x range
        if 400 <= response.status_code < 500:
            if not quiet:
                print(f"❌ {url} - Status: {response.status_code}")
            return False, response.status_code
        else:
            if not quiet:
                print(f"✅ {url} - Status: {response.status_code}")
            return True, response.status_code
            
    except requests.exceptions.RequestException as e:
        if retry_count < max_retries:
            wait_time = (2 ** retry_count) + random.uniform(1, 2)
            if not quiet:
                print(f"⚠️  {url} - Error: {str(e)}. Retrying in {wait_time:.1f}s...")
            time.sleep(wait_time)
            return validate_link(url, retry_count + 1, max_retries, quiet)
        else:
            if not quiet:
                print(f"⚠️  {url} - Error after {max_retries} retries: {str(e)}")
            return False, str(e)

def process_csv(github_action=False):
    """
    Read the CSV, validate links, and update the Active column.
    """
    start_time = datetime.now()
    if not github_action:
        print(f"🚀 Starting validation at: {start_time.strftime('%Y-%m-%d %H:%M:%S')}")
    else:
        print(f"Starting validation at: {start_time.strftime('%Y-%m-%d %H:%M:%S')}", file=sys.stderr)
    
    input_file = '.myob/resource-metadata.csv'
    output_file = '.myob/resource-metadata.csv'
    
    # Track broken links for summary
    broken_links = []
    total_links = 0
    
    # Read the CSV
    rows = []
    with open(input_file, 'r', newline='', encoding='utf-8') as file:
        reader = csv.reader(file)
        headers = next(reader)  # Read the header row
        rows.append(headers)
        
        total_rows = sum(1 for _ in reader)
        if not github_action:
            print(f"Processing {total_rows} links...")
        else:
            print(f"Processing {total_rows} links...", file=sys.stderr)
        file.seek(0)
        next(reader)  # Skip header again
        
        for row_num, row in enumerate(reader, start=2):
            if len(row) >= 3 and row[2].strip():  # Check if Primary Link exists
                primary_link = row[2].strip()
                total_links += 1
                if not github_action:
                    print(f"\n[{row_num-1}] Checking: {row[0]} - {primary_link}")
                else:
                    print(f"[{row_num-1}] Checking: {row[0]} - {primary_link}", file=sys.stderr)
                
                # Validate the link
                is_active, status = validate_link(primary_link, quiet=github_action)
                
                # Track broken links
                if not is_active:
                    broken_links.append({
                        'name': row[0] if len(row) > 0 else 'Unknown',
                        'url': primary_link,
                        'row_num': row_num-1,
                        'status': status
                    })
                    if github_action:
                        print(f"  ❌ BROKEN: Status {status}", file=sys.stderr)
                elif github_action:
                    print(f"  ✅ OK: Status {status}", file=sys.stderr)
                
                # Update the Active column (index 6) and Last Checked column (index 7)
                if len(row) <= 7:
                    # Extend row if Active and Last Checked columns don't exist
                    row.extend([''] * (8 - len(row)))
                
                row[6] = 'TRUE' if is_active else 'FALSE'
                row[7] = datetime.now().strftime('%Y-%m-%d:%H-%M-%S')
                
                # Add variable delay to be respectful to servers and avoid rate limiting
                # Longer delay for GitHub URLs, shorter for others
                if 'github.com' in primary_link:
                    delay = random.uniform(2, 4)  # 2-4 seconds for GitHub
                else:
                    delay = random.uniform(1, 2)  # 1-2 seconds for other sites
                time.sleep(delay)
            else:
                # No link to validate, mark as FALSE
                if len(row) <= 7:
                    row.extend([''] * (8 - len(row)))
                row[6] = 'FALSE'
                row[7] = datetime.now().strftime('%Y-%m-%d:%H-%M-%S')
            
            rows.append(row)
    
    # Write the updated CSV
    with open(output_file, 'w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerows(rows)
    
    # Calculate execution time
    end_time = datetime.now()
    duration = end_time - start_time
    
    if github_action:
        # Output JSON for GitHub Action
        result = {
            'timestamp': end_time.isoformat(),
            'execution_time': str(duration),
            'total_links': total_links,
            'active_links': total_links - len(broken_links),
            'broken_links': broken_links
        }
        print(json.dumps(result, indent=2))
        
        # Also print summary to stderr for logs
        print(f"\nValidation completed at: {end_time.strftime('%Y-%m-%d %H:%M:%S')}", file=sys.stderr)
        print(f"Total execution time: {duration}", file=sys.stderr)
        print(f"Summary: {total_links - len(broken_links)}/{total_links} links are active", file=sys.stderr)
        if broken_links:
            print(f"\nBROKEN LINKS SUMMARY ({len(broken_links)} broken):", file=sys.stderr)
            print("=" * 80, file=sys.stderr)
            for i, link in enumerate(broken_links, 1):
                print(f"{i:2d}. [{link['row_num']:3d}] {link['name']}", file=sys.stderr)
                print(f"     URL: {link['url']}", file=sys.stderr)
                print(f"     Status: {link['status']}", file=sys.stderr)
                print(file=sys.stderr)
        else:
            print(f"\n🎉 All {total_links} links are working!", file=sys.stderr)
    else:
        # Normal console output
        print(f"\n🏁 Validation completed at: {end_time.strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"⏱️  Total execution time: {duration}")
        print(f"📊 Summary: {total_links - len(broken_links)}/{total_links} links are active")
        print(f"✅ Updated CSV file: {output_file}")
        
        # Print broken links summary
        if broken_links:
            print(f"\n💥 BROKEN LINKS SUMMARY ({len(broken_links)} broken):")
            print("=" * 80)
            for i, link in enumerate(broken_links, 1):
                print(f"{i:2d}. [{link['row_num']:3d}] {link['name']}")
                print(f"     🔗 {link['url']}")
                print(f"     Status: {link['status']}")
                print()
        else:
            print(f"\n🎉 All {total_links} links are working!")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Validate links in resource-metadata.csv')
    parser.add_argument('--github-action', action='store_true', 
                        help='Run in GitHub Action mode (outputs JSON to stdout, logs to stderr)')
    args = parser.parse_args()
    
    if not args.github_action:
        print("Starting link validation...")
    else:
        print("Starting link validation in GitHub Action mode...", file=sys.stderr)
    
    process_csv(github_action=args.github_action)
    
    if not args.github_action:
        print("Link validation completed!")