# 🌐 如何将 README 内容制作成 GitHub Pages 网站

本项目已经为您准备好了完整的 GitHub Pages 网站，包含现代化的界面、搜索功能和响应式设计。

## ✨ 功能特性

- 🎨 **现代化设计**: 美观的渐变背景和毛玻璃效果
- 🔍 **实时搜索**: 支持按名称、描述、作者和标签搜索
- 🏷️ **智能筛选**: 按分类和许可证筛选资源
- 📱 **响应式布局**: 完美适配桌面端和移动端
- ⚡ **高性能**: 优化的加载速度和流畅动画
- ♿ **无障碍访问**: 支持键盘导航和屏幕阅读器
- 🌍 **多语言支持**: 预留中文、繁体中文和英文切换

## 🚀 快速部署

### 1. Fork 或下载项目

```bash
git clone https://github.com/your-username/awesome-claude-code-zh.git
cd awesome-claude-code-zh
```

### 2. 启用 GitHub Pages

1. 进入 GitHub 仓库设置页面
2. 滚动到 "Pages" 部分
3. 在 "Source" 下选择 "GitHub Actions"
4. 保存设置

### 3. 自动部署

推送代码到 main 分支后，GitHub Actions 会自动构建和部署网站：

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 4. 访问网站

部署完成后，访问：`https://your-username.github.io/awesome-claude-code-zh`

## 📁 项目结构

```
awesome-claude-code-zh/
├── index.html              # 主页面
├── styles.css              # 样式文件
├── script.js               # JavaScript 功能
├── _config.yml             # GitHub Pages 配置
├── package.json            # 项目依赖
├── .github/workflows/      # GitHub Actions 配置
│   └── pages.yml           
├── DEPLOYMENT.md           # 详细部署指南
└── README-GITHUB-PAGES.md  # 本文件
```

## 🛠️ 本地开发

如果您想在本地预览和开发：

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 在浏览器中打开 http://localhost:3000
```

## ⚙️ 自定义配置

### 修改网站信息

编辑 `_config.yml` 文件：

```yaml
title: "您的网站标题"
description: "您的网站描述"
url: "https://your-username.github.io/your-repo-name"
github_username: your-username
```

### 更新资源数据

资源数据存储在 `script.js` 文件的 `resourcesData` 对象中。您可以：

1. 添加新的资源
2. 修改现有资源信息
3. 调整分类结构

### 自定义样式

修改 `styles.css` 文件来自定义：

- 颜色主题
- 字体样式
- 布局结构
- 动画效果

## 🔧 高级功能

### 搜索功能

网站支持全文搜索，包括：
- 资源名称
- 描述内容
- 作者信息
- 标签内容

### 筛选功能

- **分类筛选**: 按工作流程、工具集、钩子函数等分类
- **许可证筛选**: 按 MIT、Apache-2.0、GPL 等许可证类型

### 键盘快捷键

- `Ctrl/Cmd + K`: 聚焦搜索框
- `Esc`: 清除搜索
- `Ctrl/Cmd + /`: 显示快捷键帮助

## 📊 性能优化

项目已包含多项性能优化：

- CSS 和 JavaScript 压缩
- 图片优化
- 懒加载
- 缓存策略
- CDN 加速（Font Awesome、Google Fonts）

## 🐛 故障排除

### 常见问题

1. **网站无法访问**
   - 检查 GitHub Pages 设置是否正确
   - 确认仓库为公开状态
   - 等待几分钟让 DNS 生效

2. **样式显示异常**
   - 检查 `styles.css` 文件是否完整
   - 确认文件路径正确

3. **搜索功能不工作**
   - 检查浏览器控制台是否有 JavaScript 错误
   - 确认 `script.js` 文件完整

### 获取帮助

- 查看详细的 [部署指南](DEPLOYMENT.md)
- 在 GitHub 仓库创建 Issue
- 参考 [GitHub Pages 官方文档](https://docs.github.com/en/pages)

## 🎉 完成！

现在您就有了一个功能完整、美观现代的 Awesome Claude Code 资源网站！

**网站特色：**
- ✅ 自动同步 README 内容
- ✅ 现代化用户界面
- ✅ 强大的搜索和筛选功能
- ✅ 完全响应式设计
- ✅ 一键部署到 GitHub Pages

享受您的新网站吧！🚀 