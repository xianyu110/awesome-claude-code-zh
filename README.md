# Awesome Claude Code

A curated list of slash-commands, `CLAUDE.md` files, and other resources for enhancing your [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/) workflow.

> [!TIP] > [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/) is a research preview tool offered by Anthropic. It is under development, and so the resources provided in this list may not function the same as the app develops. YMMV.

- [What is Claude Code?](#what-is-claude-code)
- [Slash Commands](#slash-commands)
- [`CLAUDE.md` Files](#claudemd-files)
- [Claude Code CLI Workflows](#cli-workflows)

## What is Claude Code?

Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster through natural language commands. By integrating directly with your development environment, Claude Code streamlines your workflow without requiring additional servers or complex setup.

## Key Components

See [Anthropic's documentation site](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/) for up-to-date information on the key components of Claude Code.

- [Slash Commands](#slash-commands): In an interactive session, you can use "slash-commands" (e.g. `/compact`) to trigger specific actions. Claude Code offers a number of built-in slash commands, but you can also create your own, by declaring instructions in Markdown files inside the `.claude/commands/` directory. A markdown file like `./claude/commands/hello-world.md` will be available as the `/project:hello-world` command in your interactive session.
- [`CLAUDE.md` Files](#claudemd-files): A markdown file that contains instructions for Claude Code. This file is used to provide context and guidance to the agent, helping it understand your codebase and your preferences.
- [Claude Code CLI Workflows](#cli-workflows): Claude Code can also be invoked in non-interactive mode using the `-p` flag. This allows you to run Claude Code commands in a script or as part of a larger workflow, such as a CI/CD pipeline.

## [Slash Commands](#slash-commands)

### say-hello

<table>
<tr><th align="left">Name<td><code>/say-hello</code></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-hello.md" target="_blank">GitHub</a></td></tr>
</table>

**Description:** A simple hello-world command that prints "Hello, world!" to the console.

### say-goodbye

<table>
<tr><th align="left">Name<td><code>/say-goodbye</code></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-goodbye.md" target="_blank">GitHub</a></td></tr>
</table>

**Description:** A simple goodybe-world command that prints "Hello, Goodbye!" to the console.

## [`CLAUDE.md` Files](#claudemd-files)

### Guitar

<table>
<tr><th align="left">Repository<td><a href="https://github.com/soramimi/Guitar" target="_blank">soramimi/Guitar</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/soramimi/Guitar/blob/master/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Development, C++, Qt</td></tr>
</table>

**Highlights:**
- Development guide for Guitar Git GUI Client
- Build commands for various platforms
- Code style guidelines for contributing
- Project structure explanation

### Inkline

<table>
<tr><th align="left">Repository<td><a href="https://github.com/inkline/inkline" target="_blank">inkline/inkline</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/inkline/inkline/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>UI Framework, Vue.js, TypeScript</td></tr>
</table>

**Highlights:**
- Development guide for Vue.js 3 UI Components library
- Build and test commands
- Component development guidelines
- Contribution workflow

### HASH

<table>
<tr><th align="left">Repository<td><a href="https://github.com/hashintel/hash" target="_blank">hashintel/hash</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/hashintel/hash/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Knowledge Graph, Rust, TypeScript</td></tr>
</table>

**Highlights:**
- Comprehensive development guide for HASH knowledge graph
- Repository structure explanation
- Coding standards and best practices
- Testing and deployment workflows

### Course Builder

<table>
<tr><th align="left">Repository<td><a href="https://github.com/badass-courses/course-builder" target="_blank">badass-courses/course-builder</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/badass-courses/course-builder/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Education, Web Development, TypeScript</td></tr>
</table>

**Highlights:**
- Development guidance for course-builder platform
- Framework for building online courses
- Project organization and structure
- Contribution guidelines

### Pareto Mac

<table>
<tr><th align="left">Repository<td><a href="https://github.com/ParetoSecurity/pareto-mac" target="_blank">ParetoSecurity/pareto-mac</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/ParetoSecurity/pareto-mac/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Security, Swift, macOS</td></tr>
</table>

**Highlights:**
- Development guide for Mac security audit tool
- Build instructions and workflows
- Contribution guidelines
- Testing procedures

### EDSL

<table>
<tr><th align="left">Repository<td><a href="https://github.com/expectedparrot/edsl" target="_blank">expectedparrot/edsl</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/expectedparrot/edsl/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>AI/ML, Python, Research</td></tr>
</table>

**Highlights:**
- Codebase reference for AI-powered surveys and experiments
- Framework organization
- Implementation details
- Usage patterns

### JSBeeb

<table>
<tr><th align="left">Repository<td><a href="https://github.com/mattgodbolt/jsbeeb" target="_blank">mattgodbolt/jsbeeb</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/mattgodbolt/jsbeeb/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Emulation, JavaScript</td></tr>
</table>

**Highlights:**
- Development guide for JavaScript BBC Micro emulator
- Build and testing instructions
- Architecture documentation
- Debugging workflows

### Comm

<table>
<tr><th align="left">Repository<td><a href="https://github.com/CommE2E/comm" target="_blank">CommE2E/comm</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/CommE2E/comm/blob/master/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Messaging, Security, JavaScript/Rust</td></tr>
</table>

**Highlights:**
- Development reference for E2E-encrypted messaging app
- Code organization and architecture
- Security implementation details
- Testing and deployment procedures

### SPy

<table>
<tr><th align="left">Repository<td><a href="https://github.com/spylang/spy" target="_blank">spylang/spy</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/spylang/spy/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Programming Language, Python</td></tr>
</table>

**Highlights:**
- Development guide for SPy programming language
- Build and contribution workflows
- Language design principles
- Testing framework

### Lamoom Python

<table>
<tr><th align="left">Repository<td><a href="https://github.com/LamoomAI/lamoom-python" target="_blank">LamoomAI/lamoom-python</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/LamoomAI/lamoom-python/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>AI/ML, Python</td></tr>
</table>

**Highlights:**
- Reference for production prompt engineering library
- Load balancing of AI Models
- API documentation
- Usage patterns and examples


## [CLI Workflows](#cli-workflows)

- TODO

## Contributing

I'm still working out the best way to structure this repository, but if you have anything you'd like to add to the list, feel free to make a pull request or open an issue.
