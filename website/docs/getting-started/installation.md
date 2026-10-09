---
title: Installation
sidebar_position: 1
description: Install the PSCloudPC module from the PowerShell Gallery.
---

## Requirements

- PowerShell **7.2 or later** on Windows, macOS or Linux. Windows PowerShell 5.1 is not supported.
- The `Microsoft.Graph.Authentication` module. It is a required module of PSCloudPC, so `Install-Module` installs it automatically.
- A Windows 365 tenant, and an account or app registration with the [required permissions](./permissions.md).

## Install from the PowerShell Gallery

```powershell
Install-Module -Name PSCloudPC -Scope CurrentUser
```

Then import the module into your session. PowerShell also auto-loads it the first time you run one of its cmdlets.

```powershell
Import-Module PSCloudPC
```

## Update to the latest release

```powershell
Update-Module -Name PSCloudPC
```

Release notes for every version are in the [changelog](https://github.com/Windows365Management/PSCloudPC/blob/develop/CHANGELOG.md).

## Explore the module

Every cmdlet ships with full comment-based help:

```powershell
Get-Command -Module PSCloudPC
Get-Help Get-CloudPC -Full
```

The same help is published in the [cmdlet reference](../commands/index.md).

## Next step

[Connect to Windows 365](./authentication.md).
