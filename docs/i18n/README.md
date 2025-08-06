# 多语言文档结构 / Multilingual Documentation Structure

## 概述 / Overview

本项目支持多语言文档，为不同语言地区的用户提供本地化的阅读体验。

This project supports multilingual documentation to provide localized reading experience for users from different language regions.

## 支持的语言 / Supported Languages

| 语言 / Language | 文件 / File | 状态 / Status |
|---|---|---|
| 简体中文 / Simplified Chinese | [README.md](../../README.md) | ✅ 主要版本 / Primary |
| 繁體中文 / Traditional Chinese | [README-zh-TW.md](../../README-zh-TW.md) | ✅ 已完成 / Complete |
| 英语 / English | [README-en.md](../../README-en.md) | ✅ 英文版本 / English Version |

## 语言导航 / Language Navigation

每个文档顶部都包含语言切换导航：

Each document includes language switching navigation at the top:

```markdown
> 🌍 **语言版本**: [简体中文](README.md) | [繁體中文](README-zh-TW.md) | [English](README-en.md)
```

## 本地化特色 / Localization Features

### 简体中文版本 (README-zh.md)
- 🇨🇳 面向中国大陆用户
- 使用简体字和大陆用语习惯
- 日期格式：YYYY-MM-DD
- 术语翻译符合大陆技术社区习惯

### 繁體中文版本 (README-zh-TW.md)
- 🇹🇼 面向台湾、香港等繁体中文地区用户
- 使用繁体字和台湾用语习惯
- 保持技术术语的准确性
- 符合繁体中文地区的阅读习惯

## 维护指南 / Maintenance Guide

### 添加新资源时 / When Adding New Resources

1. 首先更新英文原版 README.md
2. 同步更新简体中文版本 README-zh.md
3. 同步更新繁体中文版本 README-zh-TW.md
4. 确保所有版本的链接和格式保持一致

### 翻译原则 / Translation Principles

1. **准确性**：确保技术术语翻译准确
2. **一致性**：同一术语在文档中保持统一翻译
3. **可读性**：符合目标语言的表达习惯
4. **时效性**：及时同步更新所有语言版本

## 贡献指南 / Contribution Guidelines

欢迎为多语言文档贡献！/ Contributions to multilingual documentation are welcome!

### 如何贡献翻译 / How to Contribute Translations

1. Fork 本项目 / Fork this project
2. 创建新的语言分支 / Create a new language branch
3. 添加或更新翻译内容 / Add or update translation content
4. 提交 Pull Request / Submit a Pull Request

### 翻译质量要求 / Translation Quality Requirements

- ✅ 技术术语准确
- ✅ 语言表达自然流畅
- ✅ 格式与原版保持一致
- ✅ 链接有效可访问
- ✅ 符合目标语言的文化习惯

## 未来计划 / Future Plans

- [ ] 添加日语版本 (Japanese)
- [ ] 添加韩语版本 (Korean)
- [ ] 添加法语版本 (French)
- [ ] 添加德语版本 (German)
- [ ] 添加西班牙语版本 (Spanish)

## 技术实现 / Technical Implementation

### 文件命名规范 / File Naming Convention

- 简体中文主版本：`README.md`
- 繁体中文：`README-zh-TW.md`
- 英语版本：`README-en.md`
- 其他语言：`README-{language-code}.md`

### 语言代码标准 / Language Code Standards

遵循 ISO 639-1 和 ISO 3166-1 标准：
- `zh`：简体中文
- `zh-TW`：繁体中文（台湾）
- `zh-HK`：繁体中文（香港）
- `ja`：日语
- `ko`：韩语
- `fr`：法语
- `de`：德语
- `es`：西班牙语

---

如有任何问题或建议，请提交 Issue 或 Pull Request。

For any questions or suggestions, please submit an Issue or Pull Request. 