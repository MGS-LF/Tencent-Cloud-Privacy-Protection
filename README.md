# 腾讯云隐私保护插件

腾讯云隐私保护插件是一个专为腾讯云控制台设计的浏览器插件，旨在帮助用户自动屏蔽敏感信息，保护隐私。通过该插件，用户可以轻松地在腾讯云控制台中自动打码，防止敏感数据泄露。

## 功能特性

- **自动打码**：插件会自动识别并屏蔽腾讯云控制台中的敏感信息，确保隐私安全。
- **自定义屏蔽**：用户可以根据需要自定义屏蔽内容，灵活应对不同的隐私保护需求。
- **简单易用**：只需简单配置，即可实现自动打码功能，无需复杂的操作。
- **兼容性强**：支持主流浏览器，并兼容油猴脚本（Tampermonkey）等脚本管理器。

## 安装步骤

### 1. 安装油猴脚本管理器
首先，您需要在浏览器中安装油猴脚本管理器（Tampermonkey）。油猴脚本管理器是一个流行的浏览器扩展，允许用户管理和运行自定义脚本。

- **Chrome 浏览器**：访问 [Chrome 网上应用店](https://chrome.google.com/webstore/category/extensions)，搜索 "Tampermonkey" 并安装。
- **Firefox 浏览器**：访问 [Firefox 附加组件商店](https://addons.mozilla.org/)，搜索 "Tampermonkey" 并安装。
- **Edge 浏览器**：访问 [Microsoft Edge 扩展商店](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home)，搜索 "Tampermonkey" 并安装。

### 2. 导入并启用脚本
安装完油猴脚本管理器后，您需要将腾讯云隐私保护插件的脚本导入其中。

1. 点击浏览器右上角的油猴脚本管理器图标。
2. 选择 "创建新脚本"。
3. 打开本仓库中的 [`tencent-cloud-privacy-protector.user.js`](./tencent-cloud-privacy-protector.user.js) 文件，将其内容复制并粘贴到油猴脚本编辑器中。
4. 保存脚本并启用。

### 3. 刷新页面
保存脚本后，刷新腾讯云控制台页面，插件将自动生效，屏蔽指定的敏感信息。

## 自定义屏蔽内容

如果您需要屏蔽其他内容，可以通过以下步骤自定义屏蔽规则：

1. 打开腾讯云控制台页面。
2. 按 `F12` 打开开发者工具。
3. 使用元素选择工具（通常是一个鼠标箭头图标）选择您想要屏蔽的内容。
4. 在开发者工具中，找到该元素的 `class` 名称。
5. 打开本仓库中的 [`tencent-cloud-privacy-protector.user.js`](./tencent-cloud-privacy-protector.user.js) 文件，将 `class` 名称添加到 `blurSelectors` 数组中。
6. 保存脚本并刷新页面，新的屏蔽规则将生效。

## 注意事项

- **兼容性**：该插件依赖于油猴脚本管理器，请确保您的浏览器已安装并启用了油猴脚本管理器。
- **动态内容**：如果页面内容是通过 AJAX 或 JavaScript 动态加载的，插件会自动监听 DOM 变化并应用打码效果。
- **样式调整**：如果您希望调整打码的样式（如模糊程度），可以修改 `blurStyle` 变量中的 CSS 样式。

## 许可证

本项目采用 [MIT 许可证](https://opensource.org/licenses/MIT)，您可以自由使用、修改和分发代码。

---

通过腾讯云隐私保护插件，您可以轻松保护腾讯云控制台中的敏感信息，确保数据安全。立即安装并体验吧！

---

### 文件说明
- **`tencent-cloud-privacy-protector.js`**：插件的主脚本文件，包含自动打码的核心逻辑。请查看该文件以获取更多详细信息。
- **`README.md`**：本文件，提供插件的使用说明和安装指南。

请确保查看仓库中的 [`tencent-cloud-privacy-protector.user.js`](./tencent-cloud-privacy-protector.user.js) 文件以获取最新代码和配置。
