---
external help file: PSCloudPC-help.xml
Module Name: PSCloudPC
online version:
schema: 2.0.0
---

# Get-CPCConnectivityHistory

## SYNOPSIS
Retrieves the connectivity history for a specific Cloud PC

## SYNTAX

### Name (Default)
```
Get-CPCConnectivityHistory -Name <String> [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

### Id
```
Get-CPCConnectivityHistory -CloudPCId <String> [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

## DESCRIPTION
The function retrieves the connectivity event history for a specific Cloud PC
using the Microsoft Graph beta API.
Each event describes a user connection attempt,
including when it occurred, the event type, and whether the connection succeeded or failed.

This is useful for diagnosing connectivity issues, identifying failed sessions,
and understanding usage patterns for a Cloud PC.

You can identify the target Cloud PC by its managed device name (default) or
by providing the Cloud PC object ID directly via -CloudPCId.

## EXAMPLES

### EXAMPLE 1
```
Get-CPCConnectivityHistory -Name "CPC-User-XXXX"
```

### EXAMPLE 2
```
Get-CPCConnectivityHistory -CloudPCId "4b5ad5e0-6a0b-4ffc-818d-36bb23cf4dbd"
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
Requires CloudPC.Read.All or CloudPC.ReadWrite.All permission (delegated or application).
This function uses the Microsoft Graph beta endpoint.
API reference: https://learn.microsoft.com/en-us/graph/api/cloudpc-getcloudpcconnectivityhistory

## RELATED LINKS
