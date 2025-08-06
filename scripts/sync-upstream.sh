#!/bin/bash

# 🔄 手动同步上游仓库脚本
# 用法: ./scripts/sync-upstream.sh [--force]

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

print_message $BLUE "🔄 开始同步上游仓库..."

# 检查是否强制同步
FORCE_SYNC=false
if [[ "$1" == "--force" ]]; then
    FORCE_SYNC=true
    print_message $YELLOW "⚠️  强制同步模式已启用"
fi

# 确保我们在正确的目录
if [[ ! -f "README.md" ]]; then
    print_message $RED "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

# 检查是否有未提交的更改
if ! git diff-index --quiet HEAD --; then
    print_message $RED "❌ 错误: 有未提交的更改，请先提交或暂存"
    print_message $YELLOW "💡 提示: 运行 'git status' 查看未提交的文件"
    exit 1
fi

print_message $BLUE "🔗 配置上游仓库..."

# 添加上游仓库（如果不存在）
if ! git remote | grep -q "upstream"; then
    git remote add upstream https://github.com/hesreallyhim/awesome-claude-code.git
    print_message $GREEN "✅ 已添加上游仓库"
else
    print_message $BLUE "📡 上游仓库已存在，更新中..."
fi

# 获取上游更新
git fetch upstream

print_message $BLUE "📊 检查更新..."

# 获取提交哈希
UPSTREAM_COMMIT=$(git rev-parse upstream/main)
CURRENT_COMMIT=$(git rev-parse HEAD)

print_message $BLUE "🔍 当前提交: ${CURRENT_COMMIT:0:8}"
print_message $BLUE "🔍 上游提交: ${UPSTREAM_COMMIT:0:8}"

# 检查是否有更新
if [[ "$UPSTREAM_COMMIT" == "$CURRENT_COMMIT" ]] && [[ "$FORCE_SYNC" == "false" ]]; then
    print_message $GREEN "✅ 已是最新版本，无需同步"
    exit 0
fi

if [[ "$FORCE_SYNC" == "true" ]]; then
    print_message $YELLOW "🔄 强制同步中..."
else
    print_message $GREEN "🆕 发现上游更新，开始同步..."
fi

# 备份当前的英文版本
if [[ -f "README-en.md" ]]; then
    cp README-en.md README-en.md.backup
    print_message $BLUE "💾 已备份当前英文版本"
fi

# 同步英文版本
print_message $BLUE "📝 更新英文版本..."
git show upstream/main:README.md > README-en.md

# 检查是否有变化
if git diff --quiet README-en.md; then
    print_message $YELLOW "📝 英文版本无变化"
    HAS_CHANGES=false
else
    print_message $GREEN "📝 英文版本已更新"
    HAS_CHANGES=true
fi

# 显示上游最新提交
print_message $BLUE "📋 上游最新提交:"
git log --oneline upstream/main ^HEAD | head -5 | while read line; do
    print_message $BLUE "  • $line"
done

# 如果有变化，提交更新
if [[ "$HAS_CHANGES" == "true" ]] || [[ "$FORCE_SYNC" == "true" ]]; then
    print_message $BLUE "🚀 提交更新..."
    
    git add README-en.md
    
    # 创建提交消息
    COMMIT_MSG="🔄 手动同步上游更新

📋 上游最新提交:
$(git log --oneline upstream/main ^HEAD | head -5)

🔗 上游提交: ${UPSTREAM_COMMIT}
🕐 同步时间: $(date -u '+%Y-%m-%d %H:%M:%S UTC')

---
手动同步执行
原始项目: https://github.com/hesreallyhim/awesome-claude-code"

    git commit -m "$COMMIT_MSG"
    
    print_message $GREEN "✅ 更新已提交到本地仓库"
    
    # 询问是否推送到远程
    read -p "是否推送到远程仓库? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git push origin main
        print_message $GREEN "🚀 更新已推送到远程仓库"
    else
        print_message $YELLOW "📝 更新仅保存在本地，使用 'git push origin main' 推送到远程"
    fi
else
    print_message $YELLOW "📝 没有文件需要更新"
fi

# 清理备份文件
if [[ -f "README-en.md.backup" ]]; then
    rm README-en.md.backup
fi

print_message $GREEN "🎉 同步完成！"

# 显示同步摘要
print_message $BLUE "📊 同步摘要:"
print_message $BLUE "  • 上游仓库: https://github.com/hesreallyhim/awesome-claude-code"
print_message $BLUE "  • 上游提交: ${UPSTREAM_COMMIT:0:8}"
print_message $BLUE "  • 同步时间: $(date '+%Y-%m-%d %H:%M:%S')"

print_message $YELLOW "📝 提醒: 如果上游有重大内容更新，请考虑更新中文翻译版本"
print_message $BLUE "  • 简体中文: README.md"
print_message $BLUE "  • 繁体中文: README-zh-TW.md"
print_message $BLUE "  • 术语对照: docs/i18n/terminology.md" 