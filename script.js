// 资源数据结构
const resourcesData = {
    workflow: [
        {
            name: "博客平台指令",
            url: "https://github.com/cloudartisan/cloudartisan.github.io/tree/main/.claude/commands",
            author: "cloudartisan",
            authorUrl: "https://github.com/cloudartisan",
            license: "CC-BY-SA-4.0",
            description: "提供一套结构良好的命令，用于发布和维护博客平台，包括创建文章、管理分类和处理媒体文件的命令。",
            tags: ["博客", "内容管理", "媒体处理"]
        },
        {
            name: "ClaudeLog",
            url: "https://claudelog.com",
            author: "InventorBlack",
            authorUrl: "https://www.reddit.com/user/inventor_black/",
            license: "",
            description: "一个全面的知识库，详细介绍了高级机制，包括 CLAUDE.md 最佳实践、实用技术指南如计划模式、超思考、子智能体、智能体优先设计和配置指南。",
            tags: ["知识库", "最佳实践", "配置指南", "子智能体"]
        },
        {
            name: "上下文预设",
            url: "https://github.com/disler/just-prompt/tree/main/.claude/commands",
            author: "disler",
            authorUrl: "https://github.com/disler",
            license: "",
            description: "提供一种系统化的方法，通过针对不同项目场景和开发上下文的专门命令，为 Claude Code 提供全面的项目上下文预设。",
            tags: ["上下文管理", "项目配置", "开发工具"]
        },
        {
            name: "n8n 智能体",
            url: "https://github.com/kingler/n8n_agent/tree/main/.claude/commands",
            author: "kingler",
            authorUrl: "https://github.com/kingler",
            license: "",
            description: "令人惊叹的全面命令集，涵盖代码分析、质量保证、设计、文档、项目结构、项目管理、优化等多个方面。",
            tags: ["自动化", "工作流", "项目管理", "代码分析"]
        },
        {
            name: "项目引导和任务管理",
            url: "https://github.com/steadycursor/steadystart/tree/main/.claude/commands",
            author: "steadycursor",
            authorUrl: "https://github.com/steadycursor",
            license: "",
            description: "提供一套结构化的命令，用于引导和管理新项目，包括用于创建和编辑自定义斜杠命令的元命令。",
            tags: ["项目引导", "任务管理", "元命令"]
        },
        {
            name: "项目管理、实施、规划和发布",
            url: "https://github.com/scopecraft/command/tree/main/.claude/commands",
            author: "scopecraft",
            authorUrl: "https://github.com/scopecraft",
            license: "",
            description: "真正全面的命令集，涵盖软件开发生命周期的所有方面。",
            tags: ["项目管理", "软件开发", "生命周期", "发布管理"]
        }
    ],
    tools: [
        {
            name: "CC Usage",
            url: "https://github.com/ryoppippi/ccusage",
            author: "ryoppippi",
            authorUrl: "https://github.com/ryoppippi",
            license: "MIT",
            description: "用于管理和分析 Claude Code 使用情况的便捷 CLI 工具，基于分析本地 Claude Code 日志。提供关于成本信息、令牌消耗等的精美仪表板。",
            tags: ["CLI工具", "使用分析", "成本监控", "仪表板"]
        },
        {
            name: "ccexp",
            url: "https://github.com/nyatinte/ccexp",
            author: "nyatinte",
            authorUrl: "https://github.com/nyatinte",
            license: "MIT",
            description: "用于发现和管理 Claude Code 配置文件和斜杠命令的交互式 CLI 工具，具有美观的终端用户界面。",
            tags: ["CLI工具", "配置管理", "交互式界面", "命令管理"]
        },
        {
            name: "cclogviewer",
            url: "https://github.com/Brads3290/cclogviewer",
            author: "Brad S.",
            authorUrl: "https://github.com/Brads3290",
            license: "MIT",
            description: "一个简洁但实用的工具，用于在精美的 HTML 用户界面中查看 Claude Code .jsonl 对话文件。",
            tags: ["日志查看器", "HTML界面", "对话文件", "可视化"]
        },
        {
            name: "Claude Code Flow",
            url: "https://github.com/ruvnet/claude-code-flow",
            author: "ruvnet",
            authorUrl: "https://github.com/ruvnet",
            license: "MIT",
            description: "此模式作为代码优先的编排层，使 Claude 能够在递归智能体循环中自主编写、编辑、测试和优化代码。",
            tags: ["代码编排", "递归智能体", "自动化开发", "测试优化"]
        },
        {
            name: "Claude Code 使用监控器",
            url: "https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor",
            author: "Maciek-roboblog",
            authorUrl: "https://github.com/Maciek-roboblog",
            license: "MIT",
            description: "用于监控 Claude Code 令牌使用情况的实时基于终端的工具。显示实时令牌消耗、消耗率和令牌耗尽预测。",
            tags: ["实时监控", "令牌使用", "终端工具", "使用预测"]
        },
        {
            name: "tweakcc",
            url: "https://github.com/Piebald-AI/tweakcc",
            author: "Piebald-AI",
            authorUrl: "https://github.com/Piebald-AI",
            license: "MIT",
            description: "用于自定义 Claude Code 样式的命令行工具。",
            tags: ["样式定制", "CLI工具", "界面定制"]
        }
    ],
    hooks: [
        {
            name: "CC Notify",
            url: "https://github.com/dazuiba/CCNotify",
            author: "dazuiba",
            authorUrl: "https://github.com/dazuiba",
            license: "MIT",
            description: "CCNotify 为 Claude Code 提供桌面通知，在需要输入或任务完成时提醒您，并可一键跳转回 VS Code，显示任务持续时间。",
            tags: ["桌面通知", "任务提醒", "VS Code集成", "时间跟踪"]
        },
        {
            name: "cchooks",
            url: "https://github.com/GowayLee/cchooks",
            author: "GowayLee",
            authorUrl: "https://github.com/GowayLee",
            license: "MIT",
            description: "一个轻量级的 Python SDK，具有清晰的 API 和良好的文档；简化了编写钩子函数和将其集成到代码库中的过程。",
            tags: ["Python SDK", "钩子函数", "API", "文档完善"]
        },
        {
            name: "claude-code-hooks-sdk",
            url: "https://github.com/beyondcode/claude-hooks-sdk",
            author: "beyondcode",
            authorUrl: "https://github.com/beyondcode",
            license: "MIT",
            description: "一个 Laravel 风格的 PHP SDK，用于构建具有清晰、流畅 API 的 Claude Code 钩子响应。",
            tags: ["PHP SDK", "Laravel风格", "流畅API", "钩子响应"]
        },
        {
            name: "TDD Guard",
            url: "https://github.com/nizos/tdd-guard",
            author: "Nizar Selander",
            authorUrl: "https://github.com/nizos",
            license: "MIT",
            description: "一个基于钩子函数驱动的系统，实时监控文件操作并阻止违反 TDD 原则的更改。",
            tags: ["TDD", "测试驱动", "文件监控", "开发规范"]
        }
    ],
    commands: [
        {
            name: "/bug-fix",
            url: "https://github.com/danielscholl/mvn-mcp-server/blob/main/.claude/commands/bug-fix.md",
            author: "danielscholl",
            authorUrl: "https://github.com/danielscholl",
            license: "",
            description: "通过首先创建 GitHub 问题，然后创建功能分支来实现和彻底测试解决方案，最后合并，从而简化错误修复流程。",
            tags: ["错误修复", "GitHub集成", "分支管理", "测试流程"]
        },
        {
            name: "/commit",
            url: "https://github.com/evmts/tevm-monorepo/blob/main/.claude/commands/commit.md",
            author: "evmts",
            authorUrl: "https://github.com/evmts",
            license: "MIT",
            description: "使用传统提交格式和适当的表情符号创建 git 提交，遵循项目标准并创建解释更改目的的描述性消息。",
            tags: ["Git提交", "传统提交", "表情符号", "代码规范"]
        },
        {
            name: "/create-pr",
            url: "https://github.com/toyamarinyon/giselle/blob/main/.claude/commands/create-pr.md",
            author: "toyamarinyon",
            authorUrl: "https://github.com/toyamarinyon",
            license: "Apache-2.0",
            description: "通过处理整个工作流程简化拉取请求创建：创建新分支、提交更改、使用 Biome 格式化修改的文件并提交 PR。",
            tags: ["拉取请求", "工作流自动化", "代码格式化", "分支管理"]
        },
        {
            name: "/check",
            url: "https://github.com/rygwdn/slack-tools/blob/main/.claude/commands/check.md",
            author: "rygwdn",
            authorUrl: "https://github.com/rygwdn",
            license: "",
            description: "执行全面的代码质量和安全检查，具有静态分析集成、安全漏洞扫描、代码风格强制执行和详细报告功能。",
            tags: ["代码质量", "安全扫描", "静态分析", "详细报告"]
        },
        {
            name: "/todo",
            url: "https://github.com/chrisleyva/todo-slash-command/blob/main/todo.md",
            author: "chrisleyva",
            authorUrl: "https://github.com/chrisleyva",
            license: "MIT",
            description: "一个方便的命令，无需离开 Claude Code 界面即可快速管理项目待办事项，具有截止日期、排序、任务优先级和全面的待办事项列表管理功能。",
            tags: ["待办事项", "任务管理", "优先级", "截止日期"]
        }
    ],
    "claude-md": [
        {
            name: "Giselle",
            url: "https://github.com/giselles-ai/giselle/blob/main/CLAUDE.md",
            author: "giselles-ai",
            authorUrl: "https://github.com/giselles-ai",
            license: "Apache-2.0",
            description: "使用 pnpm 和 Vitest 提供详细的构建和测试命令，具有严格的代码格式要求和全面的命名约定以保持代码一致性。",
            tags: ["TypeScript", "Vitest", "pnpm", "代码规范"]
        },
        {
            name: "Metabase",
            url: "https://github.com/metabase/metabase/blob/master/CLAUDE.md",
            author: "metabase",
            authorUrl: "https://github.com/metabase",
            license: "NOASSERTION",
            description: "详细介绍了 Clojure/ClojureScript 中 REPL 驱动开发的工作流程，强调增量开发、测试和功能实现的逐步方法。",
            tags: ["Clojure", "REPL开发", "增量开发", "测试驱动"]
        },
        {
            name: "Course Builder",
            url: "https://github.com/badass-courses/course-builder/blob/main/CLAUDE.md",
            author: "badass-courses",
            authorUrl: "https://github.com/badass-courses",
            license: "MIT",
            description: "为协作课程创建启用实时多人游戏功能，具有多样化的技术栈集成和使用 Turborepo 的单体仓库架构。",
            tags: ["课程构建", "实时协作", "Turborepo", "多人功能"]
        }
    ]
};

// 全局变量
let filteredResources = [];
let currentSearchTerm = '';
let currentCategoryFilter = 'all';
let currentLicenseFilter = 'all';

// DOM 元素
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const categoryFilter = document.getElementById('category-filter');
const licenseFilter = document.getElementById('license-filter');
const resourcesContainer = document.getElementById('resources-container');
const totalResourcesElement = document.getElementById('total-resources');
const filteredResourcesElement = document.getElementById('filtered-resources');
const backToTopBtn = document.getElementById('back-to-top');
const languageSelector = document.getElementById('language-selector');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderResources();
    updateStats();
    setupScrollEffects();
});

// 应用初始化
function initializeApp() {
    // 计算总资源数
    const totalCount = Object.values(resourcesData).reduce((sum, category) => sum + category.length, 0);
    totalResourcesElement.textContent = totalCount;
    
    // 初始化过滤结果
    filteredResources = getAllResources();
}

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    searchInput.addEventListener('input', handleSearch);
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // 筛选功能
    categoryFilter.addEventListener('change', handleCategoryFilter);
    licenseFilter.addEventListener('change', handleLicenseFilter);
    
    // 返回顶部按钮
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // 语言切换
    languageSelector.addEventListener('change', handleLanguageChange);
    
    // 键盘快捷键
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// 获取所有资源
function getAllResources() {
    const allResources = [];
    Object.keys(resourcesData).forEach(category => {
        resourcesData[category].forEach(resource => {
            allResources.push({ ...resource, category });
        });
    });
    return allResources;
}

// 搜索处理
function handleSearch(event) {
    currentSearchTerm = event.target.value.toLowerCase().trim();
    
    // 显示/隐藏清除按钮
    if (currentSearchTerm) {
        clearSearchBtn.classList.add('show');
    } else {
        clearSearchBtn.classList.remove('show');
    }
    
    filterAndRenderResources();
}

// 清除搜索
function clearSearch() {
    searchInput.value = '';
    currentSearchTerm = '';
    clearSearchBtn.classList.remove('show');
    filterAndRenderResources();
    searchInput.focus();
}

// 分类筛选处理
function handleCategoryFilter(event) {
    currentCategoryFilter = event.target.value;
    filterAndRenderResources();
}

// 许可证筛选处理
function handleLicenseFilter(event) {
    currentLicenseFilter = event.target.value;
    filterAndRenderResources();
}

// 筛选和渲染资源
function filterAndRenderResources() {
    filteredResources = getAllResources().filter(resource => {
        // 分类筛选
        if (currentCategoryFilter !== 'all' && resource.category !== currentCategoryFilter) {
            return false;
        }
        
        // 许可证筛选
        if (currentLicenseFilter !== 'all') {
            const resourceLicense = resource.license || 'other';
            if (currentLicenseFilter === 'other' && resourceLicense !== '' && resourceLicense !== 'other') {
                return false;
            } else if (currentLicenseFilter !== 'other' && resourceLicense !== currentLicenseFilter) {
                return false;
            }
        }
        
        // 搜索筛选
        if (currentSearchTerm) {
            const searchFields = [
                resource.name,
                resource.description,
                resource.author,
                resource.tags?.join(' ') || ''
            ].join(' ').toLowerCase();
            
            return searchFields.includes(currentSearchTerm);
        }
        
        return true;
    });
    
    renderResources();
    updateStats();
}

// 渲染资源
function renderResources() {
    resourcesContainer.innerHTML = '';
    
    if (filteredResources.length === 0) {
        renderEmptyState();
        return;
    }
    
    // 按分类分组
    const groupedResources = {};
    filteredResources.forEach(resource => {
        if (!groupedResources[resource.category]) {
            groupedResources[resource.category] = [];
        }
        groupedResources[resource.category].push(resource);
    });
    
    // 渲染每个分类
    Object.keys(groupedResources).forEach(category => {
        const section = createResourceSection(category, groupedResources[category]);
        resourcesContainer.appendChild(section);
    });
    
    // 添加动画效果
    requestAnimationFrame(() => {
        const cards = document.querySelectorAll('.resource-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 50);
        });
    });
}

// 创建资源分类部分
function createResourceSection(category, resources) {
    const section = document.createElement('div');
    section.className = 'resource-section';
    
    const categoryNames = {
        workflow: '工作流程与知识指南',
        tools: '工具集',
        hooks: '钩子函数',
        commands: '斜杠命令',
        'claude-md': 'CLAUDE.md 文件'
    };
    
    const categoryIcons = {
        workflow: 'fas fa-brain',
        tools: 'fas fa-toolbox',
        hooks: 'fas fa-link',
        commands: 'fas fa-terminal',
        'claude-md': 'fas fa-file-alt'
    };
    
    const categoryDescriptions = {
        workflow: '工作流程是一套紧密耦合的 Claude Code 原生资源，可促进特定项目的开发',
        tools: '工具集表示构建在 Claude Code 之上的应用程序，包含比斜杠命令和 CLAUDE.md 文件更多的组件',
        hooks: '钩子函数是 Claude Code 的全新 API，允许用户在 Claude 智能体生命周期的不同时点激活命令和运行脚本',
        commands: '斜杠命令提供快速访问特定功能的便捷方式',
        'claude-md': 'CLAUDE.md 文件是包含重要指导原则和上下文特定信息或说明的文件，帮助 Claude Code 更好地理解您的项目和编码标准'
    };
    
    section.innerHTML = `
        <div class="section-header">
            <i class="${categoryIcons[category]}"></i>
            <h2>${categoryNames[category]}</h2>
        </div>
        <div class="section-description">
            ${categoryDescriptions[category]}
        </div>
        <div class="resource-grid">
            ${resources.map(resource => createResourceCard(resource)).join('')}
        </div>
    `;
    
    return section;
}

// 创建资源卡片
function createResourceCard(resource) {
    const licenseClass = getLicenseClass(resource.license);
    const licenseDisplay = resource.license || '未指定';
    
    return `
        <div class="resource-card">
            <div class="resource-header">
                <div class="resource-title">
                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer">
                        ${highlightSearchTerm(resource.name)}
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                <div class="resource-meta">
                    <div class="resource-author">
                        由 <a href="${resource.authorUrl}" target="_blank" rel="noopener noreferrer">${resource.author}</a> 开发
                    </div>
                    <div class="resource-license ${licenseClass}">${licenseDisplay}</div>
                </div>
            </div>
            <div class="resource-description">
                ${highlightSearchTerm(resource.description)}
            </div>
            ${resource.tags && resource.tags.length > 0 ? `
                <div class="resource-tags">
                    ${resource.tags.map(tag => `<span class="resource-tag">${highlightSearchTerm(tag)}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// 获取许可证样式类
function getLicenseClass(license) {
    if (!license) return '';
    
    const lowerLicense = license.toLowerCase();
    if (lowerLicense.includes('mit')) return 'mit';
    if (lowerLicense.includes('apache')) return 'apache';
    if (lowerLicense.includes('gpl')) return 'gpl';
    return '';
}

// 高亮搜索词
function highlightSearchTerm(text) {
    if (!currentSearchTerm || !text) return text;
    
    const regex = new RegExp(`(${escapeRegExp(currentSearchTerm)})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// 转义正则表达式特殊字符
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 渲染空状态
function renderEmptyState() {
    resourcesContainer.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>未找到匹配的资源</h3>
            <p>尝试调整搜索条件或筛选选项</p>
        </div>
    `;
}

// 更新统计数据
function updateStats() {
    filteredResourcesElement.textContent = filteredResources.length;
    
    // 添加数字动画效果
    animateNumber(filteredResourcesElement, filteredResources.length);
}

// 数字动画效果
function animateNumber(element, targetNumber) {
    const startNumber = parseInt(element.textContent) || 0;
    const duration = 500;
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentNumber = Math.round(startNumber + (targetNumber - startNumber) * progress);
        element.textContent = currentNumber;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// 设置滚动效果
function setupScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 返回顶部按钮
        if (scrollTop > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
        
        ticking = false;
    }
    
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
}

// 滚动到顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 语言切换处理
function handleLanguageChange(event) {
    const selectedLanguage = event.target.value;
    
    // 这里可以实现语言切换逻辑
    // 由于这是一个静态页面，我们可以重定向到不同的页面
    switch (selectedLanguage) {
        case 'zh-tw':
            window.location.href = 'README-zh-TW.md';
            break;
        case 'en':
            window.location.href = 'README-en.md';
            break;
        case 'zh':
        default:
            // 保持当前页面
            break;
    }
}

// 键盘快捷键处理
function handleKeyboardShortcuts(event) {
    // Ctrl/Cmd + K 聚焦搜索框
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
    
    // Escape 清除搜索
    if (event.key === 'Escape' && document.activeElement === searchInput) {
        clearSearch();
    }
    
    // Ctrl/Cmd + / 显示快捷键帮助（可以扩展）
    if ((event.ctrlKey || event.metaKey) && event.key === '/') {
        event.preventDefault();
        showShortcutsHelp();
    }
}

// 显示快捷键帮助
function showShortcutsHelp() {
    const helpModal = document.createElement('div');
    helpModal.className = 'shortcuts-modal';
    helpModal.innerHTML = `
        <div class="shortcuts-content">
            <h3>键盘快捷键</h3>
            <div class="shortcuts-list">
                <div class="shortcut-item">
                    <kbd>Ctrl</kbd> + <kbd>K</kbd>
                    <span>聚焦搜索框</span>
                </div>
                <div class="shortcut-item">
                    <kbd>Esc</kbd>
                    <span>清除搜索</span>
                </div>
                <div class="shortcut-item">
                    <kbd>Ctrl</kbd> + <kbd>/</kbd>
                    <span>显示此帮助</span>
                </div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()">关闭</button>
        </div>
    `;
    
    // 添加模态框样式
    const style = document.createElement('style');
    style.textContent = `
        .shortcuts-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        }
        .shortcuts-content {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 400px;
            width: 90%;
        }
        .shortcuts-list {
            margin: 1rem 0;
        }
        .shortcut-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 0;
            border-bottom: 1px solid #e2e8f0;
        }
        .shortcut-item:last-child {
            border-bottom: none;
        }
        kbd {
            background: #f7fafc;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            padding: 0.25rem 0.5rem;
            font-family: monospace;
            font-size: 0.8rem;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(helpModal);
    
    // 点击外部关闭模态框
    helpModal.addEventListener('click', function(event) {
        if (event.target === helpModal) {
            helpModal.remove();
            style.remove();
        }
    });
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 导出给其他脚本使用
window.AwesomeClaudeCode = {
    resourcesData,
    filteredResources,
    renderResources,
    updateStats
}; 