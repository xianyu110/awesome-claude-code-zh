# GitHub Pages 部署指南

本指南将帮助您将 Awesome Claude Code 中文版网站部署到 GitHub Pages。

## 📋 部署前准备

### 1. 环境要求

- **Node.js**: 版本 16.0.0 或更高
- **npm**: 版本 8.0.0 或更高
- **Git**: 用于版本控制
- **GitHub 账户**: 用于托管代码和网站

### 2. 检查环境

```bash
# 检查 Node.js 版本
node --version

# 检查 npm 版本
npm --version

# 检查 Git 版本
git --version
```

## 🚀 快速部署

### 方法一：自动部署（推荐）

1. **Fork 仓库**
   ```bash
   # 在 GitHub 上 fork 原仓库
   # 或者克隆到本地
   git clone https://github.com/your-username/awesome-claude-code-zh.git
   cd awesome-claude-code-zh
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **本地测试**
   ```bash
   # 启动开发服务器
   npm run dev
   
   # 或者使用简单的 HTTP 服务器
   npm start
   ```

4. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

5. **启用 GitHub Pages**
   - 进入仓库的 Settings 页面
   - 滚动到 "Pages" 部分
   - 在 "Source" 下选择 "GitHub Actions"
   - 保存设置

6. **自动部署**
   - GitHub Actions 将自动构建和部署网站
   - 部署完成后，访问 `https://your-username.github.io/awesome-claude-code-zh`

### 方法二：手动部署

如果您不想使用 GitHub Actions，可以手动部署：

1. **构建网站**
   ```bash
   npm run build
   ```

2. **创建 gh-pages 分支**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   git add index.html styles.css script.js
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

3. **配置 GitHub Pages**
   - 在仓库设置中选择 `gh-pages` 分支作为源

## ⚙️ 配置说明

### _config.yml 配置

编辑 `_config.yml` 文件以自定义网站设置：

```yaml
# 基本信息
title: "Awesome Claude Code 中文版"
description: "您的网站描述"
url: "https://your-username.github.io/awesome-claude-code-zh"

# 作者信息
author:
  name: "您的姓名"
  email: "your-email@example.com"

# GitHub 用户名
github_username: your-username
```

### package.json 配置

确保 `package.json` 中的信息正确：

```json
{
  "homepage": "https://your-username.github.io/awesome-claude-code-zh",
  "repository": {
    "url": "https://github.com/your-username/awesome-claude-code-zh.git"
  }
}
```

## 🔧 自定义配置

### 1. 域名配置

如果您有自定义域名：

1. 在仓库根目录创建 `CNAME` 文件：
   ```
   your-domain.com
   ```

2. 在域名提供商处设置 DNS 记录：
   ```
   CNAME your-domain.com your-username.github.io
   ```

### 2. SEO 优化

编辑 `index.html` 中的 meta 标签：

```html
<meta name="description" content="您的网站描述">
<meta name="keywords" content="claude-code,awesome-list,ai-tools">
<meta property="og:title" content="Awesome Claude Code 中文版">
<meta property="og:description" content="您的网站描述">
```

### 3. Google Analytics

如果要添加 Google Analytics：

1. 在 `_config.yml` 中添加：
   ```yaml
   google_analytics: GA_MEASUREMENT_ID
   ```

2. 或在 `index.html` 中直接添加跟踪代码

## 🛠️ 开发工作流

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 在浏览器中打开 http://localhost:3000
```

### 代码质量检查

```bash
# 检查 JavaScript 语法
npm run lint

# 格式化代码
npm run format

# 验证 HTML
npm run validate

# 运行所有测试
npm test
```

### 构建优化

```bash
# 构建生产版本
npm run build

# 清理构建文件
npm run clean
```

## 📊 监控和维护

### 1. 监控部署状态

- 在 GitHub 仓库的 "Actions" 选项卡中查看部署状态
- 检查 GitHub Pages 设置页面的部署历史

### 2. 更新内容

```bash
# 拉取最新更改
git pull origin main

# 添加新内容
# 编辑 script.js 中的 resourcesData

# 提交更改
git add .
git commit -m "Update resources"
git push origin main
```

### 3. 性能优化

- 使用 `npm run optimize` 压缩 CSS 和 JavaScript
- 优化图片大小和格式
- 启用浏览器缓存

## 🚨 故障排除

### 常见问题

1. **部署失败**
   - 检查 GitHub Actions 日志
   - 确保所有文件都已提交
   - 验证 `_config.yml` 语法

2. **网站无法访问**
   - 检查 GitHub Pages 设置
   - 确认仓库是公开的
   - 等待 DNS 传播（可能需要几分钟）

3. **样式或脚本不加载**
   - 检查文件路径是否正确
   - 确认文件已正确提交到仓库

4. **搜索功能不工作**
   - 检查 JavaScript 控制台错误
   - 确认 `script.js` 文件完整

### 调试技巧

```bash
# 本地测试构建
npm run build
npm run serve

# 检查文件完整性
ls -la

# 验证 JSON 语法
node -e "console.log('JSON valid:', !!require('./package.json'))"
```

## 📝 更新日志

### 版本 1.0.0
- 初始版本发布
- 基础功能实现
- GitHub Pages 部署配置

## 🤝 贡献

如果您发现部署过程中的问题或有改进建议：

1. 创建 Issue 描述问题
2. 提交 Pull Request 修复问题
3. 更新此文档

## 📞 支持

如果您在部署过程中遇到问题：

- 查看 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- 在仓库中创建 Issue
- 参考 [Jekyll 文档](https://jekyllrb.com/docs/)

---

**提示**: 首次部署可能需要几分钟时间，请耐心等待。部署完成后，网站将在 `https://your-username.github.io/awesome-claude-code-zh` 可访问。 