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

- TODO

## [CLI Workflows](#cli-workflows)

- TODO

## Contributing

I'm still working out the best way to structure this repository, but if you have anything you'd like to add to the list, feel free to make a pull request or open an issue.
