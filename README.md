# Awesome Claude Code [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

This is a curated list of slash-commands, `CLAUDE.md` files, CLI tools, and other resources and guides for enhancing your [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/) workflow.

> [!TIP] [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/) is a beta tool offered by Anthropic. It is under development, and so the resources provided in this list may not function the same as the app develops. YMMV. We will do our best effort to keep resources up to date.

Claude Code is a CLI-based coding assistant and agent that you can access in your terminal or IDE. It is a rapidly evolving tool that offers a number of powerful capabilities. Per the Anthropic website:

> Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster through natural language commands. By integrating directly with your development environment, Claude Code streamlines your workflow without requiring additional servers or complex setup.

Claude Code is a powerful coding tool (and a dear friend) that allows for a lot of configuration, in a lot of different ways. Users are actively working out best practices and workflows. It is the hope that this repo will help the community share knowledge and understand how to get the most out of Claude Code.

## Table of Contents

- [Slash Commands](#slash-commands)
- [CLAUDE.md Files](#claudemd-files)
- [CLI Workflows](#cli-workflows)
- [Contributing](#contributing)

## Key Components

See [Anthropic's documentation site](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/) for up-to-date information on the key components of Claude Code.

<<<<<<< HEAD
- [Slash Commands](#slash-commands): In an interactive session, you can use "slash-commands" (e.g. `/compact`) to trigger specific actions. Claude Code offers a number of built-in slash commands, but you can also create your own, by declaring instructions in Markdown files inside the `.claude/commands/` directory. A markdown file like `./claude/commands/hello-world.md` will be available as the `/project:hello-world` command in your interactive session.
- [`CLAUDE.md` Files](#claudemd-files): A markdown file that contains instructions for Claude Code. This file is used to provide context and guidance to the agent, helping it understand your codebase and your preferences.
- [Claude Code CLI Workflows](#cli-workflows): Claude Code can also be invoked in non-interactive mode using the `-p` flag. This allows you to run Claude Code commands in a script or as part of a larger workflow, such as a CI/CD pipeline.

## [Slash Commands](#slash-commands)

### dump

<table>
<tr><th align="left">Name<td><code>/dump</code></td></tr>
<tr><th align="left">Author<td>@fumito-ito</td></tr>
<tr><th align="left">Source<td><a href="https://gist.github.com/fumito-ito/77c308e0382e06a9c16b22619f8a2f83" target="_blank">GitHub Gist</a></td></tr>
</table>

**Description:** A command that dumps the current conversation to a markdown file in `.claude/logs/`. Creates timestamped files with session details and the full conversation history.

### say-hello

<table>
<tr><th align="left">Name<td><code>/say-hello</code></td></tr>
<tr><th align="left">Author<td>@hesreallyhim</td></tr>
<tr><th align="left">Source<td><a href="https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-hello.md" target="_blank">GitHub</a></td></tr>
</table>

**Description:** A simple hello-world command that prints "Hello, world!" to the console.

### say-goodbye

<table>
<tr><th align="left">Name<td><code>/say-goodbye</code></td></tr>
<tr><th align="left">Author<td>@hesreallyhim</td></tr>
<tr><th align="left">Source<td><a href="https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-goodbye.md" target="_blank">GitHub</a></td></tr>
</table>

**Description:** A simple goodbye-world command that prints "Goodbye, World!" to the console.

## [`CLAUDE.md` Files](#claudemd-files)

### AI IntelliJ Plugin (didalgolab)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/didalgolab/ai-intellij-plugin" target="_blank">didalgolab/ai-intellij-plugin</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/didalgolab/ai-intellij-plugin/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>IntelliJ Plugin, Gradle, Testing, Code Standards</td></tr>
<tr><th align="left">License<td>Apache-2.0</td></tr>
</table>

**Highlights:**

- Comprehensive Gradle commands for plugin development
- IntelliJ Platform-specific coding patterns and guidelines
- Detailed package structure and naming conventions
- Clear guidelines for internationalization using bundles

### Anthropic Quickstarts (anthropics)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/anthropics/anthropic-quickstarts" target="_blank">anthropics/anthropic-quickstarts</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/anthropics/anthropic-quickstarts/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>AI/ML, Developer Tools, Tutorials</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Comprehensive development guides for three distinct AI-powered demo projects
- Standardized development workflow across different project types
- Strict code style guidelines for Python and TypeScript
- Docker and environment setup instructions for containerization
- Testing and quality assurance procedures for each project type

### AVS Vibe Developer Guide (Layr-Labs)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/Layr-Labs/avs-vibe-developer-guide" target="_blank">Layr-Labs/avs-vibe-developer-guide</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/Layr-Labs/avs-vibe-developer-guide/blob/master/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>EigenLayer, Prompt Engineering, Documentation, Blockchain</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Structures AI-assisted EigenLayer AVS development workflow
- Provides consistent naming conventions for prompt files
- Outlines progression from idea to implementation
- Establishes terminology standards for blockchain concepts

### AWS MCP Server (alexei-led)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/alexei-led/aws-mcp-server" target="_blank">alexei-led/aws-mcp-server</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/alexei-led/aws-mcp-server/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Python, AWS, Development Guide, Best Practices</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Multiple environment setup options using modern Python tools
- Detailed code style guidelines and best practices
- Comprehensive error handling and logging recommendations
- Security considerations for AWS CLI interactions

### Basic Memory (basicmachines-co)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/basicmachines-co/basic-memory" target="_blank">basicmachines-co/basic-memory</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/basicmachines-co/basic-memory/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Knowledge Management, AI, Markdown</td></tr>
<tr><th align="left">License<td>AGPL-3.0</td></tr>
</table>

**Highlights:**

- Innovative AI-human collaboration framework for seamless development
- Model Context Protocol (MCP) for bidirectional LLM-markdown communication
- Unique GitHub integration with AI as a full team member
- Flexible knowledge structure with entities, observations, and relations
- Advanced MCP tools for content management and knowledge graph navigation

### Comm (CommE2E)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/CommE2E/comm" target="_blank">CommE2E/comm</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/CommE2E/comm/blob/master/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Messaging, Security, JavaScript/Rust</td></tr>
<tr><th align="left">License<td>BSD-3-Clause</td></tr>
</table>

**Highlights:**

- Development reference for E2E-encrypted messaging app
- Code organization and architecture
- Security implementation details
- Testing and deployment procedures

### Course Builder (badass-courses)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/badass-courses/course-builder" target="_blank">badass-courses/course-builder</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/badass-courses/course-builder/blob/master/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Education, Web Development, TypeScript</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Real-time multiplayer capabilities for collaborative course creation
- Diverse tech stack including Next.js, TypeScript, Drizzle ORM, and AI
- Monorepo architecture with Turborepo and PNPM workspaces
- Advanced features for video processing and AI-assisted content
- Detailed development patterns for code generation and utility packages

### Cursor Tools (eastlondoner)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/eastlondoner/cursor-tools" target="_blank">eastlondoner/cursor-tools</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/eastlondoner/cursor-tools/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>CLI, AI Tools, Developer Tools</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Versatile AI command interface supporting multiple AI providers and models
- Flexible command options with extensive customization through provider selection
- Advanced AI collaboration with built-in commands for planning and research
- Browser automation through "Stagehand" feature for complex web interactions
- User-friendly nicknames for commands making the tool more approachable

### DroidconKotlin (touchlab)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/touchlab/DroidconKotlin" target="_blank">touchlab/DroidconKotlin</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/touchlab/DroidconKotlin/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Kotlin Multiplatform, Android, iOS, Compose</td></tr>
<tr><th align="left">License<td>Apache-2.0</td></tr>
</table>

**Highlights:**

- Comprehensive Gradle commands for cross-platform development
- Clear module structure for multiplatform architecture
- Specific coding standards for Kotlin Multiplatform projects
- Practical guidance for dependency injection and UI patterns

### EDSL (expectedparrot)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/expectedparrot/edsl" target="_blank">expectedparrot/edsl</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/expectedparrot/edsl/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>AI/ML, Python, Research</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Detailed build and test commands for installation and documentation
- Strict code style enforcing formatting, naming, and type hinting
- Comprehensive testing requirements for type checking and coverage
- Clear permissions framework defining allowed and prohibited actions
- Standardized development workflow with tools like Black and mypy

### Giselle (giselles-ai)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/giselles-ai/giselle" target="_blank">giselles-ai/giselle</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/giselles-ai/giselle/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>TypeScript, React, Next.js</td></tr>
<tr><th align="left">License<td>Apache-2.0</td></tr>
</table>

**Highlights:**

- Detailed build and test commands using pnpm and Vitest
- Strict code formatting requirements with mandatory Biome checks
- Comprehensive naming conventions ensuring code consistency
- Language inclusivity guidelines for documentation
- Clear technical stack preferences with TypeScript and React hooks

### Guitar (soramimi)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/soramimi/Guitar" target="_blank">soramimi/Guitar</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/soramimi/Guitar/blob/master/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Development, C++, Qt</td></tr>
<tr><th align="left">License<td>GPL-2.0</td></tr>
</table>

**Highlights:**

- Development guide for Guitar Git GUI Client
- Build commands for various platforms
- Code style guidelines for contributing
- Project structure explanation

### HASH (hashintel)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/hashintel/hash" target="_blank">hashintel/hash</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/hashintel/hash/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Knowledge Graph, Rust, TypeScript</td></tr>
<tr><th align="left">License<td>Multiple (MIT, Apache-2.0, AGPL-3.0, and proprietary)</td></tr>
</table>

**Highlights:**

- Comprehensive repository structure breakdown into `/apps`, `/blocks`, `/libs`, and `/infra`
- Strong emphasis on reading full coding standards before development
- Detailed Rust documentation guidelines for functions, types, and examples
- Extensive command reference for both TypeScript and Rust workflows
- Systematic PR review guide with structured approach to code review

### Inkline (inkline)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/inkline/inkline" target="_blank">inkline/inkline</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/inkline/inkline/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>UI Framework, Vue.js, TypeScript</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Structured development workflow using pnpm for project management
- Emphasis on TypeScript and Vue 3 Composition API
- Detailed component creation process with folder structure guidelines
- Note on auto-generated stylesheets and component manifests
- Comprehensive testing recommendations for components and utilities

### JSBeeb (mattgodbolt)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/mattgodbolt/jsbeeb" target="_blank">mattgodbolt/jsbeeb</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/mattgodbolt/jsbeeb/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Emulation, JavaScript</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Development guide for JavaScript BBC Micro emulator
- Build and testing instructions
- Architecture documentation
- Debugging workflows

### Lamoom Python (LamoomAI)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/LamoomAI/lamoom-python" target="_blank">LamoomAI/lamoom-python</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/LamoomAI/lamoom-python/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>AI/ML, Python</td></tr>
<tr><th align="left">License<td>Apache-2.0</td></tr>
</table>

**Highlights:**

- Reference for production prompt engineering library
- Load balancing of AI Models
- API documentation
- Usage patterns and examples

### LangGraphJS (langchain-ai)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/langchain-ai/langgraphjs" target="_blank">langchain-ai/langgraphjs</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/langchain-ai/langgraphjs/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>AI/ML, TypeScript, JavaScript</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Comprehensive build and test commands with specific linting instructions
- Detailed TypeScript code style guidelines emphasizing ES2021 standards
- Layered library architecture with four key system components
- Monorepo structure using yarn workspaces for organized package management
- Strict code quality requirements with formatting rules and testing standards

### Metabase (metabase)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/metabase/metabase" target="_blank">metabase/metabase</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/metabase/metabase/blob/master/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Clojure, ClojureScript, JavaScript, REPL-Driven Development</td></tr>
<tr><th align="left">License<td>AGPL-3.0 and Metabase Commercial</td></tr>
</table>

**Highlights:**

- Detailed workflow for REPL-driven development in Clojure/ClojureScript
- Emphasis on incremental development and testing
- Guidelines for working with Metabase's JavaScript/TypeScript codebase
- Best practices for understanding existing code patterns
- Step-by-step approach for feature implementation using the REPL

### MCP Engine (featureform)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/featureform/mcp-engine" target="_blank">featureform/mcp-engine</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/featureform/mcp-engine/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Python, Code Quality, Pull Requests, Type Checking</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Strict package management and tooling requirements
- Comprehensive type checking and code formatting rules
- Explicit PR description and reviewer guidelines
- Systematic approach to resolving CI failures

### Network Chronicles (Fimeg)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/Fimeg/NetworkChronicles" target="_blank">Fimeg/NetworkChronicles</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/Fimeg/NetworkChronicles/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Game Design, LLM Integration, Character Design, Narrative</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Detailed implementation plan for an AI-driven game character
- Technical specifications for LLM integration in games
- Character guidelines and conversational constraints
- Service discovery mechanics implementation details

### Note Companion (different-ai)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/different-ai/note-companion" target="_blank">different-ai/note-companion</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/different-ai/note-companion/blob/master/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Obsidian Plugin, Styling Guide, Tailwind, UI Components</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Provides detailed styling isolation techniques for Obsidian plugins
- Uses Tailwind with custom prefix (`fo-`) to prevent style conflicts
- Includes practical troubleshooting steps for common styling issues
- Offers concrete code examples for component implementation

### Pareto Mac (ParetoSecurity)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/ParetoSecurity/pareto-mac" target="_blank">ParetoSecurity/pareto-mac</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/ParetoSecurity/pareto-mac/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Security, Swift, macOS</td></tr>
<tr><th align="left">License<td>GPL-3.0</td></tr>
</table>

**Highlights:**

- Development guide for Mac security audit tool
- Build instructions and workflows
- Contribution guidelines
- Testing procedures

### Perplexity MCP (Family-IT-Guy)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/Family-IT-Guy/perplexity-mcp" target="_blank">Family-IT-Guy/perplexity-mcp</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/Family-IT-Guy/perplexity-mcp/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Perplexity API, Node.js, MCP Protocol, Installation</td></tr>
<tr><th align="left">License<td>ISC</td></tr>
</table>

**Highlights:**

- Clear step-by-step installation instructions
- Multiple configuration options for different environments
- Detailed troubleshooting guidance with diagnostic steps
- Concise architecture overview of the MCP protocol implementation

### SG Cars Trends Backend (sgcarstrends)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/sgcarstrends/backend" target="_blank">sgcarstrends/backend</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/sgcarstrends/backend/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>TypeScript, Monorepo, AWS, Testing</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Comprehensive structure for TypeScript monorepo projects
- Detailed commands for development, testing, and deployment
- Clear environment variable documentation and usage
- AWS and Cloudflare deployment specifications

### SPy (spylang)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/spylang/spy" target="_blank">spylang/spy</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/spylang/spy/blob/main/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Programming Language, Python</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Strict coding conventions with specific naming standards
- Comprehensive testing guidelines with backend-specific execution
- Multiple code compilation options with clear examples
- Best practices for meaningful comments explaining "why" not just "what"
- Backend-specific test decorators for targeted test filtering

### TPL (KarpelesLab)

<table>
<tr><th align="left">Repository<td><a href="https://github.com/KarpelesLab/tpl" target="_blank">KarpelesLab/tpl</a></td></tr>
<tr><th align="left">Source<td><a href="https://github.com/KarpelesLab/tpl/blob/master/CLAUDE.md" target="_blank">CLAUDE.md</a></td></tr>
<tr><th align="left">Category<td>Golang, Error Handling, Testing, Code Standards</td></tr>
<tr><th align="left">License<td>MIT</td></tr>
</table>

**Highlights:**

- Detailed Go project conventions and build commands
- Comprehensive error handling recommendations
- Table-driven testing approach guidelines
- Modernization suggestions for adopting latest Go features

## [CLI Workflows](#cli-workflows)

- TODO

## Contributing

I'm still working out the best way to structure this repository, but if you have anything you'd like to add to the list, feel free to make a pull request or open an issue.
=======
- **Slash Commands**: In an interactive session, you can use "slash-commands" (e.g. `/compact`) to trigger specific actions. Claude Code offers a number of built-in slash commands, but you can also create your own, by declaring instructions in Markdown files inside the `.claude/commands/` directory. A markdown file like `./claude/commands/hello-world.md` will be available as the `/project:hello-world` command in your interactive session.
- **`CLAUDE.md` Files**: A markdown file that contains instructions for Claude Code. This file is used to provide context and guidance to the agent, helping it understand your codebase and your preferences.
- **Claude Code CLI Workflows**: Claude Code can also be invoked in non-interactive mode using the `-p` flag. This allows you to run Claude Code commands in a script or as part of a larger workflow, such as a CI/CD pipeline.

## Slash Commands

- [/2-commit-fast](https://github.com/steadycursor/steadystart) - Automates git commit process by selecting the first suggested message, generating structured commits with consistent formatting while skipping manual confirmation and removing Claude co-authorship footer.

- [/act](https://github.com/sotayamashita/dotfiles) - Generates React components with proper accessibility, creating ARIA-compliant components with keyboard navigation that follow React best practices and include comprehensive accessibility testing.

- [/add-to-changelog](https://github.com/berrydev-ai/blockdoc-python) - Adds new entries to changelog files while maintaining format consistency, properly documenting changes, and following established project standards for version tracking.

- [/analyze-code](https://github.com/Hkgstax/VALUGATOR) - Reviews code structure and identifies key components, mapping relationships between elements and suggesting targeted improvements for better architecture and performance.

- [/analyze-issue](https://github.com/jerseycheese/Narraitor) - Fetches GitHub issue details to create comprehensive implementation specifications, analyzing requirements and planning structured approach with clear implementation steps.

- [/bug-fix](https://github.com/danielscholl/mvn-mcp-server) - Streamlines bug fixing by creating a GitHub issue first, then a feature branch for implementing and thoroughly testing the solution before merging.

- [/build-react-app](https://github.com/wmjones/wyatt-personal-aws) - Builds React applications locally with intelligent error handling, creating specific tasks for build failures and providing appropriate server commands based on build results.

- [/check](https://github.com/rygwdn/slack-tools) - Performs comprehensive code quality and security checks, featuring static analysis integration, security vulnerability scanning, code style enforcement, and detailed reporting.

- [/clean](https://github.com/Graphlet-AI/eridu) - Addresses code formatting and quality issues by fixing black formatting problems, organizing imports with isort, resolving flake8 linting issues, and correcting mypy type errors.

- [/code_analysis](https://github.com/kingler/n8n_agent) - Provides a menu of advanced code analysis commands for deep inspection, including knowledge graph generation, optimization suggestions, and quality evaluation.

- [/commit](https://github.com/evmts/tevm-monorepo) - Creates git commits using conventional commit format with appropriate emojis, following project standards and creating descriptive messages that explain the purpose of changes.

- [/context-prime](https://github.com/elizaOS/elizaos.github.io) - Primes Claude with comprehensive project understanding by loading repository structure, setting development context, establishing project goals, and defining collaboration parameters.

- [/context_prime](https://github.com/laportagm/NeruroVis-GoDot) - Establishes specialized context for Godot Engine development projects by setting up AI as a Godot expert, defining project structure, referencing key documentation, and structuring collaboration workflow.

- [/create-command](https://github.com/scopecraft/command) - Guides Claude through creating new custom commands with proper structure by analyzing requirements, templating commands by category, enforcing command standards, and creating supporting documentation.

- [/create-docs](https://github.com/jerseycheese/Narraitor) - Analyzes code structure and purpose to create comprehensive documentation detailing inputs/outputs, behavior, user interaction flows, and edge cases with error handling.

- [/create-jtbd](https://github.com/taddyorg/inkverse) - Creates Jobs-to-be-Done frameworks that outline user needs with structured format, focusing on specific user problems and organizing by job categories for product development.

- [/create-pr](https://github.com/toyamarinyon/giselle) - Streamlines pull request creation by handling the entire workflow: creating a new branch, committing changes, formatting modified files with Biome, and submitting the PR.

- [/create-prd](https://github.com/taddyorg/inkverse) - Generates comprehensive product requirement documents outlining detailed specifications, requirements, and features following standardized document structure and format.

- [/create-prp](https://github.com/Wirasm/claudecode-utils) - Creates product requirement plans by reading PRP methodology, following template structure, creating comprehensive requirements, and structuring product definitions for development.

- [/create-pull-request](https://github.com/liam-hq/liam) - Provides comprehensive PR creation guidance with GitHub CLI, enforcing title conventions, following template structure, and offering concrete command examples with best practices.

- [/create-worktrees](https://github.com/evmts/tevm-monorepo) - Creates git worktrees for all open PRs or specific branches, handling branches with slashes, cleaning up stale worktrees, and supporting custom branch creation for development.

- [/do-issue](https://github.com/jerseycheese/Narraitor) - Implements GitHub issues with manual review points, following a structured approach with issue number parameter and offering alternative automated mode for efficiency.

- [/docs](https://github.com/slunsford/coffee-analytics) - Generates comprehensive documentation that follows project structure, documenting APIs and usage patterns with consistent formatting for better user understanding.

- [/dump](https://gist.github.com/fumito-ito/77c308e0382e06a9c16b22619f8a2f83) - Dumps the current Claude Code conversation to a markdown file in `.claude/logs/` with timestamped files that include session details and preserve full conversation history.

- [/explain-issue-fix](https://github.com/hackdays-io/toban-contribution-viewer) - Documents solution approaches for GitHub issues, explaining technical decisions, detailing challenges overcome, and providing implementation context for better understanding.

- [/five](https://github.com/TuckerTucker/tkr-agent-chat) - Applies the "five whys" methodology to perform root cause analysis, identify underlying issues, and create solution approaches for complex problems.

- [/fix-github-issue](https://github.com/jeremymailen/kotlinter-gradle) - Analyzes and fixes GitHub issues using a structured approach with GitHub CLI for issue details, implementing necessary code changes, running tests, and creating proper commit messages.

- [/fix-issue](https://github.com/metabase/metabase) - Analyzes and implements fixes for GitHub issues by researching context, proposing targeted solutions, implementing code changes, and creating appropriate test coverage.

- [/fix-issue](https://github.com/rzykov/metabase) - Addresses GitHub issues by taking issue number as parameter, analyzing context, implementing solution, and testing/validating the fix for proper integration.

- [/fix-pr](https://github.com/metabase/metabase) - Fetches and fixes unresolved PR comments by automatically retrieving feedback, addressing reviewer concerns, making targeted code improvements, and streamlining the review process.

- [/fixing_go_in_graph](https://github.com/Mjvolk3/torchcell) - Focuses on Gene Ontology annotation integration in graph databases, handling multiple data sources, addressing graph representation issues, and ensuring correct data incorporation.

- [/husky](https://github.com/evmts/tevm-monorepo) - Sets up and manages Husky Git hooks by configuring pre-commit hooks, establishing commit message standards, integrating with linting tools, and ensuring code quality on commits.

- [/implement-issue](https://github.com/cmxela/thinkube) - Implements GitHub issues following strict project guidelines, complete implementation checklists, variable naming conventions, testing procedures, and documentation requirements.

- [/implement-task](https://github.com/Hkgstax/VALUGATOR) - Approaches task implementation methodically by thinking through strategy step-by-step, evaluating different approaches, considering tradeoffs, and implementing the best solution.

- [/initref](https://github.com/okuvshynov/cubestat) - Initializes reference documentation structure with standard doc templates, API reference setup, documentation conventions, and placeholder content generation.

- [/load-llms-txt](https://github.com/ethpandaops/xatu-data) - Loads LLM configuration files to context, importing specific terminology, model configurations, and establishing baseline terminology for AI discussions.

- [/load_coo_context](https://github.com/Mjvolk3/torchcell) - References specific files for sparse matrix operations, explains transform usage, compares with previous approaches, and sets data formatting context for development.

- [/load_dango_pipeline](https://github.com/Mjvolk3/torchcell) - Sets context for model training by referencing pipeline files, establishing working context, and preparing for pipeline work with relevant documentation.

- [/mermaid](https://github.com/GaloyMoney/lana-bank) - Generates Mermaid diagrams from SQL schema files, creating entity relationship diagrams with table properties, validating diagram compilation, and ensuring complete entity coverage.

- [/next-task](https://github.com/wmjones/wyatt-personal-aws) - Gets the next task from TaskMaster and creates a branch for it, integrating with task management systems, automating branch creation, and enforcing naming conventions.

- [/optimize](https://github.com/to4iki/ai-project-rules) - Analyzes code performance to identify bottlenecks, proposing concrete optimizations with implementation guidance for improved application performance.

- [/plan](https://github.com/harperreed/dotfiles) - Creates detailed implementation plans for features or tasks by breaking down complex requirements, creating step-by-step approaches, identifying potential challenges, and planning required resources.

- [/posts:new](https://github.com/cloudartisan/cloudartisan.github.io) - Creates new blog posts with proper front matter, enforcing structure, generating standardized metadata, and following site conventions for content workflow.

- [/pr-review](https://github.com/arkavo-org/opentdf-rs) - Reviews pull request changes to provide feedback, check for issues, and suggest improvements before merging into the main codebase.

- [/prime](https://github.com/yzyydev/AI-Engineering-Structure) - Sets up initial project context by viewing directory structure and reading key files, creating standardized context with directory visualization and key documentation focus.

- [/project_hello_w_name](https://github.com/disler/just-prompt) - Creates customizable greeting components with name input, demonstrating argument passing, component reusability, state management, and user input handling.

- [/release](https://github.com/kelp/webdown) - Manages software releases by updating changelogs, reviewing README changes, evaluating version increments, and documenting release changes for better version tracking.

- [/reminder](https://github.com/cmxela/thinkube) - Re-establishes project context after conversation breaks or compaction, restoring context and fixing guideline inconsistencies for complex implementations.

- [/repro-issue](https://github.com/rzykov/metabase) - Creates reproducible test cases for GitHub issues, ensuring tests fail reliably and documenting clear reproduction steps for developers.

- [/review_dcell_model](https://github.com/Mjvolk3/torchcell) - Reviews old Dcell implementation files, comparing with newer Dango model, noting changes over time, and analyzing refactoring approaches for better code organization.

- [/rsi](https://github.com/ddisisto/si) - Reads all commands and key project files to optimize AI-assisted development by streamlining the process, loading command context, and setting up for better development workflow.

- [/run-ci](https://github.com/hackdays-io/toban-contribution-viewer) - Activates virtual environments, runs CI-compatible check scripts, iteratively fixes errors, and ensures all tests pass before completion.

- [/run-pre-commit](https://github.com/wmjones/wyatt-personal-aws) - Runs pre-commit checks with intelligent results handling, analyzing outputs, creating tasks for issue fixing, and integrating with task management systems.

- [/say-goodbye](https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-goodbye.md) - Prints "Goodbye, World!" to the console, demonstrating simple command structure and basic output functionality for command development.

- [/say-hello](https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-hello.md) - Prints "Hello, world!" to the console, providing a minimal command example that shows standard output formatting for command development.

- [/site/deploy](https://github.com/cloudartisan/cloudartisan.github.io) - Builds site with production settings, verifies build success, commits and pushes changes, and performs deployment checks for website publishing.

- [/task-breakdown](https://github.com/Hkgstax/VALUGATOR) - Analyzes feature requirements, identifies components and dependencies, creates manageable tasks, and sets priorities for efficient feature implementation.

- [/tdd](https://github.com/zscott/pane) - Guides development using Test-Driven Development principles, enforcing Red-Green-Refactor discipline, integrating with git workflow, and managing PR creation.

- [/tdd-implement](https://github.com/jerseycheese/Narraitor) - Implements Test-Driven Development by analyzing feature requirements, creating tests first (red), implementing minimal passing code (green), and refactoring while maintaining tests.

- [/testing_plan_units](https://github.com/buster-so/buster) - Creates inline Rust-style tests, suggests refactoring for testability, analyzes code challenges, and creates comprehensive test coverage for robust code.

- [/update-branch-name](https://github.com/giselles-ai/giselle) - Updates branch names with proper prefixes and formats, enforcing naming conventions, supporting semantic prefixes, and managing remote branch updates.

- [/update-docs](https://github.com/Consiliency/Flutter-Structurizr) - Reviews current documentation status, updates implementation progress, reviews phase documents, and maintains documentation consistency across the project.

- [/use-stepper](https://github.com/zuplo/docs) - Reformats documentation to use React Stepper component, transforming heading formats, applying proper indentation, and maintaining markdown compatibility with admonition formatting.

- [/view_commands](https://github.com/cloudartisan/cloudartisan.github.io) - Provides an organized directory of available project commands categorized by function, detailing post management commands, site management tools, and content creation capabilities.

## CLAUDE.md Files

- [AI IntelliJ Plugin](https://github.com/didalgolab/ai-intellij-plugin/blob/main/CLAUDE.md) - Provides comprehensive Gradle commands for IntelliJ plugin development with platform-specific coding patterns, detailed package structure guidelines, and clear internationalization standards.

- [Anthropic Quickstarts](https://github.com/anthropics/anthropic-quickstarts/blob/main/CLAUDE.md) - Offers comprehensive development guides for three distinct AI-powered demo projects with standardized workflows, strict code style guidelines, and containerization instructions.

- [AVS Vibe Developer Guide](https://github.com/Layr-Labs/avs-vibe-developer-guide/blob/master/CLAUDE.md) - Structures AI-assisted EigenLayer AVS development workflow with consistent naming conventions for prompt files and established terminology standards for blockchain concepts.

- [AWS MCP Server](https://github.com/alexei-led/aws-mcp-server/blob/main/CLAUDE.md) - Features multiple Python environment setup options with detailed code style guidelines, comprehensive error handling recommendations, and security considerations for AWS CLI interactions.

- [Basic Memory](https://github.com/basicmachines-co/basic-memory/blob/main/CLAUDE.md) - Presents an innovative AI-human collaboration framework with Model Context Protocol for bidirectional LLM-markdown communication and flexible knowledge structure for complex projects.

- [claude-code-mcp-enhanced](https://github.com/grahama1970/claude-code-mcp-enhanced/blob/66328d6bcc960c81ff24f6213ce5614000858698/CLAUDE.md) - Provides detailed and emphatic instructions for Claude to follow as a coding agent, with testing guidance, code examples, and compliance checks.

- [Comm](https://github.com/CommE2E/comm/blob/master/CLAUDE.md) - Serves as a development reference for E2E-encrypted messaging applications with code organization architecture, security implementation details, and testing procedures.

- [Course Builder](https://github.com/badass-courses/course-builder/blob/master/CLAUDE.md) - Enables real-time multiplayer capabilities for collaborative course creation with diverse tech stack integration and monorepo architecture using Turborepo.

- [Cursor Tools](https://github.com/eastlondoner/cursor-tools/blob/main/CLAUDE.md) - Creates a versatile AI command interface supporting multiple providers and models with flexible command options and browser automation through "Stagehand" feature.

- [DroidconKotlin](https://github.com/touchlab/DroidconKotlin/blob/main/CLAUDE.md) - Delivers comprehensive Gradle commands for cross-platform Kotlin Multiplatform development with clear module structure and practical guidance for dependency injection.

- [EDSL](https://github.com/expectedparrot/edsl/blob/main/CLAUDE.md) - Offers detailed build and test commands with strict code style enforcement, comprehensive testing requirements, and standardized development workflow using Black and mypy.

- [Giselle](https://github.com/giselles-ai/giselle/blob/main/CLAUDE.md) - Provides detailed build and test commands using pnpm and Vitest with strict code formatting requirements and comprehensive naming conventions for code consistency.

- [Guitar](https://github.com/soramimi/Guitar/blob/master/CLAUDE.md) - Serves as development guide for Guitar Git GUI Client with build commands for various platforms, code style guidelines for contributing, and project structure explanation.

- [HASH](https://github.com/hashintel/hash/blob/main/CLAUDE.md) - Features comprehensive repository structure breakdown with strong emphasis on coding standards, detailed Rust documentation guidelines, and systematic PR review process.

- [Inkline](https://github.com/inkline/inkline/blob/main/CLAUDE.md) - Structures development workflow using pnpm with emphasis on TypeScript and Vue 3 Composition API, detailed component creation process, and comprehensive testing recommendations.

- [JSBeeb](https://github.com/mattgodbolt/jsbeeb/blob/main/CLAUDE.md) - Provides development guide for JavaScript BBC Micro emulator with build and testing instructions, architecture documentation, and debugging workflows.

- [Lamoom Python](https://github.com/LamoomAI/lamoom-python/blob/main/CLAUDE.md) - Serves as reference for production prompt engineering library with load balancing of AI Models, API documentation, and usage patterns with examples.

- [LangGraphJS](https://github.com/langchain-ai/langgraphjs/blob/main/CLAUDE.md) - Offers comprehensive build and test commands with detailed TypeScript style guidelines, layered library architecture, and monorepo structure using yarn workspaces.

- [Metabase](https://github.com/metabase/metabase/blob/master/CLAUDE.md) - Details workflow for REPL-driven development in Clojure/ClojureScript with emphasis on incremental development, testing, and step-by-step approach for feature implementation.

- [MCP Engine](https://github.com/featureform/mcp-engine/blob/main/CLAUDE.md) - Enforces strict package management with comprehensive type checking rules, explicit PR description guidelines, and systematic approach to resolving CI failures.

- [Network Chronicles](https://github.com/Fimeg/NetworkChronicles/blob/main/CLAUDE.md) - Presents detailed implementation plan for AI-driven game characters with technical specifications for LLM integration, character guidelines, and service discovery mechanics.

- [Note Companion](https://github.com/different-ai/note-companion/blob/master/CLAUDE.md) - Provides detailed styling isolation techniques for Obsidian plugins using Tailwind with custom prefix to prevent style conflicts and practical troubleshooting steps.

- [Pareto Mac](https://github.com/ParetoSecurity/pareto-mac/blob/main/CLAUDE.md) - Serves as development guide for Mac security audit tool with build instructions, contribution guidelines, testing procedures, and workflow documentation.

- [Perplexity MCP](https://github.com/Family-IT-Guy/perplexity-mcp/blob/main/CLAUDE.md) - Offers clear step-by-step installation instructions with multiple configuration options, detailed troubleshooting guidance, and concise architecture overview of the MCP protocol.

- [SG Cars Trends Backend](https://github.com/sgcarstrends/backend/blob/main/CLAUDE.md) - Provides comprehensive structure for TypeScript monorepo projects with detailed commands for development, testing, deployment, and AWS/Cloudflare integration.

- [SPy](https://github.com/spylang/spy/blob/main/CLAUDE.md) - Enforces strict coding conventions with comprehensive testing guidelines, multiple code compilation options, and backend-specific test decorators for targeted filtering.

- [TPL](https://github.com/KarpelesLab/tpl/blob/master/CLAUDE.md) - Details Go project conventions with comprehensive error handling recommendations, table-driven testing approach guidelines, and modernization suggestions for latest Go features.

## CLI Workflows

- [Blogging Platform Instructions](https://github.com/cloudartisan/cloudartisan.github.io/tree/d1ed4928b1326dcf658991e0b83387455d1b5004/.claude/commands) - Provides a well-structured set of commands for publishing and maintaining a blogging platform, including commands for creating posts, managing categories, and handling media files.

- [Claude Task Manager](https://gist.github.com/grahama1970/44a9da6a3da6769132037f06966945c2#file-00_readme-md) - Solves the critical challenge of context length limitations and task focus when working with Claude on complex projects through specialized context isolation and focused task execution.

- [Smart TV](https://github.com/vitalets/awesome-smart-tv#readme) - Enables creation of applications for different TV platforms with cross-platform compatibility and optimized development workflows.

## Contributing

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

I'm still working out the best way to structure this repository, but if you have anything you'd like to add to the list, feel free to make a pull request or open an issue.
>>>>>>> develop
