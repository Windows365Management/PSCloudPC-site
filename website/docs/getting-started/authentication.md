---
title: Authentication
sidebar_position: 2
description: Connect PSCloudPC to Windows 365 with interactive, device code, client secret, certificate or access token authentication.
---

Before you can use the other cmdlets, connect to Microsoft Graph with [`Connect-Windows365`](../commands/Connect-Windows365.mdx). It supports five authentication methods.

| Method | Example | Best for |
| --- | --- | --- |
| Interactive | `Connect-Windows365` | Admins working at their own machine |
| Device code | `Connect-Windows365 -DeviceCode` | Remote shells and machines without a browser |
| Client secret | `Connect-Windows365 -TenantID contoso.onmicrosoft.com -ClientID <app-id> -ClientSecret <secret>` | Automation and scheduled jobs |
| Client certificate | `Connect-Windows365 -TenantID contoso.onmicrosoft.com -ClientID <app-id> -ClientCertificate $cert` | Automation without storing secrets |
| Access token | `Connect-Windows365 -Token $accessToken` | Reusing a token from another tool or pipeline |

Interactive and device code sign-in use **delegated** permissions; the client secret and certificate methods use **application** permissions on your own app registration. See [Permissions](./permissions.md) for the list.

## Interactive

Opens a browser window to sign in with your own account. The tenant is determined by the account you sign in with, so no tenant parameter is needed.

```powershell
Connect-Windows365
```

## Device code

Use this in remote sessions, containers or other environments without a browser. You get a code to enter at `https://microsoft.com/devicelogin` on any device.

```powershell
Connect-Windows365 -DeviceCode
```

## Client secret

Use an app registration (service principal) with a client secret for unattended automation.

```powershell
Connect-Windows365 -TenantID contoso.onmicrosoft.com -ClientID <app-id> -ClientSecret <secret>
```

:::warning
Avoid hard-coding secrets in scripts. Load them from a secure source such as Azure Key Vault or the `Microsoft.PowerShell.SecretManagement` module.
:::

## Client certificate

Certificate authentication avoids storing a secret. Pass an `X509Certificate2` object that includes the private key, not just the thumbprint:

```powershell
$cert = Get-Item "Cert:\CurrentUser\My\<THUMBPRINT>"
Connect-Windows365 -TenantID contoso.onmicrosoft.com -ClientID <app-id> -ClientCertificate $cert
```

On macOS or Linux, load the certificate from a PFX file instead:

```powershell
$cert = [System.Security.Cryptography.X509Certificates.X509Certificate2]::new("./app.pfx", $pfxPassword)
Connect-Windows365 -TenantID contoso.onmicrosoft.com -ClientID <app-id> -ClientCertificate $cert
```

## Access token

Already have a Microsoft Graph access token, for example from another tool or a pipeline? Pass it directly. The token must be valid for Microsoft Graph and include the Cloud PC permissions.

```powershell
Connect-Windows365 -Token $accessToken
```

## Disconnect

```powershell
Disconnect-Windows365
```

This signs out and clears the token cache.
