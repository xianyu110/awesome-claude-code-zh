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

# [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code) 🤝 [Awesome Claude Code Agents](https://github.com/hesreallyhim/awesome-claude-code-agents)

<!--lint enable remark-lint:awesome-badge-->

<!--lint disable double-link-->

> 🌍 **語言版本**: [简体中文](README.md) | [繁體中文](README-zh-TW.md) | [English](README-en.md)

這是一個精心策劃的資源列表，包含斜杠命令、`CLAUDE.md` 檔案、CLI 工具以及其他資源和指南，旨在增強您的 [Claude Code](https://docs.anthropic.com/en/docs/claude-code) 工作流程、生產力和體驗。

<!--lint enable double-link-->

Claude Code 是一個前沿的基於 CLI 的編碼助手和智慧體，您可以在終端或 IDE 中存取它。這是一個快速發展的工具，提供許多強大的功能，並允許在許多不同方面進行大量配置。使用者正在積極探索最佳實踐和工作流程。我們希望這個倉庫能夠幫助社群分享知識並了解如何充分利用 Claude Code。

### 📢 公告

- 2025-01-30 - 快速更新：仍在完善提交流程（對於收到重複「恭喜！」問題的朋友表示歉意）。如果您在使用程式化提交工具時遇到問題，只需提交包含所有必要資料的內容，一旦獲得批准我將處理其餘部分。其他說明：(i) 我認為建立一個「Claude Code 排行榜」會很酷/有趣，請隨時在 [討論區](https://github.com/hesreallyhim/awesome-claude-code/discussions/81) 發表意見；(ii) 我仍在思考如何處理**子智慧體**，並已聯繫其他啟動類似倉庫的朋友；(iii) 添加了一個小節，將隨著新提交的到來而更新。

## 🆕 新增內容

- [`CC Notify`](https://github.com/dazuiba/CCNotify) 由 [dazuiba](https://github.com/dazuiba) 開發
- [`tweakcc`](https://github.com/Piebald-AI/tweakcc) 由 [Piebald-AI](https://github.com/Piebald-AI) 開發
- [`cchooks`](https://github.com/GowayLee/cchooks) 由 [GowayLee](https://github.com/GowayLee) 開發

<br>

## 📖 目錄

▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[工作流程與知識指南](#工作流程與知識指南-)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[工具集](#工具集-)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[IDE 整合](#ide-整合)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[鉤子函式](#鉤子函式-)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[斜杠命令](#斜杠命令-)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[版本控制與 Git](#版本控制與-git)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[程式碼分析與測試](#程式碼分析與測試)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[上下文載入與預設](#上下文載入與預設)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[文件與變更日誌](#文件與變更日誌)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[持續整合與部署](#持續整合與部署)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[專案與任務管理](#專案與任務管理)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[其他功能](#其他功能)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[CLAUDE.md 檔案](#claudemd-檔案-)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[特定語言](#特定語言)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[特定領域](#特定領域)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[專案腳手架與 MCP](#專案腳手架與-mcp)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[官方文件](#官方文件-)  

<br>

## 工作流程與知識指南 🧠

> **工作流程**是一套緊密耦合的 Claude Code 原生資源，可促進特定專案的開發

[`部落格平台指令`](https://github.com/cloudartisan/cloudartisan.github.io/tree/main/.claude/commands) &nbsp; 由 &nbsp; [cloudartisan](https://github.com/cloudartisan) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;CC-BY-SA-4.0  
提供一套結構良好的命令，用於發布和維護部落格平台，包括建立文章、管理分類和處理媒體檔案的命令。

[`ClaudeLog`](https://claudelog.com) &nbsp; 由 &nbsp; [InventorBlack](https://www.reddit.com/user/inventor_black/) 開發    
一個全面的知識庫，詳細介紹了高級[機制](https://claudelog.com/mechanics/you-are-the-main-thread/)，包括 [CLAUDE.md 最佳實踐](https://claudelog.com/mechanics/claude-md-supremacy)、實用技術指南如[計畫模式](https://claudelog.com/mechanics/plan-mode)、[超思考](https://claudelog.com/faqs/what-is-ultrathink/)、[子智慧體](https://claudelog.com/mechanics/task-agent-tools/)、[智慧體優先設計](https://claudelog.com/mechanics/agent-first-design/)和[配置指南](https://claudelog.com/configuration)。

[`上下文預設`](https://github.com/disler/just-prompt/tree/main/.claude/commands) &nbsp; 由 &nbsp; [disler](https://github.com/disler) 開發    
提供一種系統化的方法，透過針對不同專案場景和開發上下文的專門命令，為 Claude Code 提供全面的專案上下文預設。

[`n8n 智慧體`](https://github.com/kingler/n8n_agent/tree/main/.claude/commands) &nbsp; 由 &nbsp; [kingler](https://github.com/kingler) 開發    
令人驚嘆的全面命令集，涵蓋程式碼分析、品質保證、設計、文件、專案結構、專案管理、最佳化等多個方面。

[`專案引導和任務管理`](https://github.com/steadycursor/steadystart/tree/main/.claude/commands) &nbsp; 由 &nbsp; [steadycursor](https://github.com/steadycursor) 開發    
提供一套結構化的命令，用於引導和管理新專案，包括用於建立和編輯自訂斜杠命令的元命令。

[`專案管理、實施、規劃和發布`](https://github.com/scopecraft/command/tree/main/.claude/commands) &nbsp; 由 &nbsp; [scopecraft](https://github.com/scopecraft) 開發    
真正全面的命令集，涵蓋軟體開發生命週期的所有方面。

[`專案工作流程系統`](https://github.com/harperreed/dotfiles/tree/master/.claude/commands) &nbsp; 由 &nbsp; [harperreed](https://github.com/harperreed) 開發    
一套提供全面工作流程系統的命令，用於管理專案，包括任務管理、程式碼審查和部署流程。

[`使用 Claude 交付真實程式碼`](https://diwank.space/field-notes-from-shipping-real-code-with-claude) &nbsp; 由 &nbsp; [Diwank](https://github.com/creatorrr) 開發    
詳細的部落格文章，解釋了作者使用 Claude Code 交付產品的過程，包括 CLAUDE.md 檔案和其他有趣的資源。

[`Simone`](https://github.com/Helmi/claude-simone) &nbsp; 由 &nbsp; [Helmi](https://github.com/Helmi) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一個更廣泛的 Claude Code 專案管理工作流程，不僅包含一套命令，還包含文件、指導原則和流程系統，以促進專案規劃和執行。

[`斜杠命令大全`](https://github.com/wcygan/dotfiles/tree/d8ab6b9f5a7a81007b7f5fa3025d4f83ce12cc02/claude/commands) &nbsp; 由 &nbsp; [wcygan](https://github.com/wcygan) 開發    
一個相當令人驚嘆的列表（發布時有 88 個！），涵蓋智慧體編排、程式碼審查、專案管理、安全、文件、自我評估等幾乎任何您能想到的斜杠命令。

<br>

## 工具集 🧰

> **工具集**表示構建在 Claude Code 之上的應用程式，包含比斜杠命令和 `CLAUDE.md` 檔案更多的組件

[`CC Usage`](https://github.com/ryoppippi/ccusage) &nbsp; 由 &nbsp; [ryoppippi](https://github.com/ryoppippi) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
用於管理和分析 Claude Code 使用情況的便捷 CLI 工具，基於分析本地 Claude Code 日誌。提供關於成本資訊、令牌消耗等的精美儀表板。

[`ccexp`](https://github.com/nyatinte/ccexp) &nbsp; 由 &nbsp; [nyatinte](https://github.com/nyatinte) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
用於發現和管理 Claude Code 配置檔案和斜杠命令的互動式 CLI 工具，具有美觀的終端使用者介面。

[`cclogviewer`](https://github.com/Brads3290/cclogviewer) &nbsp; 由 &nbsp; [Brad S.](https://github.com/Brads3290) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一個簡潔但實用的工具，用於在精美的 HTML 使用者介面中檢視 Claude Code `.jsonl` 對話檔案。

[`Claude Code Flow`](https://github.com/ruvnet/claude-code-flow) &nbsp; 由 &nbsp; [ruvnet](https://github.com/ruvnet) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
此模式作為程式碼優先的編排層，使 Claude 能夠在遞迴智慧體循環中自主編寫、編輯、測試和最佳化程式碼。

[`Claude Code 使用監控器`](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor) &nbsp; 由 &nbsp; [Maciek-roboblog](https://github.com/Maciek-roboblog) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
用於監控 Claude Code 令牌使用情況的即時基於終端的工具。顯示即時令牌消耗、消耗率和令牌耗盡預測。功能包括視覺化進度條、會話感知分析和對多種訂閱方案的支援。

[`Claude Composer`](https://github.com/possibilities/claude-composer) &nbsp; 由 &nbsp; [Mike Bannister](https://github.com/possibilities) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Unlicense  
一個為 Claude Code 添加小改進的工具。

[`Claude Hub`](https://github.com/claude-did-this/claude-hub) &nbsp; 由 &nbsp; [Claude Did This](https://github.com/claude-did-this) 開發    
一個將 Claude Code 連接到 GitHub 倉庫的 webhook 服務，透過拉取請求和問題直接啟用 AI 驅動的程式碼協助。此整合允許 Claude 分析倉庫、回答技術問題，並透過簡單的 @提及幫助開發者理解和改進他們的程式碼庫。

[`Claude Squad`](https://github.com/smtg-ai/claude-squad) &nbsp; 由 &nbsp; [smtg-ai](https://github.com/smtg-ai) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;AGPL-3.0  
Claude Squad 是一個終端應用程式，在獨立工作區中管理多個 Claude Code、Codex（和其他本地智慧體，包括 Aider），允許您同時處理多個任務。

[`Claude Swarm`](https://github.com/parruda/claude-swarm) &nbsp; 由 &nbsp; [parruda](https://github.com/parruda) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
啟動連接到 Claude Code 智慧體群的 Claude Code 會話。

[`Claude Task Master`](https://github.com/eyaltoledano/claude-task-master) &nbsp; 由 &nbsp; [eyaltoledano](https://github.com/eyaltoledano) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;NOASSERTION  
一個用於 AI 驅動開發的任務管理系統，設計與 Cursor AI 無縫協作。

[`Claude Task Runner`](https://github.com/grahama1970/claude-task-runner) &nbsp; 由 &nbsp; [grahama1970](https://github.com/grahama1970) 開發    
一個專門用於管理上下文隔離和使用 Claude Code 進行專注任務執行的工具，解決了在複雜多步驟專案中使用 Claude 時的上下文長度限制和任務專注的關鍵挑戰。

[`claude-code-tools`](https://github.com/pchalasani/claude-code-tools) &nbsp; 由 &nbsp; [Prasad Chalasani](https://github.com/pchalasani) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一套令人驚嘆的工具集合，包括 tmux 整合、更好的會話管理、增強安全性的鉤子 - 一套製作精良的 Claude Code 增強器，特別適用於 tmux 使用者。

[`Container Use`](https://github.com/dagger/container-use) &nbsp; 由 &nbsp; [dagger](https://github.com/dagger) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
用於編碼智慧體的開發環境。使多個智慧體能夠使用您首選的技術堆疊安全獨立地工作。

[`TSK - AI 智慧體任務管理器和沙箱`](https://github.com/dtormoen/tsk) &nbsp; 由 &nbsp; [dtormoen](https://github.com/dtormoen) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一個 Rust CLI 工具，讓您可以將開發任務委託給在沙箱 Docker 環境中執行的 AI 智慧體。多個智慧體並行工作，回傳 git 分支供人工審查。

[`tweakcc`](https://github.com/Piebald-AI/tweakcc) &nbsp; 由 &nbsp; [Piebald-AI](https://github.com/Piebald-AI) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
用於自訂 Claude Code 樣式的命令列工具。


### IDE 整合

[`Claude Code Chat`](https://marketplace.visualstudio.com/items?itemName=AndrePimenta.claude-code-chat) &nbsp; 由 &nbsp; [andrepimenta](https://github.com/andrepimenta) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;&copy;  
一個優雅且使用者友好的 VS Code Claude Code 聊天介面。

[`claude-code.el`](https://github.com/stevemolitor/claude-code.el) &nbsp; 由 &nbsp; [stevemolitor](https://github.com/stevemolitor) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
Claude Code CLI 的 Emacs 介面。

[`claude-code.nvim`](https://github.com/greggh/claude-code.nvim) &nbsp; 由 &nbsp; [greggh](https://github.com/greggh) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
Claude Code AI 助手與 Neovim 之間的無縫整合。

[`crystal`](https://github.com/stravu/crystal) &nbsp; 由 &nbsp; [stravu](https://github.com/stravu) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一個功能齊全的桌面應用程式，用於編排、監控和與 Claude Code 智慧體互動。

<br>

## 鉤子函式 🪝

> **鉤子函式**是 Claude Code 的全新 API，允許使用者在 Claude 智慧體生命週期的不同時點啟動命令和執行指令碼。

**[實驗性]** - 本節中列出的資源尚未完全驗證，由於 Claude Code 鉤子函式的前沿性質，可能無法按預期工作。儘管如此，我希望至少將它們作為靈感來源並探索這個未知領域。效果可能因人而異！

[`CC Notify`](https://github.com/dazuiba/CCNotify) &nbsp; 由 &nbsp; [dazuiba](https://github.com/dazuiba) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
CCNotify 為 Claude Code 提供桌面通知，在需要輸入或任務完成時提醒您，並可一鍵跳轉回 VS Code，顯示任務持續時間。

[`cchooks`](https://github.com/GowayLee/cchooks) &nbsp; 由 &nbsp; [GowayLee](https://github.com/GowayLee) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一個輕量級的 Python SDK，具有清晰的 API 和良好的文件；簡化了編寫鉤子函式和將其整合到程式碼庫中的過程，在 JSON 配置檔案上提供了良好的抽象。

[`claude-code-hooks-sdk`](https://github.com/beyondcode/claude-hooks-sdk) &nbsp; 由 &nbsp; [beyondcode](https://github.com/beyondcode) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一個 Laravel 風格的 PHP SDK，用於構建具有清晰、流暢 API 的 Claude Code 鉤子回應。此 SDK 使用富有表現力的可鏈式介面輕鬆建立 Claude Code 鉤子的結構化 JSON 回應。

[`claude-hooks`](https://github.com/johnlindquist/claude-hooks) &nbsp; 由 &nbsp; [John Lindquist](https://github.com/johnlindquist) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一個基於 TypeScript 的系統，用於配置和自訂具有強大靈活介面的 Claude Code 鉤子函式。

[`程式碼檢查、測試和通知（Go 語言）`](https://github.com/Veraticus/nix-config/tree/main/home-manager/claude-code/hooks) &nbsp; 由 &nbsp; [Josh Symonds](https://github.com/Veraticus) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一套用於強制程式碼品質（程式碼檢查、測試、通知）的精美鉤子函式，同時具有良好的配置設定。

[`TDD Guard`](https://github.com/nizos/tdd-guard) &nbsp; 由 &nbsp; [Nizar Selander](https://github.com/nizos) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一個基於鉤子函式驅動的系統，即時監控檔案操作並阻止違反 TDD 原則的變更。

<br>

## 斜杠命令 🔪

### 版本控制與 Git

[`/bug-fix`](https://github.com/danielscholl/mvn-mcp-server/blob/main/.claude/commands/bug-fix.md) &nbsp; 由 &nbsp; [danielscholl](https://github.com/danielscholl) 開發    
透過首先建立 GitHub 問題，然後建立功能分支來實現和徹底測試解決方案，最後合併，從而簡化錯誤修復流程。

[`/commit`](https://github.com/evmts/tevm-monorepo/blob/main/.claude/commands/commit.md) &nbsp; 由 &nbsp; [evmts](https://github.com/evmts) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
使用傳統提交格式和適當的表情符號建立 git 提交，遵循專案標準並建立解釋變更目的的描述性訊息。

[`/commit-fast`](https://github.com/steadycursor/steadystart/blob/main/.claude/commands/2-commit-fast.md) &nbsp; 由 &nbsp; [steadycursor](https://github.com/steadycursor) 開發    
透過選擇第一個建議的訊息自動化 git 提交過程，產生具有一致格式的結構化提交，同時跳過手動確認並刪除 Claude 共同貢獻者頁尾。

[`/create-pr`](https://github.com/toyamarinyon/giselle/blob/main/.claude/commands/create-pr.md) &nbsp; 由 &nbsp; [toyamarinyon](https://github.com/toyamarinyon) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
透過處理整個工作流程簡化拉取請求建立：建立新分支、提交變更、使用 Biome 格式化修改的檔案並提交 PR。

[`/create-pull-request`](https://github.com/liam-hq/liam/blob/main/.claude/commands/create-pull-request.md) &nbsp; 由 &nbsp; [liam-hq](https://github.com/liam-hq) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
使用 GitHub CLI 提供全面的 PR 建立指導，強制執行標題約定，遵循範本結構，並提供具有最佳實踐的具體命令範例。


### 程式碼分析與測試

[`/check`](https://github.com/rygwdn/slack-tools/blob/main/.claude/commands/check.md) &nbsp; 由 &nbsp; [rygwdn](https://github.com/rygwdn) 開發    
執行全面的程式碼品質和安全檢查，具有靜態分析整合、安全漏洞掃描、程式碼風格強制執行和詳細報告功能。

[`/clean`](https://github.com/Graphlet-AI/eridu/blob/main/.claude/commands/clean.md) &nbsp; 由 &nbsp; [Graphlet-AI](https://github.com/Graphlet-AI) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
透過修復 black 格式化問題、使用 isort 組織匯入、解決 flake8 程式碼檢查問題和糾正 mypy 類型錯誤來解決程式碼格式化和品質問題。

[`/optimize`](https://github.com/to4iki/ai-project-rules/blob/main/.claude/commands/optimize.md) &nbsp; 由 &nbsp; [to4iki](https://github.com/to4iki) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
分析程式碼效能以識別瓶頸，提出具體的最佳化建議和實現指導，以提高應用程式效能。


### 上下文載入與預設

[`/context-prime`](https://github.com/elizaOS/elizaos.github.io/blob/main/.claude/commands/context-prime.md) &nbsp; 由 &nbsp; [elizaOS](https://github.com/elizaOS) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
透過載入倉庫結構、設定開發上下文、確立專案目標和定義協作參數，為 Claude 提供全面的專案理解預設。

[`/prime`](https://github.com/yzyydev/AI-Engineering-Structure/blob/main/.claude/commands/prime.md) &nbsp; 由 &nbsp; [yzyydev](https://github.com/yzyydev) 開發    
透過檢視目錄結構和閱讀關鍵檔案來設定初始專案上下文，建立具有目錄視覺化和關鍵文件焦點的標準化上下文。


### 文件與變更日誌

[`/docs`](https://github.com/slunsford/coffee-analytics/blob/main/.claude/commands/docs.md) &nbsp; 由 &nbsp; [slunsford](https://github.com/slunsford) 開發    
產生遵循專案結構的全面文件，記錄 API 和使用模式，具有一致的格式以便更好地理解使用者需求。


### 專案與任務管理

[`/todo`](https://github.com/chrisleyva/todo-slash-command/blob/main/todo.md) &nbsp; 由 &nbsp; [chrisleyva](https://github.com/chrisleyva) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
一個方便的命令，無需離開 Claude Code 介面即可快速管理專案待辦事項，具有截止日期、排序、任務優先級和全面的待辦事項清單管理功能。

<br>

## CLAUDE.md 檔案 📂

> **`CLAUDE.md` 檔案**是包含重要指導原則和上下文特定資訊或說明的檔案，幫助 Claude Code 更好地理解您的專案和編碼標準

### 特定語言

[`Giselle`](https://github.com/giselles-ai/giselle/blob/main/CLAUDE.md) &nbsp; 由 &nbsp; [giselles-ai](https://github.com/giselles-ai) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;Apache-2.0  
使用 pnpm 和 Vitest 提供詳細的建置和測試命令，具有嚴格的程式碼格式要求和全面的命名約定以保持程式碼一致性。

[`Metabase`](https://github.com/metabase/metabase/blob/master/CLAUDE.md) &nbsp; 由 &nbsp; [metabase](https://github.com/metabase) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;NOASSERTION  
詳細介紹了 Clojure/ClojureScript 中 REPL 驅動開發的工作流程，強調增量開發、測試和功能實現的逐步方法。


### 特定領域

[`Course Builder`](https://github.com/badass-courses/course-builder/blob/main/CLAUDE.md) &nbsp; 由 &nbsp; [badass-courses](https://github.com/badass-courses) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
為協作課程建立啟用即時多人遊戲功能，具有多樣化的技術堆疊整合和使用 Turborepo 的單體倉庫架構。


### 專案腳手架與 MCP

[`claude-code-mcp-enhanced`](https://github.com/grahama1970/claude-code-mcp-enhanced/blob/main/CLAUDE.md) &nbsp; 由 &nbsp; [grahama1970](https://github.com/grahama1970) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
為 Claude 作為編碼智慧體提供詳細而強調的說明，包含測試指導、程式碼範例和合規性檢查。

<br>

## 官方文件 🏛️

> 連結到 Anthropic 關於 Claude Code 的一些出色文件和資源

<!--lint disable double-link-->

[`Anthropic 文件`](https://docs.anthropic.com/en/docs/claude-code) &nbsp; 由 &nbsp; [Anthropic](https://github.com/anthropics) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;&copy;  
Claude Code 的官方文件，包括安裝說明、使用指南、API 參考、教學、範例以及大量我不會單獨列出的資訊。與 Claude Code 一樣，文件經常更新。

[`Anthropic 快速入門`](https://github.com/anthropics/anthropic-quickstarts/blob/main/CLAUDE.md) &nbsp; 由 &nbsp; [Anthropic](https://github.com/anthropics) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
為三個不同的 AI 驅動示範專案提供全面的開發指南，具有標準化工作流程、嚴格的程式碼風格指南和容器化說明。

[`Claude Code GitHub Actions`](https://github.com/anthropics/claude-code-action/tree/main/examples) &nbsp; 由 &nbsp; [Anthropic](https://github.com/anthropics) 開發 &nbsp;&nbsp;⚖️&nbsp;&nbsp;MIT  
Claude Code 的官方 GitHub Actions 整合，包含在 CI/CD 管線中自動化 AI 驅動工作流程的範例和文件。


## 🤝 貢獻

### 🚀 **[在這裡提交新資源！](https://github.com/hesreallyhim/awesome-claude-code/issues/new?template=submit-resource.yml)**

很簡單！只需點擊上面的連結並填寫表單。無需 Git 知識 - 我們的自動化系統為您處理一切。

**我們特別歡迎：**

- 經過驗證、有效的資源，遵循最佳實踐，甚至可能在生產環境中使用
- 創新、創造性或實驗性的工作流程，推動 Claude Code 功能的邊界
- 構建在 Claude Code 之上的其他程式庫和工具
- Claude Code 在傳統「編碼助手」上下文之外的應用（CI/CD、測試、文件、開發維運等）

檢視 [CONTRIBUTING.md](CONTRIBUTING.md) 獲取完整的提交指南和審查流程。

有關倉庫本身的建議，請[開啟一般問題](https://github.com/hesreallyhim/awesome-claude-code/issues/new)。

本專案採用[貢獻者行為準則](code-of-conduct.md)發布。透過參與，您同意遵守其條款。

### 關於許可證的說明

由於簡單列出超連結不符合重新分發的條件，原始來源的許可證與其包含無關。但是，為了後代和便利，我們確實託管了所有許可證允許的資源副本。因此，請包含有關資源許可證的資訊。另外請注意：_如果您的 GitHub 倉庫中不包含 LICENSE，那麼預設情況下它是完全受版權保護的，不允許重新分發_。因此，如果您打算製作開源專案，選擇眾多可用的開源許可證之一是至關重要的。這只是一個提醒，沒有 LICENSE 的情況下，您的專案不是開源的（它只是原始碼可用） - 當然仍可能包含在此清單中，但此通知是為了告知讀者有關 GitHub 和 LICENSE 檔案的預設規則。檢視[這裡](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)獲取更多詳細資訊。 