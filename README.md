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
