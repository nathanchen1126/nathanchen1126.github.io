$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $PSScriptRoot
Push-Location -LiteralPath $projectRoot
try {
    & npm.cmd run lint
    if ($LASTEXITCODE -ne 0) { throw '代码检查失败，未发布。' }
    & npm.cmd run build
    if ($LASTEXITCODE -ne 0) { throw '构建失败，未发布。' }
    & git add -A
    if ($LASTEXITCODE -ne 0) { throw '暂存源码失败。' }
    & git diff --cached --quiet
    if ($LASTEXITCODE -eq 1) {
        & git commit -m '更新学术主页'
        if ($LASTEXITCODE -ne 0) { throw '提交源码失败。' }
    } elseif ($LASTEXITCODE -ne 0) { throw '读取源码变更失败。' }
    & git push origin main
    if ($LASTEXITCODE -ne 0) { throw '推送源码失败。' }
    & npx.cmd gh-pages -d out --dotfiles --repo https://github.com/nathanchen1126/nathanchen1126.github.io.git
    if ($LASTEXITCODE -ne 0) { throw '发布静态页面失败。' }
    Write-Host '已推送页面，GitHub Pages 完成部署后可访问 https://nathanchen1126.github.io/'
} finally { Pop-Location }
