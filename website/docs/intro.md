---
id: intro
title: Introduction
sidebar_position: 1
slug: /intro
description: PSCloudPC is a community-driven PowerShell module for managing Windows 365 Cloud PCs through Microsoft Graph.
---

**PSCloudPC** is a community-driven PowerShell module for Windows 365, built on Microsoft Graph. It lets you automate provisioning, images, networking, user settings and day-to-day Cloud PC operations from the command line.

## Why PSCloudPC?

The Windows 365 Graph API is powerful, but working with it directly means handling tokens, paging, beta endpoints and JSON payloads yourself. PSCloudPC wraps all of that in consistent, pipeline-friendly cmdlets so you can:

- **Automate the full lifecycle**: provisioning policies, user settings, custom images and Azure network connections.
- **Run remote actions at scale**: reboot, rename, resize, restore, reprovision, snapshot and troubleshoot Cloud PCs.
- **Operate Frontline Cloud PCs**: power on and power off shared and dedicated Frontline devices.
- **Gain visibility**: audit events, connectivity history, real-time connection status and remote action results.
- **Move configuration between tenants**: export and import provisioning policies as JSON.
- **Authenticate your way**: interactive, device code, client secret, certificate or a bring-your-own access token.

## Quick start

```powershell
# Install the module
Install-Module -Name PSCloudPC -Scope CurrentUser

# Sign in interactively
Connect-Windows365

# List all Cloud PCs
Get-CloudPC

# Find a specific Cloud PC and reboot it
Get-CloudPC -Name "CPC-jdoe-XXXX"
Invoke-CPCReboot -Name "CPC-jdoe-XXXX"

# Back up a provisioning policy to JSON
Export-CPCProvisioningPolicy -Name "Corporate Enterprise" -OutputFolder "C:\Backups"

# Disconnect when you're done
Disconnect-Windows365
```

## Next steps

- [Install the module](./getting-started/installation.md) and check the requirements.
- [Connect to your tenant](./getting-started/authentication.md) with the authentication method that fits your scenario.
- [Grant the required permissions](./getting-started/permissions.md) to your account or app registration.
- Browse the [cmdlet reference](./commands/index.md) for every cmdlet, parameter and example.

:::note[Microsoft Graph beta]
Many Windows 365 features are only available on the Microsoft Graph **beta** endpoint. PSCloudPC uses beta where needed, so behaviour can change when Microsoft updates the API. If something breaks, please [open an issue](https://github.com/Windows365Management/PSCloudPC/issues/new/choose).
:::
