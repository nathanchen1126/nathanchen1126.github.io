# 陈楠的学术主页

在线网站：https://nathanchen1126.github.io/

基于 [PRISM](https://github.com/xyjoey/PRISM) 制作，保留原项目 MIT 许可证。Source Sans 3 与 Source Serif 4 字体的许可证见 public/fonts/。照片由作者提供，版权归作者所有。

## 内容维护

- content/：英文内容。
- content_zh/：中文内容。
- config.toml：个人信息、联系方式和导航。
- bio.md 与 focus.md：首页简介与研究方向。
- publications.bib：已发表论文，作者顺序以公开书目信息为依据。
- research.md：在研论文，单独标明进行中与已投稿状态。
- cv.md：完整的公开学术履历。
- current-work.toml：当前工作的双语介绍、图件和图注。
- projects.md：参与项目、成员角色和资助信息。
- public/work/：作者提供的研究图件网页副本。
- public/wechat-qr.jpg：个人微信公众号二维码。
- public/profile.jpg：作者指定的照片。

内容依据2026年10月9日作者简历。公开履历提供学术邮箱和个人学术联系邮箱，原始简历文件保留在本机。已发表论文链接：

1. https://doi.org/10.1038/s42949-026-00421-1
2. https://doi.org/10.3969/j.issn.2095-1329.2025.01.003

## 本地预览与发布

需要 Node.js 22 及以上、Git 和已登录的 GitHub CLI。

安装依赖：npm ci

本地预览：npm run dev

修改后发布：npm run deploy

发布脚本依次执行代码检查、构建、源代码提交和静态页面发布，仅在检查和构建成功时发布。GitHub Pages 从 gh-pages 分支根目录读取，main 保存可维护的 PRISM 源码。

履历页面支持打印或通过浏览器保存为 PDF。网站包含中文切换、深色模式、论文筛选与 BibTeX 导出。
