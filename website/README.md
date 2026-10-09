# pscloudpc.com

Source for [pscloudpc.com](https://pscloudpc.com), the documentation site for the
[PSCloudPC](https://github.com/Windows365Management/PSCloudPC) PowerShell module. Built with
[Docusaurus 3](https://docusaurus.io/).

## Local development

Requires Node.js 20 or later.

```bash
npm install
npm start          # dev server with live reload at http://localhost:3000
npm run build      # production build into ./build (fails on broken links)
npm run serve      # serve the production build locally
```

## Cmdlet reference

The pages in `docs/commands` are generated from the module's comment-based help. Do not edit them by
hand. To regenerate them, run from the repository root (PowerShell 7.2+):

```powershell
./build/Update-CommandReference.ps1 -ModulePath ../PSCloudPC/PSCloudPc/PSCloudPC.psd1
```

## Deployment

Pushes to `main` are built and deployed to GitHub Pages by `.github/workflows/deploy-website.yml`.
