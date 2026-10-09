---
external help file: PSCloudPC-help.xml
Module Name: PSCloudPC
online version:
schema: 2.0.0
---

# Invoke-CPCRestore

## SYNOPSIS
Restore a Cloud PC to a certain point in time.

## SYNTAX

```
Invoke-CPCRestore [-Name] <String> [[-SnapshotId] <String>] [-ProgressAction <ActionPreference>] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Restore a Cloud PC to a previous state using a snapshot.
When -SnapshotId is
provided the restore runs non-interactively and is safe to call from automation
scripts or pipelines.
When -SnapshotId is omitted the user is presented with
an interactive Out-GridView selector to choose a restore point (requires a
graphical session).

## EXAMPLES

### EXAMPLE 1
```
Invoke-CPCRestore -Name "CloudPC01"
# Interactive: opens a restore-point picker GUI.
```

## PARAMETERS

### -Name
The display name of the Cloud PC to restore.

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

### -SnapshotId
The unique identifier of the restore-point snapshot to restore to.
Use
Get-CPCRestorePoint to obtain snapshot IDs.
When this parameter is supplied
the function runs non-interactively without opening a GUI selector.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
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
API reference: https://learn.microsoft.com/en-us/graph/api/cloudpc-restore
Required permission: CloudPC.ReadWrite.All

## RELATED LINKS
