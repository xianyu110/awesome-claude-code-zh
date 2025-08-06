<!--lint disable remark-lint:awesome-badge-->

#

<!-- [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) -->

<pre style="display: inline-block; text-align: left;">
 █████┐ ██┐    ██┐███████┐███████┐ ██████┐ ███┐   ███┐███████┐
██┌──██┐██│    ██│██┌────┘██┌────┘██┌───██┐████┐ ████│██┌────┘
███████│██│ █┐ ██│█████┐  ███████┐██│   ██│██┌████┌██│█████┐
██┌──██│██│███┐██│██┌──┘  └────██│██│   ██│██│└██┌┘██│██┌──┘
██│  ██│└███┌███┌┘███████┐███████│└██████┌┘██│ └─┘ ██│███████┐
└─┘  └─┘ └──┘└──┘ └──────┘└──────┘ └─────┘ └─┘     └─┘└──────┘

 ────────────────────────────────────────────────────────────────────────────────────

 ██████┐██┐      █████┐ ██┐   ██┐██████┐ ███████┐     ██████┐ ██████┐ ██████┐ ███████┐
██┌────┘██│     ██┌──██┐██│   ██│██┌──██┐██┌────┘    ██┌────┘██┌───██┐██┌──██┐██┌────┘
██│     ██│     ███████│██│   ██│██│  ██│█████┐      ██│     ██│   ██│██│  ██│█████┐
██│     ██│     ██┌──██│██│   ██│██│  ██│██┌──┘      ██│     ██│   ██│██│  ██│██┌──┘
└██████┐███████┐██│  ██│└██████┌┘██████┌┘███████┐    └██████┐└██████┌┘██████┌┘███████┐
 └─────┘└──────┘└─┘  └─┘ └─────┘ └─────┘ └──────┘     └─────┘ └─────┘ └─────┘ └──────┘
</pre>

<!--lint enable remark-lint:awesome-badge-->

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

# [Awesome Claude Code 中文版](https://github.com/hesreallyhim/awesome-claude-code) 🤝 [Awesome Claude Code Agents](https://github.com/hesreallyhim/awesome-claude-code-agents)

<!--lint enable remark-lint:awesome-badge-->

<!--lint disable double-link-->

> 🌍 **语言版本**: [简体中文](README.md) | [繁體中文](README-zh-TW.md) | [English](README-en.md)

这是一个精心策划的资源列表，包含斜杠命令、`CLAUDE.md` 文件、CLI 工具以及其他资源和指南，旨在增强您的 [Claude Code](https://docs.anthropic.com/en/docs/claude-code) 工作流程、生产力和体验。

<!--lint enable double-link-->

Claude Code 是一个前沿的基于 CLI 的编码助手和智能体，您可以在终端或 IDE 中访问它。这是一个快速发展的工具，提供许多强大的功能，并允许在许多不同方面进行大量配置。用户正在积极探索最佳实践和工作流程。我们希望这个仓库能够帮助社区分享知识并了解如何充分利用 Claude Code。

### 📢 公告

- 2025-01-30 - 快速更新：仍在完善提交流程（对于收到重复"恭喜！"问题的朋友表示歉意）。如果您在使用程序化提交工具时遇到问题，只需提交包含所有必要数据的内容，一旦获得批准我将处理其余部分。其他说明：(i) 我认为建立一个"Claude Code 排行榜"会很酷/有趣，请随时在 [讨论区](https://github.com/hesreallyhim/awesome-claude-code/discussions/81) 发表意见；(ii) 我仍在思考如何处理**子智能体**，并已联系其他启动类似仓库的朋友；(iii) 添加了一个小节，将随着新提交的到来而更新。

## 🆕 新增内容

- [`CC Notify`](https://github.com/dazuiba/CCNotify) 由 [dazuiba](https://github.com/dazuiba) 开发
- [`tweakcc`](https://github.com/Piebald-AI/tweakcc) 由 [Piebald-AI](https://github.com/Piebald-AI) 开发
- [`cchooks`](https://github.com/GowayLee/cchooks) 由 [GowayLee](https://github.com/GowayLee) 开发

<br>

## 📖 目录

▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[工作流程与知识指南](#工作流程与知识指南-)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[工具集](#工具集-)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[IDE 集成](#ide-集成)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[钩子函数](#钩子函数-)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[斜杠命令](#斜杠命令-)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[版本控制与 Git](#版本控制与-git)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[代码分析与测试](#代码分析与测试)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[上下文加载与预设](#上下文加载与预设)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[文档与变更日志](#文档与变更日志)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[持续集成与部署](#持续集成与部署)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[项目与任务管理](#项目与任务管理)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[其他功能](#其他功能)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[CLAUDE.md 文件](#claudemd-文件-)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[特定语言](#特定语言)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[特定领域](#特定领域)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[项目脚手架与 MCP](#项目脚手架与-mcp)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[官方文档](#官方文档-)  

<br>

## 工作流程与知识指南 🧠

> **工作流程**是一套紧密耦合的 Claude Code 原生资源，可促进特定项目的开发

[`博客平台指令`](https://github.com/cloudartisan/cloudartisan.github.io/tree/main/.claude/commands) &nbsp; 由 &nbsp; [cloudartisan](https://github.com/cloudartisan) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;CC-BY-SA-4.0  
提供一套结构良好的命令，用于发布和维护博客平台，包括创建文章、管理分类和处理媒体文件的命令。

[`ClaudeLog`](https://claudelog.com) &nbsp; 由 &nbsp; [InventorBlack](https://www.reddit.com/user/inventor_black/) 开发    
一个全面的知识库，详细介绍了高级[机制](https://claudelog.com/mechanics/you-are-the-main-thread/)，包括 [CLAUDE.md 最佳实践](https://claudelog.com/mechanics/claude-md-supremacy)、实用技术指南如[计划模式](https://claudelog.com/mechanics/plan-mode)、[超思考](https://claudelog.com/faqs/what-is-ultrathink/)、[子智能体](https://claudelog.com/mechanics/task-agent-tools/)、[智能体优先设计](https://claudelog.com/mechanics/agent-first-design/)和[配置指南](https://claudelog.com/configuration)。

[`上下文预设`](https://github.com/disler/just-prompt/tree/main/.claude/commands) &nbsp; 由 &nbsp; [disler](https://github.com/disler) 开发    
提供一种系统化的方法，通过针对不同项目场景和开发上下文的专门命令，为 Claude Code 提供全面的项目上下文预设。

[`n8n 智能体`](https://github.com/kingler/n8n_agent/tree/main/.claude/commands) &nbsp; 由 &nbsp; [kingler](https://github.com/kingler) 开发    
令人惊叹的全面命令集，涵盖代码分析、质量保证、设计、文档、项目结构、项目管理、优化等多个方面。

[`项目引导和任务管理`](https://github.com/steadycursor/steadystart/tree/main/.claude/commands) &nbsp; 由 &nbsp; [steadycursor](https://github.com/steadycursor) 开发    
提供一套结构化的命令，用于引导和管理新项目，包括用于创建和编辑自定义斜杠命令的元命令。

[`项目管理、实施、规划和发布`](https://github.com/scopecraft/command/tree/main/.claude/commands) &nbsp; 由 &nbsp; [scopecraft](https://github.com/scopecraft) 开发    
真正全面的命令集，涵盖软件开发生命周期的所有方面。

[`项目工作流程系统`](https://github.com/harperreed/dotfiles/tree/master/.claude/commands) &nbsp; 由 &nbsp; [harperreed](https://github.com/harperreed) 开发    
一套提供全面工作流程系统的命令，用于管理项目，包括任务管理、代码审查和部署流程。

[`使用 Claude 交付真实代码`](https://diwank.space/field-notes-from-shipping-real-code-with-claude) &nbsp; 由 &nbsp; [Diwank](https://github.com/creatorrr) 开发    
详细的博客文章，解释了作者使用 Claude Code 交付产品的过程，包括 CLAUDE.md 文件和其他有趣的资源。

[`Simone`](https://github.com/Helmi/claude-simone) &nbsp; 由 &nbsp; [Helmi](https://github.com/Helmi) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一个更广泛的 Claude Code 项目管理工作流程，不仅包含一套命令，还包含文档、指导原则和流程系统，以促进项目规划和执行。

[`斜杠命令大全`](https://github.com/wcygan/dotfiles/tree/d8ab6b9f5a7a81007b7f5fa3025d4f83ce12cc02/claude/commands) &nbsp; 由 &nbsp; [wcygan](https://github.com/wcygan) 开发    
一个相当令人惊叹的列表（发布时有 88 个！），涵盖智能体编排、代码审查、项目管理、安全、文档、自我评估等几乎任何您能想到的斜杠命令。

<br>

## 工具集 🧰

> **工具集**表示构建在 Claude Code 之上的应用程序，包含比斜杠命令和 `CLAUDE.md` 文件更多的组件

[`CC Usage`](https://github.com/ryoppippi/ccusage) &nbsp; 由 &nbsp; [ryoppippi](https://github.com/ryoppippi) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
用于管理和分析 Claude Code 使用情况的便捷 CLI 工具，基于分析本地 Claude Code 日志。提供关于成本信息、令牌消耗等的精美仪表板。

[`ccexp`](https://github.com/nyatinte/ccexp) &nbsp; 由 &nbsp; [nyatinte](https://github.com/nyatinte) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
用于发现和管理 Claude Code 配置文件和斜杠命令的交互式 CLI 工具，具有美观的终端用户界面。

[`cclogviewer`](https://github.com/Brads3290/cclogviewer) &nbsp; 由 &nbsp; [Brad S.](https://github.com/Brads3290) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一个简洁但实用的工具，用于在精美的 HTML 用户界面中查看 Claude Code `.jsonl` 对话文件。

[`Claude Code Flow`](https://github.com/ruvnet/claude-code-flow) &nbsp; 由 &nbsp; [ruvnet](https://github.com/ruvnet) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
此模式作为代码优先的编排层，使 Claude 能够在递归智能体循环中自主编写、编辑、测试和优化代码。

[`Claude Code 使用监控器`](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor) &nbsp; 由 &nbsp; [Maciek-roboblog](https://github.com/Maciek-roboblog) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
用于监控 Claude Code 令牌使用情况的实时基于终端的工具。显示实时令牌消耗、消耗率和令牌耗尽预测。功能包括可视化进度条、会话感知分析和对多种订阅计划的支持。

[`Claude Composer`](https://github.com/possibilities/claude-composer) &nbsp; 由 &nbsp; [Mike Bannister](https://github.com/possibilities) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Unlicense  
一个为 Claude Code 添加小改进的工具。

[`Claude Hub`](https://github.com/claude-did-this/claude-hub) &nbsp; 由 &nbsp; [Claude Did This](https://github.com/claude-did-this) 开发    
一个将 Claude Code 连接到 GitHub 仓库的 webhook 服务，通过拉取请求和问题直接启用 AI 驱动的代码协助。此集成允许 Claude 分析仓库、回答技术问题，并通过简单的 @提及帮助开发者理解和改进他们的代码库。

[`Claude Squad`](https://github.com/smtg-ai/claude-squad) &nbsp; 由 &nbsp; [smtg-ai](https://github.com/smtg-ai) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;AGPL-3.0  
Claude Squad 是一个终端应用程序，在独立工作区中管理多个 Claude Code、Codex（和其他本地智能体，包括 Aider），允许您同时处理多个任务。

[`Claude Swarm`](https://github.com/parruda/claude-swarm) &nbsp; 由 &nbsp; [parruda](https://github.com/parruda) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
启动连接到 Claude Code 智能体群的 Claude Code 会话。

[`Claude Task Master`](https://github.com/eyaltoledano/claude-task-master) &nbsp; 由 &nbsp; [eyaltoledano](https://github.com/eyaltoledano) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;NOASSERTION  
一个用于 AI 驱动开发的任务管理系统，设计与 Cursor AI 无缝协作。

[`Claude Task Runner`](https://github.com/grahama1970/claude-task-runner) &nbsp; 由 &nbsp; [grahama1970](https://github.com/grahama1970) 开发    
一个专门用于管理上下文隔离和使用 Claude Code 进行专注任务执行的工具，解决了在复杂多步骤项目中使用 Claude 时的上下文长度限制和任务专注的关键挑战。

[`claude-code-tools`](https://github.com/pchalasani/claude-code-tools) &nbsp; 由 &nbsp; [Prasad Chalasani](https://github.com/pchalasani) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一套令人惊叹的工具集合，包括 tmux 集成、更好的会话管理、增强安全性的钩子 - 一套制作精良的 Claude Code 增强器，特别适用于 tmux 用户。

[`Container Use`](https://github.com/dagger/container-use) &nbsp; 由 &nbsp; [dagger](https://github.com/dagger) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
用于编码智能体的开发环境。使多个智能体能够使用您首选的技术栈安全独立地工作。

[`TSK - AI 智能体任务管理器和沙箱`](https://github.com/dtormoen/tsk) &nbsp; 由 &nbsp; [dtormoen](https://github.com/dtormoen) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一个 Rust CLI 工具，让您可以将开发任务委托给在沙箱 Docker 环境中运行的 AI 智能体。多个智能体并行工作，返回 git 分支供人工审查。

[`tweakcc`](https://github.com/Piebald-AI/tweakcc) &nbsp; 由 &nbsp; [Piebald-AI](https://github.com/Piebald-AI) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
用于自定义 Claude Code 样式的命令行工具。


### IDE 集成

[`Claude Code Chat`](https://marketplace.visualstudio.com/items?itemName=AndrePimenta.claude-code-chat) &nbsp; 由 &nbsp; [andrepimenta](https://github.com/andrepimenta) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;&copy;  
一个优雅且用户友好的 VS Code Claude Code 聊天界面。

[`claude-code.el`](https://github.com/stevemolitor/claude-code.el) &nbsp; 由 &nbsp; [stevemolitor](https://github.com/stevemolitor) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
Claude Code CLI 的 Emacs 接口。

[`claude-code.nvim`](https://github.com/greggh/claude-code.nvim) &nbsp; 由 &nbsp; [greggh](https://github.com/greggh) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
Claude Code AI 助手与 Neovim 之间的无缝集成。

[`crystal`](https://github.com/stravu/crystal) &nbsp; 由 &nbsp; [stravu](https://github.com/stravu) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一个功能齐全的桌面应用程序，用于编排、监控和与 Claude Code 智能体交互。

<br>

## 钩子函数 🪝

> **钩子函数**是 Claude Code 的全新 API，允许用户在 Claude 智能体生命周期的不同时点激活命令和运行脚本。

**[实验性]** - 本节中列出的资源尚未完全验证，由于 Claude Code 钩子函数的前沿性质，可能无法按预期工作。尽管如此，我希望至少将它们作为灵感来源并探索这个未知领域。效果可能因人而异！

[`CC Notify`](https://github.com/dazuiba/CCNotify) &nbsp; 由 &nbsp; [dazuiba](https://github.com/dazuiba) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
CCNotify 为 Claude Code 提供桌面通知，在需要输入或任务完成时提醒您，并可一键跳转回 VS Code，显示任务持续时间。

[`cchooks`](https://github.com/GowayLee/cchooks) &nbsp; 由 &nbsp; [GowayLee](https://github.com/GowayLee) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一个轻量级的 Python SDK，具有清晰的 API 和良好的文档；简化了编写钩子函数和将其集成到代码库中的过程，在 JSON 配置文件上提供了良好的抽象。

[`claude-code-hooks-sdk`](https://github.com/beyondcode/claude-hooks-sdk) &nbsp; 由 &nbsp; [beyondcode](https://github.com/beyondcode) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一个 Laravel 风格的 PHP SDK，用于构建具有清晰、流畅 API 的 Claude Code 钩子响应。此 SDK 使用富有表现力的可链式接口轻松创建 Claude Code 钩子的结构化 JSON 响应。

[`claude-hooks`](https://github.com/johnlindquist/claude-hooks) &nbsp; 由 &nbsp; [John Lindquist](https://github.com/johnlindquist) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一个基于 TypeScript 的系统，用于配置和自定义具有强大灵活接口的 Claude Code 钩子函数。

[`代码检查、测试和通知（Go 语言）`](https://github.com/Veraticus/nix-config/tree/main/home-manager/claude-code/hooks) &nbsp; 由 &nbsp; [Josh Symonds](https://github.com/Veraticus) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一套用于强制代码质量（代码检查、测试、通知）的精美钩子函数，同时具有良好的配置设置。

[`TDD Guard`](https://github.com/nizos/tdd-guard) &nbsp; 由 &nbsp; [Nizar Selander](https://github.com/nizos) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一个基于钩子函数驱动的系统，实时监控文件操作并阻止违反 TDD 原则的更改。

<br>

## 斜杠命令 🔪

### 版本控制与 Git

[`/bug-fix`](https://github.com/danielscholl/mvn-mcp-server/blob/main/.claude/commands/bug-fix.md) &nbsp; 由 &nbsp; [danielscholl](https://github.com/danielscholl) 开发    
通过首先创建 GitHub 问题，然后创建功能分支来实现和彻底测试解决方案，最后合并，从而简化错误修复流程。

[`/commit`](https://github.com/evmts/tevm-monorepo/blob/main/.claude/commands/commit.md) &nbsp; 由 &nbsp; [evmts](https://github.com/evmts) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
使用传统提交格式和适当的表情符号创建 git 提交，遵循项目标准并创建解释更改目的的描述性消息。

[`/commit-fast`](https://github.com/steadycursor/steadystart/blob/main/.claude/commands/2-commit-fast.md) &nbsp; 由 &nbsp; [steadycursor](https://github.com/steadycursor) 开发    
通过选择第一个建议的消息自动化 git 提交过程，生成具有一致格式的结构化提交，同时跳过手动确认并删除 Claude 共同贡献者页脚。

[`/create-pr`](https://github.com/toyamarinyon/giselle/blob/main/.claude/commands/create-pr.md) &nbsp; 由 &nbsp; [toyamarinyon](https://github.com/toyamarinyon) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
通过处理整个工作流程简化拉取请求创建：创建新分支、提交更改、使用 Biome 格式化修改的文件并提交 PR。

[`/create-pull-request`](https://github.com/liam-hq/liam/blob/main/.claude/commands/create-pull-request.md) &nbsp; 由 &nbsp; [liam-hq](https://github.com/liam-hq) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
使用 GitHub CLI 提供全面的 PR 创建指导，强制执行标题约定，遵循模板结构，并提供具有最佳实践的具体命令示例。

### 代码分析与测试

[`/check`](https://github.com/rygwdn/slack-tools/blob/main/.claude/commands/check.md) &nbsp; 由 &nbsp; [rygwdn](https://github.com/rygwdn) 开发    
执行全面的代码质量和安全检查，具有静态分析集成、安全漏洞扫描、代码风格强制执行和详细报告功能。

[`/clean`](https://github.com/Graphlet-AI/eridu/blob/main/.claude/commands/clean.md) &nbsp; 由 &nbsp; [Graphlet-AI](https://github.com/Graphlet-AI) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
通过修复 black 格式化问题、使用 isort 组织导入、解决 flake8 代码检查问题和纠正 mypy 类型错误来解决代码格式化和质量问题。

[`/optimize`](https://github.com/to4iki/ai-project-rules/blob/main/.claude/commands/optimize.md) &nbsp; 由 &nbsp; [to4iki](https://github.com/to4iki) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
分析代码性能以识别瓶颈，提出具体的优化建议和实现指导，以提高应用程序性能。

### 上下文加载与预设

[`/context-prime`](https://github.com/elizaOS/elizaos.github.io/blob/main/.claude/commands/context-prime.md) &nbsp; 由 &nbsp; [elizaOS](https://github.com/elizaOS) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
通过加载仓库结构、设置开发上下文、确立项目目标和定义协作参数，为 Claude 提供全面的项目理解预设。

[`/prime`](https://github.com/yzyydev/AI-Engineering-Structure/blob/main/.claude/commands/prime.md) &nbsp; 由 &nbsp; [yzyydev](https://github.com/yzyydev) 开发    
通过查看目录结构和阅读关键文件来设置初始项目上下文，创建具有目录可视化和关键文档焦点的标准化上下文。

### 文档与变更日志

[`/docs`](https://github.com/slunsford/coffee-analytics/blob/main/.claude/commands/docs.md) &nbsp; 由 &nbsp; [slunsford](https://github.com/slunsford) 开发    
生成遵循项目结构的全面文档，记录 API 和使用模式，具有一致的格式以便更好地理解用户需求。

### 项目与任务管理

[`/todo`](https://github.com/chrisleyva/todo-slash-command/blob/main/todo.md) &nbsp; 由 &nbsp; [chrisleyva](https://github.com/chrisleyva) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一个方便的命令，无需离开 Claude Code 界面即可快速管理项目待办事项，具有截止日期、排序、任务优先级和全面的待办事项列表管理功能。

<br>

## CLAUDE.md 文件 📂

> **`CLAUDE.md` 文件**是包含重要指导原则和上下文特定信息或说明的文件，帮助 Claude Code 更好地理解您的项目和编码标准

### 特定语言

[`Giselle`](https://github.com/giselles-ai/giselle/blob/main/CLAUDE.md) &nbsp; 由 &nbsp; [giselles-ai](https://github.com/giselles-ai) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
使用 pnpm 和 Vitest 提供详细的构建和测试命令，具有严格的代码格式要求和全面的命名约定以保持代码一致性。

[`Metabase`](https://github.com/metabase/metabase/blob/master/CLAUDE.md) &nbsp; 由 &nbsp; [metabase](https://github.com/metabase) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;NOASSERTION  
详细介绍了 Clojure/ClojureScript 中 REPL 驱动开发的工作流程，强调增量开发、测试和功能实现的逐步方法。

### 特定领域

[`Course Builder`](https://github.com/badass-courses/course-builder/blob/main/CLAUDE.md) &nbsp; 由 &nbsp; [badass-courses](https://github.com/badass-courses) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
为协作课程创建启用实时多人游戏功能，具有多样化的技术栈集成和使用 Turborepo 的单体仓库架构。

### 项目脚手架与 MCP

[`claude-code-mcp-enhanced`](https://github.com/grahama1970/claude-code-mcp-enhanced/blob/main/CLAUDE.md) &nbsp; 由 &nbsp; [grahama1970](https://github.com/grahama1970) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
为 Claude 作为编码智能体提供详细而强调的说明，包含测试指导、代码示例和合规性检查。

<br>

## 官方文档 🏛️

> 链接到 Anthropic 关于 Claude Code 的一些出色文档和资源

<!--lint disable double-link-->

[`Anthropic 文档`](https://docs.anthropic.com/en/docs/claude-code) &nbsp; 由 &nbsp; [Anthropic](https://github.com/anthropics) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;&copy;  
Claude Code 的官方文档，包括安装说明、使用指南、API 参考、教程、示例以及大量我不会单独列出的信息。与 Claude Code 一样，文档经常更新。

[`Anthropic 快速入门`](https://github.com/anthropics/anthropic-quickstarts/blob/main/CLAUDE.md) &nbsp; 由 &nbsp; [Anthropic](https://github.com/anthropics) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
为三个不同的 AI 驱动演示项目提供全面的开发指南，具有标准化工作流程、严格的代码风格指南和容器化说明。

[`Claude Code GitHub Actions`](https://github.com/anthropics/claude-code-action/tree/main/examples) &nbsp; 由 &nbsp; [Anthropic](https://github.com/anthropics) 开发 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
Claude Code 的官方 GitHub Actions 集成，包含在 CI/CD 管道中自动化 AI 驱动工作流程的示例和文档。

## 🔄 与上游同步

本项目与原始英文项目 [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) 保持同步。

### 🤖 自动同步
- **每日自动检查**: 北京时间每天早上 8 点自动检查上游更新
- **英文版本同步**: 自动更新 `README-en.md` 文件
- **中文内容保护**: 不会覆盖中文翻译内容
- **同步报告**: 自动创建 Issue 报告同步状态

### 🛠️ 手动同步
```bash
# 使用同步脚本
./scripts/sync-upstream.sh

# 强制同步
./scripts/sync-upstream.sh --force
```

📖 **详细说明**: 查看 [上游同步指南](docs/SYNC_UPSTREAM.md) 了解完整的同步流程。

---

## 🤝 贡献

### 🚀 **[在这里提交新资源！](https://github.com/hesreallyhim/awesome-claude-code/issues/new?template=submit-resource.yml)**

很简单！只需点击上面的链接并填写表单。无需 Git 知识 - 我们的自动化系统为您处理一切。

**我们特别欢迎：**

- 经过验证、有效的资源，遵循最佳实践，甚至可能在生产环境中使用
- 创新、创造性或实验性的工作流程，推动 Claude Code 功能的边界
- 构建在 Claude Code 之上的其他库和工具
- Claude Code 在传统"编码助手"上下文之外的应用（CI/CD、测试、文档、开发运维等）

查看 [CONTRIBUTING.md](CONTRIBUTING.md) 获取完整的提交指南和审查流程。

有关仓库本身的建议，请[打开一般问题](https://github.com/hesreallyhim/awesome-claude-code/issues/new)。

本项目采用[贡献者行为准则](code-of-conduct.md)发布。通过参与，您同意遵守其条款。

### 关于许可证的说明

由于简单列出超链接不符合重新分发的条件，原始源的许可证与其包含无关。但是，为了后代和便利，我们确实托管了所有许可证允许的资源副本。因此，请包含有关资源许可证的信息。另外请注意：_如果您的 GitHub 仓库中不包含 LICENSE，那么默认情况下它是完全受版权保护的，不允许重新分发_。因此，如果您打算制作开源项目，选择众多可用的开源许可证之一是至关重要的。这只是一个提醒，没有 LICENSE 的情况下，您的项目不是开源的（它只是源代码可用） - 当然仍可能包含在此列表中，但此通知是为了告知读者有关 GitHub 和 LICENSE 文件的默认规则。查看[这里](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)获取更多详细信息。