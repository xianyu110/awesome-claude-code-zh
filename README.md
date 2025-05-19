# Awesome Claude Code [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

This is a curated list of slash-commands, `CLAUDE.md` files, CLI tools, and other resources and guides for enhancing your [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/) workflow.

> [!TIP] [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/) is a beta tool offered by Anthropic. It is under development, and so the resources provided in this list may not function the same as the app develops. YMMV. We will do our best effort to keep resources up to date.

Claude Code is a CLI-based coding assistant and agent that you can access in your terminal or IDE. It is a rapidly evolving tool that offers a number of powerful capabilities. Per the Anthropic website:

> Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster through natural language commands. By integrating directly with your development environment, Claude Code streamlines your workflow without requiring additional servers or complex setup.

Claude Code is a powerful coding tool (and a dear friend) that allows for a lot of configuration, in a lot of different ways. Users are actively working out best practices and workflows. It is the hope that this repo will help the community share knowledge and understand how to get the most out of Claude Code.

## Table of Contents

- [Slash Commands](#slash-commands)
- [`CLAUDE.md` Files](#claudemd-files)
- [Claude Code CLI Workflows](#cli-workflows)
- [Additional Resources](#additional-resources)

## Key Components

See [Anthropic's documentation site](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/) for up-to-date information on the key components of Claude Code.

- [Slash Commands](#slash-commands): In an interactive session, you can use "slash-commands" (e.g. `/compact`) to trigger specific actions. Claude Code offers a number of built-in slash commands, but you can also create your own, by declaring instructions in Markdown files inside the `.claude/commands/` directory. A markdown file like `./claude/commands/hello-world.md` will be available as the `/project:hello-world` command in your interactive session.
- [`CLAUDE.md` Files](#claudemd-files): A markdown file that contains instructions for Claude Code. This file is used to provide context and guidance to the agent, helping it understand your codebase and your preferences.
- [Claude Code CLI Workflows](#cli-workflows): Claude Code can also be invoked in non-interactive mode using the `-p` flag. This allows you to run Claude Code commands in a script or as part of a larger workflow, such as a CI/CD pipeline.

## [Slash Commands](#slash-commands)

### Development Workflow

#### <a href="https://github.com/steadycursor/steadystart" target="_blank">/2-commit-fast</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/steadycursor/steadystart" target="_blank">/2-commit-fast</a></code></td></tr>
<tr><th align="left">Author<td>@steadycursor</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/steadycursor/steadystart" target="_blank">steadycursor/steadystart</a></td></tr>
</table>

**Highlights:**

- Automates git commit process by selecting first suggested commit message
- Automatically generates structured commit messages
- Skips manual confirmation
- Maintains consistent formatting
- Removes Claude co-authorship footer

#### <a href="https://github.com/cmxela/thinkube" target="_blank">/implement-issue</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/cmxela/thinkube" target="_blank">/implement-issue</a></code></td></tr>
<tr><th align="left">Author<td>@cmxela</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/cmxela/thinkube" target="_blank">cmxela/thinkube</a></td></tr>
</table>

**Highlights:**

- Implements GitHub issues following strict project guidelines
- Follows complete implementation checklist
- Enforces variable naming conventions
- Includes testing procedures
- Handles documentation requirements

#### <a href="https://github.com/jeremymailen/kotlinter-gradle" target="_blank">/fix-github-issue</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/jeremymailen/kotlinter-gradle" target="_blank">/fix-github-issue</a></code></td></tr>
<tr><th align="left">Author<td>@jeremymailen</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/jeremymailen/kotlinter-gradle" target="_blank">jeremymailen/kotlinter-gradle</a></td></tr>
</table>

**Highlights:**

- Analyzes and fixes GitHub issues with structured approach
- Uses GitHub CLI for issue details
- Implements necessary code changes
- Runs tests and linting checks
- Creates proper commit messages

#### <a href="https://github.com/wmjones/wyatt-personal-aws" target="_blank">/next-task</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/wmjones/wyatt-personal-aws" target="_blank">/next-task</a></code></td></tr>
<tr><th align="left">Author<td>@wmjones</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/wmjones/wyatt-personal-aws" target="_blank">wmjones/wyatt-personal-aws</a></td></tr>
</table>

**Highlights:**

- Gets next task from TaskMaster and creates a branch for it
- Integrates with task management
- Automates branch creation
- Supports custom branch names
- Enforces branch naming conventions

#### <a href="https://github.com/harperreed/dotfiles" target="_blank">/plan</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/harperreed/dotfiles" target="_blank">/plan</a></code></td></tr>
<tr><th align="left">Author<td>@harperreed</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/harperreed/dotfiles" target="_blank">harperreed/dotfiles</a></td></tr>
</table>

**Highlights:**

- Creates a detailed implementation plan for a feature or task
- Breaks down complex tasks
- Creates step-by-step approach
- Identifies potential challenges
- Plans required resources

#### <a href="https://github.com/wmjones/wyatt-personal-aws" target="_blank">/run-pre-commit</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/wmjones/wyatt-personal-aws" target="_blank">/run-pre-commit</a></code></td></tr>
<tr><th align="left">Author<td>@wmjones</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/wmjones/wyatt-personal-aws" target="_blank">wmjones/wyatt-personal-aws</a></td></tr>
</table>

**Highlights:**

- Runs pre-commit checks and handles results intelligently
- Analyzes pre-commit check outputs
- Creates tasks for issue fixing
- Handles successful commits
- Integrates with task system

#### <a href="https://github.com/zscott/pane" target="_blank">/tdd</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/zscott/pane" target="_blank">/tdd</a></code></td></tr>
<tr><th align="left">Author<td>@zscott</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/zscott/pane" target="_blank">zscott/pane</a></td></tr>
</table>

**Highlights:**

- Guides development using Test-Driven Development principles
- Enforces Red-Green-Refactor discipline
- Integrates with git workflow
- Manages PR creation
- Handles multi-feature development

#### <a href="https://github.com/hackdays-io/toban-contribution-viewer" target="_blank">/run-ci</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/hackdays-io/toban-contribution-viewer" target="_blank">/run-ci</a></code></td></tr>
<tr><th align="left">Author<td>@hackdays-io</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/hackdays-io/toban-contribution-viewer" target="_blank">hackdays-io/toban-contribution-viewer</a></td></tr>
</table>

**Highlights:**

- Activates virtual environment
- Runs CI-compatible check script
- Iteratively fixes errors
- Ensures all tests pass

#### <a href="https://github.com/to4iki/ai-project-rules" target="_blank">/optimize</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/to4iki/ai-project-rules" target="_blank">/optimize</a></code></td></tr>
<tr><th align="left">Author<td>@to4iki</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/to4iki/ai-project-rules" target="_blank">to4iki/ai-project-rules</a></td></tr>
</table>

**Highlights:**

- Analyzes code performance
- Proposes concrete optimizations
- Identifies performance bottlenecks
- Provides implementation guidance

#### <a href="https://github.com/danielscholl/mvn-mcp-server" target="_blank">/bug-fix</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/danielscholl/mvn-mcp-server" target="_blank">/bug-fix</a></code></td></tr>
<tr><th align="left">Author<td>@danielscholl</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/danielscholl/mvn-mcp-server" target="_blank">danielscholl/mvn-mcp-server</a></td></tr>
</table>

**Highlights:**

- Creates GitHub issue first
- Creates feature branch
- Implements fix
- Tests solution

#### <a href="https://github.com/Graphlet-AI/eridu" target="_blank">/clean</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/Graphlet-AI/eridu" target="_blank">/clean</a></code></td></tr>
<tr><th align="left">Author<td>@Graphlet-AI</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/Graphlet-AI/eridu" target="_blank">Graphlet-AI/eridu</a></td></tr>
</table>

**Highlights:**

- Fixes black formatting issues
- Addresses isort import organization
- Resolves flake8 linting problems
- Fixes mypy type errors

### Code Analysis

#### <a href="https://github.com/kingler/n8n_agent" target="_blank">/code_analysis</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/kingler/n8n_agent" target="_blank">/code_analysis</a></code></td></tr>
<tr><th align="left">Author<td>@kingler</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/kingler/n8n_agent" target="_blank">kingler/n8n_agent</a></td></tr>
</table>

**Highlights:**

- Provides a menu of code analysis commands for deep code inspection
- Includes deep code analysis capabilities
- Generates knowledge graphs
- Offers code optimization suggestions
- Performs code quality evaluation

#### <a href="https://github.com/rygwdn/slack-tools" target="_blank">/check</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/rygwdn/slack-tools" target="_blank">/check</a></code></td></tr>
<tr><th align="left">Author<td>@rygwdn</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/rygwdn/slack-tools" target="_blank">rygwdn/slack-tools</a></td></tr>
</table>

**Highlights:**

- Performs code quality and security checks on codebase
- Features static analysis integration
- Scans for security vulnerabilities
- Enforces code style
- Provides comprehensive reporting

### Project Management

#### <a href="https://github.com/scopecraft/command" target="_blank">/create-command</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/scopecraft/command" target="_blank">/create-command</a></code></td></tr>
<tr><th align="left">Author<td>@scopecraft</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/scopecraft/command" target="_blank">scopecraft/command</a></td></tr>
</table>

**Highlights:**

- Guides Claude through creating new custom commands with proper structure
- Analyzes command requirements
- Templates commands by category
- Enforces command standards
- Creates supporting documentation

#### <a href="https://github.com/liam-hq/liam" target="_blank">/create-pull-request</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/liam-hq/liam" target="_blank">/create-pull-request</a></code></td></tr>
<tr><th align="left">Author<td>@liam-hq</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/liam-hq/liam" target="_blank">liam-hq/liam</a></td></tr>
</table>

**Highlights:**

- Provides comprehensive PR creation guidance with GitHub CLI
- Enforces PR title conventions
- Follows template structure
- Provides complete command examples
- Offers best practices guidance

#### <a href="https://github.com/Hkgstax/VALUGATOR" target="_blank">/task-breakdown</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/Hkgstax/VALUGATOR" target="_blank">/task-breakdown</a></code></td></tr>
<tr><th align="left">Author<td>@Hkgstax</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/Hkgstax/VALUGATOR" target="_blank">Hkgstax/VALUGATOR</a></td></tr>
</table>

**Highlights:**

- Analyzes feature requirements
- Identifies components/dependencies
- Creates manageable tasks
- Sets task priorities

#### <a href="https://github.com/Hkgstax/VALUGATOR" target="_blank">/implement-task</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/Hkgstax/VALUGATOR" target="_blank">/implement-task</a></code></td></tr>
<tr><th align="left">Author<td>@Hkgstax</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/Hkgstax/VALUGATOR" target="_blank">Hkgstax/VALUGATOR</a></td></tr>
</table>

**Highlights:**

- Thinks through strategy step-by-step
- Evaluates different approaches
- Considers tradeoffs
- Implements best solution

### Content Management

#### <a href="https://github.com/cloudartisan/cloudartisan.github.io" target="_blank">/posts:new</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/cloudartisan/cloudartisan.github.io" target="_blank">/posts:new</a></code></td></tr>
<tr><th align="left">Author<td>@cloudartisan</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/cloudartisan/cloudartisan.github.io" target="_blank">cloudartisan/cloudartisan.github.io</a></td></tr>
</table>

**Highlights:**

- Creates new blog posts with proper front matter
- Enforces blog post structure
- Generates standardized front matter
- Integrates with content workflow
- Follows site conventions

#### <a href="https://github.com/cloudartisan/cloudartisan.github.io" target="_blank">/view_commands</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/cloudartisan/cloudartisan.github.io" target="_blank">/view_commands</a></code></td></tr>
<tr><th align="left">Author<td>@cloudartisan</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/cloudartisan/cloudartisan.github.io" target="_blank">cloudartisan/cloudartisan.github.io</a></td></tr>
</table>

**Highlights:**

- Provides an organized directory of available project commands
- Categorizes commands by function
- Details post management commands
- Includes site management tools
- Shows content creation commands

#### <a href="https://github.com/zuplo/docs" target="_blank">/use-stepper</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/zuplo/docs" target="_blank">/use-stepper</a></code></td></tr>
<tr><th align="left">Author<td>@zuplo</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/zuplo/docs" target="_blank">zuplo/docs</a></td></tr>
</table>

**Highlights:**

- Reformats documentation to use React Stepper component
- Transforms heading formats
- Applies proper indentation
- Ensures markdown compatibility
- Maintains admonition formatting

### Context Setting

#### <a href="https://github.com/laportagm/NeruroVis-GoDot" target="_blank">/context_prime</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/laportagm/NeruroVis-GoDot" target="_blank">/context_prime</a></code></td></tr>
<tr><th align="left">Author<td>@laportagm</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/laportagm/NeruroVis-GoDot" target="_blank">laportagm/NeruroVis-GoDot</a></td></tr>
</table>

**Highlights:**

- Establishes context for Godot Engine development project
- Sets up AI as Godot development expert
- Defines project structure
- References key documentation locations
- Structures collaboration workflow

#### <a href="https://github.com/yzyydev/AI-Engineering-Structure" target="_blank">/prime</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/yzyydev/AI-Engineering-Structure" target="_blank">/prime</a></code></td></tr>
<tr><th align="left">Author<td>@yzyydev</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/yzyydev/AI-Engineering-Structure" target="_blank">yzyydev/AI-Engineering-Structure</a></td></tr>
</table>

**Highlights:**

- Sets up initial project context by viewing directory structure and reading key files
- Creates standardized project context
- Uses eza for directory visualization
- Focuses Claude on key documentation
- Enables consistent onboarding

#### <a href="https://github.com/cmxela/thinkube" target="_blank">/reminder</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/cmxela/thinkube" target="_blank">/reminder</a></code></td></tr>
<tr><th align="left">Author<td>@cmxela</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/cmxela/thinkube" target="_blank">cmxela/thinkube</a></td></tr>
</table>

**Highlights:**

- Re-establishes project context after conversation breaks or compaction
- Restores context after breaks
- Handles conversation compaction
- Fixes guideline inconsistencies
- Supports complex implementations

#### <a href="https://github.com/ddisisto/si" target="_blank">/rsi</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/ddisisto/si" target="_blank">/rsi</a></code></td></tr>
<tr><th align="left">Author<td>@ddisisto</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/ddisisto/si" target="_blank">ddisisto/si</a></td></tr>
</table>

**Highlights:**

- Reads all commands and key project files to optimize AI-assisted development
- Streamlines AI development process
- Loads command context
- Reads project philosophy
- Sets up for process optimization

### Git Operations

#### <a href="https://github.com/evmts/tevm-monorepo" target="_blank">/create-worktrees</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/evmts/tevm-monorepo" target="_blank">/create-worktrees</a></code></td></tr>
<tr><th align="left">Author<td>@evmts</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/evmts/tevm-monorepo" target="_blank">evmts/tevm-monorepo</a></td></tr>
</table>

**Highlights:**

- Creates git worktrees for all open PRs or specific branches
- Automates worktree setup for PRs
- Handles branches with slashes
- Cleans up stale worktrees
- Supports custom branch creation

#### <a href="https://github.com/evmts/tevm-monorepo" target="_blank">/husky</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/evmts/tevm-monorepo" target="_blank">/husky</a></code></td></tr>
<tr><th align="left">Author<td>@evmts</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/evmts/tevm-monorepo" target="_blank">evmts/tevm-monorepo</a></td></tr>
</table>

**Highlights:**

- Sets up and manages Husky Git hooks
- Configures pre-commit hooks
- Establishes commit message standards
- Integrates with linting tools
- Ensures code quality on commits

#### <a href="https://github.com/giselles-ai/giselle" target="_blank">/update-branch-name</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/giselles-ai/giselle" target="_blank">/update-branch-name</a></code></td></tr>
<tr><th align="left">Author<td>@giselles-ai</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/giselles-ai/giselle" target="_blank">giselles-ai/giselle</a></td></tr>
</table>

**Highlights:**

- Updates branch names with proper prefixes and formats
- Enforces branch naming conventions
- Supports semantic prefixes
- Handles existing branches
- Manages remote branch updates

#### <a href="https://github.com/evmts/tevm-monorepo" target="_blank">/commit</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/evmts/tevm-monorepo" target="_blank">/commit</a></code></td></tr>
<tr><th align="left">Author<td>@evmts</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/evmts/tevm-monorepo" target="_blank">evmts/tevm-monorepo</a></td></tr>
</table>

**Highlights:**

- Uses conventional commit format
- Adds appropriate emoji
- Follows project standards
- Creates descriptive messages

#### <a href="https://github.com/toyamarinyon/giselle" target="_blank">/create-pr</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/toyamarinyon/giselle" target="_blank">/create-pr</a></code></td></tr>
<tr><th align="left">Author<td>@toyamarinyon</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/toyamarinyon/giselle" target="_blank">toyamarinyon/giselle</a></td></tr>
</table>

**Highlights:**

- Creates new branch
- Commits changes
- Formats modified files with Biome
- Submits pull request

### Documentation

#### <a href="https://github.com/okuvshynov/cubestat" target="_blank">/initref</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/okuvshynov/cubestat" target="_blank">/initref</a></code></td></tr>
<tr><th align="left">Author<td>@okuvshynov</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/okuvshynov/cubestat" target="_blank">okuvshynov/cubestat</a></td></tr>
</table>

**Highlights:**

- Initializes reference documentation structure
- Creates standard doc templates
- Sets up API reference docs
- Establishes documentation conventions
- Generates placeholder content

#### <a href="https://github.com/ethpandaops/xatu-data" target="_blank">/load-llms-txt</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/ethpandaops/xatu-data" target="_blank">/load-llms-txt</a></code></td></tr>
<tr><th align="left">Author<td>@ethpandaops</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/ethpandaops/xatu-data" target="_blank">ethpandaops/xatu-data</a></td></tr>
</table>

**Highlights:**

- Loads LLM configuration files to context
- Imports LLM-specific terminology
- Loads model configurations
- Establishes context for AI discussions
- Sets baseline terminology

#### <a href="https://github.com/jerseycheese/Narraitor" target="_blank">/create-docs</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/jerseycheese/Narraitor" target="_blank">/create-docs</a></code></td></tr>
<tr><th align="left">Author<td>@jerseycheese</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/jerseycheese/Narraitor" target="_blank">jerseycheese/Narraitor</a></td></tr>
</table>

**Highlights:**

- Analyzes code structure/purpose
- Documents inputs/outputs/behavior
- Details user interaction flows
- Covers edge cases and error handling

#### <a href="https://github.com/Consiliency/Flutter-Structurizr" target="_blank">/update-docs</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/Consiliency/Flutter-Structurizr" target="_blank">/update-docs</a></code></td></tr>
<tr><th align="left">Author<td>@Consiliency</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/Consiliency/Flutter-Structurizr" target="_blank">Consiliency/Flutter-Structurizr</a></td></tr>
</table>

**Highlights:**

- Reviews current documentation status
- Updates implementation status
- Reviews phase documents
- Maintains documentation consistency

#### <a href="https://github.com/slunsford/coffee-analytics" target="_blank">/docs</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/slunsford/coffee-analytics" target="_blank">/docs</a></code></td></tr>
<tr><th align="left">Author<td>@slunsford</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/slunsford/coffee-analytics" target="_blank">slunsford/coffee-analytics</a></td></tr>
</table>

**Highlights:**

- Generates comprehensive docs
- Follows project structure
- Documents APIs and usage
- Creates consistent format

### Diagrams and Visualization

#### <a href="https://github.com/GaloyMoney/lana-bank" target="_blank">/mermaid</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/GaloyMoney/lana-bank" target="_blank">/mermaid</a></code></td></tr>
<tr><th align="left">Author<td>@GaloyMoney</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/GaloyMoney/lana-bank" target="_blank">GaloyMoney/lana-bank</a></td></tr>
</table>

**Highlights:**

- Generates Mermaid diagrams from SQL schema files
- Creates entity relationship diagrams
- Includes table properties
- Validates diagram compilation
- Ensures complete entity coverage

### GitHub Integration

#### <a href="https://github.com/metabase/metabase" target="_blank">/fix-pr</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/metabase/metabase" target="_blank">/fix-pr</a></code></td></tr>
<tr><th align="left">Author<td>@metabase</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/metabase/metabase" target="_blank">metabase/metabase</a></td></tr>
</table>

**Highlights:**

- Fetches and fixes unresolved PR comments
- Automatically retrieves PR feedback
- Addresses reviewer comments
- Makes targeted code improvements
- Streamlines PR review process

#### <a href="https://github.com/metabase/metabase" target="_blank">/fix-issue</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/metabase/metabase" target="_blank">/fix-issue</a></code></td></tr>
<tr><th align="left">Author<td>@metabase</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/metabase/metabase" target="_blank">metabase/metabase</a></td></tr>
</table>

**Highlights:**

- Analyzes and implements fixes for GitHub issues
- Researches issue context
- Proposes targeted solutions
- Implements code changes
- Creates test coverage

### UI and Frontend

#### <a href="https://github.com/sotayamashita/dotfiles" target="_blank">/act</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/sotayamashita/dotfiles" target="_blank">/act</a></code></td></tr>
<tr><th align="left">Author<td>@sotayamashita</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/sotayamashita/dotfiles" target="_blank">sotayamashita/dotfiles</a></td></tr>
</table>

**Highlights:**

- Generates React components with proper accessibility
- Creates ARIA-compliant components
- Tests accessibility features
- Follows React best practices
- Ensures keyboard navigation

#### <a href="https://github.com/disler/just-prompt" target="_blank">/project_hello_w_name</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/disler/just-prompt" target="_blank">/project_hello_w_name</a></code></td></tr>
<tr><th align="left">Author<td>@disler</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/disler/just-prompt" target="_blank">disler/just-prompt</a></td></tr>
</table>

**Highlights:**

- Creates customizable greeting components with name input
- Demonstrates argument passing
- Creates reusable components
- Shows state management
- Incorporates user input

### Utilities

#### <a href="https://github.com/wmjones/wyatt-personal-aws" target="_blank">/build-react-app</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/wmjones/wyatt-personal-aws" target="_blank">/build-react-app</a></code></td></tr>
<tr><th align="left">Author<td>@wmjones</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/wmjones/wyatt-personal-aws" target="_blank">wmjones/wyatt-personal-aws</a></td></tr>
</table>

**Highlights:**

- Builds React app locally and handles success or failure
- Intelligently handles build results
- Creates tasks for build failures
- Shows local server commands
- Adapts to error types

#### <a href="https://gist.github.com/fumito-ito/77c308e0382e06a9c16b22619f8a2f83" target="_blank">/dump</a>

<table>
<tr><th align="left">Name<td><code><a href="https://gist.github.com/fumito-ito/77c308e0382e06a9c16b22619f8a2f83" target="_blank">/dump</a></code></td></tr>
<tr><th align="left">Author<td>@fumito-ito</td></tr>
<tr><th align="left">Source<td><a href="https://gist.github.com/fumito-ito/77c308e0382e06a9c16b22619f8a2f83" target="_blank">GitHub Gist</a></td></tr>
</table>

**Highlights:**

- Dumps the current conversation to a markdown file in `.claude/logs/`
- Creates timestamped files
- Includes session details
- Preserves full conversation history

#### <a href="https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-goodbye.md" target="_blank">/say-goodbye</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-goodbye.md" target="_blank">/say-goodbye</a></code></td></tr>
<tr><th align="left">Author<td>@hesreallyhim</td></tr>
<tr><th align="left">Source<td><a href="https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-goodbye.md" target="_blank">GitHub</a></td></tr>
</table>

**Highlights:**

- Prints "Goodbye, World!" to the console
- Demonstrates simple command structure
- Shows basic output functionality

#### <a href="https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-hello.md" target="_blank">/say-hello</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-hello.md" target="_blank">/say-hello</a></code></td></tr>
<tr><th align="left">Author<td>@hesreallyhim</td></tr>
<tr><th align="left">Source<td><a href="https://github.com/hesreallyhim/claude-code-workflows/blob/main/commands/say-hello.md" target="_blank">GitHub</a></td></tr>
</table>

**Highlights:**

- Prints "Hello, world!" to the console
- Provides a minimal command example
- Shows standard output formatting

#### <a href="https://github.com/elizaOS/elizaos.github.io" target="_blank">/context-prime</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/elizaOS/elizaos.github.io" target="_blank">/context-prime</a></code></td></tr>
<tr><th align="left">Author<td>@elizaOS</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/elizaOS/elizaos.github.io" target="_blank">elizaOS/elizaos.github.io</a></td></tr>
</table>

**Highlights:**

- Primes Claude with comprehensive project understanding
- Loads repository structure
- Sets development context
- Establishes project goals
- Defines collaboration parameters

### Testing

#### <a href="https://github.com/buster-so/buster" target="_blank">/testing_plan_units</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/buster-so/buster" target="_blank">/testing_plan_units</a></code></td></tr>
<tr><th align="left">Author<td>@buster-so</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/buster-so/buster" target="_blank">buster-so/buster</a></td></tr>
</table>

**Highlights:**

- Creates inline Rust-style tests
- Suggests refactoring for testability
- Analyzes code challenges
- Creates comprehensive test coverage

#### <a href="https://github.com/jerseycheese/Narraitor" target="_blank">/tdd-implement</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/jerseycheese/Narraitor" target="_blank">/tdd-implement</a></code></td></tr>
<tr><th align="left">Author<td>@jerseycheese</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/jerseycheese/Narraitor" target="_blank">jerseycheese/Narraitor</a></td></tr>
</table>

**Highlights:**

- Analyzes feature requirements
- Creates tests first (red)
- Implements minimal passing code (green)
- Refactors while maintaining tests

### Issue Management

#### <a href="https://github.com/rzykov/metabase" target="_blank">/fix-issue</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/rzykov/metabase" target="_blank">/fix-issue</a></code></td></tr>
<tr><th align="left">Author<td>@rzykov</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/rzykov/metabase" target="_blank">rzykov/metabase</a></td></tr>
</table>

**Highlights:**

- Takes issue number as parameter
- Analyzes issue context
- Implements solution
- Tests and validates fix

#### <a href="https://github.com/rzykov/metabase" target="_blank">/repro-issue</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/rzykov/metabase" target="_blank">/repro-issue</a></code></td></tr>
<tr><th align="left">Author<td>@rzykov</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/rzykov/metabase" target="_blank">rzykov/metabase</a></td></tr>
</table>

**Highlights:**

- Takes issue number as parameter
- Creates reproducible test case
- Ensures test fails reliably
- Documents reproduction steps

#### <a href="https://github.com/jerseycheese/Narraitor" target="_blank">/do-issue</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/jerseycheese/Narraitor" target="_blank">/do-issue</a></code></td></tr>
<tr><th align="left">Author<td>@jerseycheese</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/jerseycheese/Narraitor" target="_blank">jerseycheese/Narraitor</a></td></tr>
</table>

**Highlights:**

- Includes manual review points
- Follows structured approach
- Takes issue number as parameter
- Offers automated mode alternative

#### <a href="https://github.com/hackdays-io/toban-contribution-viewer" target="_blank">/explain-issue-fix</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/hackdays-io/toban-contribution-viewer" target="_blank">/explain-issue-fix</a></code></td></tr>
<tr><th align="left">Author<td>@hackdays-io</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/hackdays-io/toban-contribution-viewer" target="_blank">hackdays-io/toban-contribution-viewer</a></td></tr>
</table>

**Highlights:**

- Documents solution approach
- Explains technical decisions
- Details challenges overcome
- Provides implementation context

#### <a href="https://github.com/jerseycheese/Narraitor" target="_blank">/analyze-issue</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/jerseycheese/Narraitor" target="_blank">/analyze-issue</a></code></td></tr>
<tr><th align="left">Author<td>@jerseycheese</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/jerseycheese/Narraitor" target="_blank">jerseycheese/Narraitor</a></td></tr>
</table>

**Highlights:**

- Fetches issue details
- Creates comprehensive spec
- Analyzes requirements
- Plans implementation approach

### Requirements Engineering

#### <a href="https://github.com/Wirasm/claudecode-utils" target="_blank">/create-prp</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/Wirasm/claudecode-utils" target="_blank">/create-prp</a></code></td></tr>
<tr><th align="left">Author<td>@Wirasm</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/Wirasm/claudecode-utils" target="_blank">Wirasm/claudecode-utils</a></td></tr>
</table>

**Highlights:**

- Reads PRP methodology
- Follows template structure
- Creates comprehensive requirements
- Structures product definition

#### <a href="https://github.com/taddyorg/inkverse" target="_blank">/create-prd</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/taddyorg/inkverse" target="_blank">/create-prd</a></code></td></tr>
<tr><th align="left">Author<td>@taddyorg</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/taddyorg/inkverse" target="_blank">taddyorg/inkverse</a></td></tr>
</table>

**Highlights:**

- Outlines product specifications
- Details requirements
- Follows document structure
- Creates comprehensive PRD

#### <a href="https://github.com/taddyorg/inkverse" target="_blank">/create-jtbd</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/taddyorg/inkverse" target="_blank">/create-jtbd</a></code></td></tr>
<tr><th align="left">Author<td>@taddyorg</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/taddyorg/inkverse" target="_blank">taddyorg/inkverse</a></td></tr>
</table>

**Highlights:**

- Outlines user needs
- Creates JTBD structure
- Focuses on user problems
- Organizes by job categories

### Deployment and Operations

#### <a href="https://github.com/kelp/webdown" target="_blank">/release</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/kelp/webdown" target="_blank">/release</a></code></td></tr>
<tr><th align="left">Author<td>@kelp</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/kelp/webdown" target="_blank">kelp/webdown</a></td></tr>
</table>

**Highlights:**

- Updates changelog
- Reviews README changes
- Evaluates version increment
- Documents release changes

#### <a href="https://github.com/cloudartisan/cloudartisan.github.io" target="_blank">/site/deploy</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/cloudartisan/cloudartisan.github.io" target="_blank">/site/deploy</a></code></td></tr>
<tr><th align="left">Author<td>@cloudartisan</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/cloudartisan/cloudartisan.github.io" target="_blank">cloudartisan/cloudartisan.github.io</a></td></tr>
</table>

**Highlights:**

- Builds with production settings
- Verifies build success
- Commits and pushes changes
- Performs deployment check

#### <a href="https://github.com/berrydev-ai/blockdoc-python" target="_blank">/add-to-changelog</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/berrydev-ai/blockdoc-python" target="_blank">/add-to-changelog</a></code></td></tr>
<tr><th align="left">Author<td>@berrydev-ai</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/berrydev-ai/blockdoc-python" target="_blank">berrydev-ai/blockdoc-python</a></td></tr>
</table>

**Highlights:**

- Adds new entries
- Maintains changelog format
- Documents changes
- Follows project standards

### Analysis and Monitoring

#### <a href="https://github.com/Hkgstax/VALUGATOR" target="_blank">/analyze-code</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/Hkgstax/VALUGATOR" target="_blank">/analyze-code</a></code></td></tr>
<tr><th align="left">Author<td>@Hkgstax</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/Hkgstax/VALUGATOR" target="_blank">Hkgstax/VALUGATOR</a></td></tr>
</table>

**Highlights:**

- Reviews code structure
- Identifies key components
- Maps relationships
- Suggests improvements

#### <a href="https://github.com/TuckerTucker/tkr-agent-chat" target="_blank">/five</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/TuckerTucker/tkr-agent-chat" target="_blank">/five</a></code></td></tr>
<tr><th align="left">Author<td>@TuckerTucker</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/TuckerTucker/tkr-agent-chat" target="_blank">TuckerTucker/tkr-agent-chat</a></td></tr>
</table>

**Highlights:**

- Uses "five whys" methodology
- Performs root cause analysis
- Identifies underlying issues
- Creates solution approach

#### <a href="https://github.com/arkavo-org/opentdf-rs" target="_blank">/pr-review</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/arkavo-org/opentdf-rs" target="_blank">/pr-review</a></code></td></tr>
<tr><th align="left">Author<td>@arkavo-org</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/arkavo-org/opentdf-rs" target="_blank">arkavo-org/opentdf-rs</a></td></tr>
</table>

**Highlights:**

- Reviews PR changes
- Provides feedback
- Checks for issues
- Suggests improvements

### Project-Specific Tools

#### <a href="https://github.com/Mjvolk3/torchcell" target="_blank">/load_dango_pipeline</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/Mjvolk3/torchcell" target="_blank">/load_dango_pipeline</a></code></td></tr>
<tr><th align="left">Author<td>@Mjvolk3</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/Mjvolk3/torchcell" target="_blank">Mjvolk3/torchcell</a></td></tr>
</table>

**Highlights:**

- Sets context for model training
- References pipeline files
- Establishes working context
- Prepares for pipeline work

#### <a href="https://github.com/Mjvolk3/torchcell" target="_blank">/review_dcell_model</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/Mjvolk3/torchcell" target="_blank">/review_dcell_model</a></code></td></tr>
<tr><th align="left">Author<td>@Mjvolk3</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/Mjvolk3/torchcell" target="_blank">Mjvolk3/torchcell</a></td></tr>
</table>

**Highlights:**

- Reviews old Dcell files
- Compares with Dango model
- Notes 17-month changes
- Analyzes refactoring

#### <a href="https://github.com/Mjvolk3/torchcell" target="_blank">/fixing_go_in_graph</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/Mjvolk3/torchcell" target="_blank">/fixing_go_in_graph</a></code></td></tr>
<tr><th align="left">Author<td>@Mjvolk3</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/Mjvolk3/torchcell" target="_blank">Mjvolk3/torchcell</a></td></tr>
</table>

**Highlights:**

- Focuses on GO annotation integration
- Handles multiple data sources
- Addresses graph representation
- Ensures correct data incorporation

#### <a href="https://github.com/Mjvolk3/torchcell" target="_blank">/load_coo_context</a>

<table>
<tr><th align="left">Name<td><code><a href="https://github.com/Mjvolk3/torchcell" target="_blank">/load_coo_context</a></code></td></tr>
<tr><th align="left">Author<td>@Mjvolk3</td></tr>
<tr><th align="left">Repository<td><a href="https://github.com/Mjvolk3/torchcell" target="_blank">Mjvolk3/torchcell</a></td></tr>
</table>

**Highlights:**

- References specific files
- Explains transform usage
- Compares with previous approach
- Sets data formatting context

## [`CLAUDE.md` Files](#claudemd-files)

- [claude-code-mcp-enhanced](https://github.com/grahama1970/claude-code-mcp-enhanced/blob/66328d6bcc960c81ff24f6213ce5614000858698/CLAUDE.md) - Very detailed and emphatic set of instructions for Claude to follow as a coding agent, with testing, code examples, and compliance checks.

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

- [Smart TV](https://github.com/vitalets/awesome-smart-tv#readme) - Create apps for different TV platforms.
- [Claude Task Manager](https://gist.github.com/grahama1970/44a9da6a3da6769132037f06966945c2#file-00_readme-md) - A specialized tool to manage context isolation and focused task execution with Claude Code, solving the critical challenge of context length limitations and task focus when working with Claude on complex, multi-step projects.
- [Blogging Platform Instructions](https://github.com/cloudartisan/cloudartisan.github.io/tree/d1ed4928b1326dcf658991e0b83387455d1b5004/.claude/commands) - A `.claude/` directory with a well-structured set of commands for publishing and maintaining a blogging platform, including commands for creating posts, managing categories, and handling media files.

## Contributing

I'm still working out the best way to structure this repository, but if you have anything you'd like to add to the list, feel free to make a pull request or open an issue.
