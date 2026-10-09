# GitHub Pages 发布

网站：https://nathanchen1126.github.io/

源码保存在 main 分支，GitHub Pages 读取 gh-pages 分支的根目录。不要将静态导出文件覆盖到源码分支。

首次在本机准备依赖：

```powershell
npm ci
```

修改 content/、content_zh/ 或网页源码后，在项目根目录运行：

```powershell
npm run deploy
```

该命令会检查代码、生成 out/、提交并推送源码，再发布静态页面。终端推送成功后，还需等待 GitHub Pages 的部署完成。原始简历不公开上传，公开履历通过 /cv/ 页面查看或打印。

完整内容维护说明见 [README.md](../README.md)。
