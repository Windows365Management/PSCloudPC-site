---
external help file: PSCloudPC-help.xml
Module Name: PSCloudPC
online version:
schema: 2.0.0
---

# Invoke-CPCRetryPartnerAgentInstallation

## SYNOPSIS
Retries installation of partner agents that failed to install on a Cloud PC

## SYNTAX

### Name (Default)
```
Invoke-CPCRetryPartnerAgentInstallation -Name <String> [-ProgressAction <ActionPreference>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

### Id
```
Invoke-CPCRetryPartnerAgentInstallation -CloudPCId <String> [-ProgressAction <ActionPreference>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
The function triggers the retryPartnerAgentInstallation action on a specific Cloud PC.
When third-party partner agents (such as monitoring or security agents) fail to install
during provisioning, this action instructs the service to retry the failed agent
installations without requiring a full reprovision.

This is useful when a Cloud PC enters a warning or degraded state because a partner
agent could not be installed, and you want to attempt remediation before resorting
to reprovisioning.

The action returns 204 No Content on success.
You can identify the target Cloud PC
by its managed device name (default) or by providing the Cloud PC object ID directly
via -CloudPCId.

## EXAMPLES

### EXAMPLE 1
```
Invoke-CPCRetryPartnerAgentInstallation -Name "CPC-User-XXXX"
```

### EXAMPLE 2
```
Invoke-CPCRetryPartnerAgentInstallation -CloudPCId "4b5ad5e0-6a0b-4ffc-818d-36bb23cf4dbd"
```

### EXAMPLE 3
```
Invoke-CPCRetryPartnerAgentInstallation -Name "CPC-User-XXXX" -WhatIf
```

## PARAMETERS

### -Name
The managed device name of the Cloud PC.
Use Get-CloudPC to find Cloud PC names.
Mutually exclusive with -CloudPCId.

```yaml
Type: String
Parameter Sets: Name
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CloudPCId
The object ID (GUID) of the Cloud PC.
Use Get-CloudPC to find Cloud PC IDs.
Mutually exclusive with -Name.

```yaml
Type: String
Parameter Sets: Id
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProgressAction
{{ Fill ProgressAction Description }}

```yaml
Type: ActionPreference
Parameter Sets: (All)
Aliases: proga

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES
Requires CloudPC.ReadWrite.All permission (delegated or application).
This function uses the Microsoft Graph beta endpoint.
API reference: https://learn.microsoft.com/en-us/graph/api/cloudpc-retrypartneragentinstallation

## RELATED LINKS
