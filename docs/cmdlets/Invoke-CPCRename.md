---
external help file: PSCloudPC-help.xml
Module Name: PSCloudPC
online version:
schema: 2.0.0
---

# Invoke-CPCRename

## SYNOPSIS
Renames a Cloud PC

## SYNTAX

```
Invoke-CPCRename [-Name] <String> [-NewDisplayName] <String> [-ProgressAction <ActionPreference>]
 [<CommonParameters>]
```

## DESCRIPTION
The function will rename a Cloud PC by updating its displayName via the
Microsoft Graph Windows 365 rename API (v1.0).

## EXAMPLES

### EXAMPLE 1
```
Invoke-CPCRename -Name "CloudPC01" -NewDisplayName "Marketing-CloudPC-01"
```

## PARAMETERS

### -Name
Enter the current name (managedDeviceName or displayName) of the Cloud PC to rename

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NewDisplayName
Enter the new display name to assign to the Cloud PC

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: True
Position: 2
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
API reference: https://learn.microsoft.com/en-us/graph/api/cloudpc-rename

## RELATED LINKS
