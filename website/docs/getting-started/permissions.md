---
title: Permissions
sidebar_position: 3
description: Microsoft Graph permissions required by PSCloudPC.
---

PSCloudPC calls Microsoft Graph, so the signed-in account or app registration needs the following Microsoft Graph permissions:

- **Delegated** permissions for interactive and device code sign-in.
- **Application** permissions for an app registration that uses a client secret or certificate.

| Permission | Used for |
| --- | --- |
| `CloudPC.ReadWrite.All` | Cloud PCs, policies, images, network connections and remote actions |
| `DeviceManagementConfiguration.ReadWrite.All` | Policy assignments and configuration |
| `DeviceManagementManagedDevices.ReadWrite.All` | Managed device operations |
| `Directory.Read.All` | Resolving users and groups |

## Delegated sign-in

For interactive and device code sign-in, `Connect-Windows365` requests the permissions above when you sign in. Depending on your tenant's consent settings, an administrator might need to grant consent once.

Delegated access is also limited by the signed-in user's role. Use a Microsoft Entra role that can manage Windows 365, such as **Windows 365 Administrator** or **Intune Administrator**.

## App registration

To run PSCloudPC unattended:

1. In the Microsoft Entra admin center, go to **App registrations** and create a new registration.
2. Under **API permissions**, add the **Microsoft Graph application permissions** listed above.
3. Select **Grant admin consent**.
4. Under **Certificates & secrets**, upload a certificate (recommended) or create a client secret.
5. Connect with the [client certificate or client secret](./authentication.md) method, using the application (client) ID and your tenant ID.

Individual cmdlets list the Graph endpoint and permissions they use in the **Notes** section of their help, see the [cmdlet reference](../commands/index.md).
