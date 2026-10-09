---
external help file: PSCloudPC-help.xml
Module Name: PSCloudPC
online version:
schema: 2.0.0
---

# Set-CPCCrossRegionDisasterRecovery

## SYNOPSIS
Configures cross-region disaster recovery settings on a Cloud PC User Settings Policy

## SYNTAX

```
Set-CPCCrossRegionDisasterRecovery [-Name] <String> [-DisasterRecoveryType] <String>
 [[-MaintainCrossRegionRestorePointEnabled] <Boolean>] [[-UserInitiatedDisasterRecoveryAllowed] <Boolean>]
 [[-RegionName] <String>] [[-RegionGroup] <String>] [-ProgressAction <ActionPreference>] [-WhatIf] [-Confirm]
 [<CommonParameters>]
```

## DESCRIPTION
The function configures cross-region disaster recovery settings on an existing Cloud PC
User Settings Policy.
Disaster recovery ensures Cloud PCs can be provisioned in an
alternate Azure region when the primary region is unavailable.

Supported disaster recovery types:
- notConfigured : Disaster recovery is disabled (default)
- crossRegion   : Cross-region DR - Windows 365 provisions a standby Cloud PC in the
                  specified backup region automatically
- premium       : Premium DR - adds user-initiated failover capability on top of
                  cross-region standby

This function requires the Graph API beta endpoint and the CloudPC.ReadWrite.All permission.

## EXAMPLES

### EXAMPLE 1
```
Set-CPCCrossRegionDisasterRecovery -Name "UserSettings01" -DisasterRecoveryType crossRegion -RegionName "westus" -RegionGroup "usWest" -MaintainCrossRegionRestorePointEnabled $true
```

### EXAMPLE 2
```
Set-CPCCrossRegionDisasterRecovery -Name "UserSettings01" -DisasterRecoveryType premium -RegionName "northeurope" -RegionGroup "europeNorth" -MaintainCrossRegionRestorePointEnabled $true -UserInitiatedDisasterRecoveryAllowed $true
```

### EXAMPLE 3
```
Set-CPCCrossRegionDisasterRecovery -Name "UserSettings01" -DisasterRecoveryType notConfigured
```

## PARAMETERS

### -Name
The display name of the Cloud PC User Settings Policy to update.

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

### -DisasterRecoveryType
The disaster recovery mode to configure.
Valid values: notConfigured, crossRegion, premium.

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

### -MaintainCrossRegionRestorePointEnabled
When $true, Windows 365 continuously maintains cross-region restore points that can be
used during failover.
When $false (default), only the initial provisioning image is
available after a disaster, which may result in data loss.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -UserInitiatedDisasterRecoveryAllowed
When $true, end users can activate disaster recovery themselves from the Windows 365
portal.
Only applicable when DisasterRecoveryType is 'premium'.
Default is $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegionName
The Azure region name to use as the disaster recovery target (e.g.
'westus',
'northeurope', 'eastasia').
Required when DisasterRecoveryType is 'crossRegion' or
'premium'.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RegionGroup
The region group for disaster recovery routing (e.g.
'usEast', 'usWest',
'europeNorth', 'europeWest', 'asiaPacific').
Required when DisasterRecoveryType is
'crossRegion' or 'premium'.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
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

## RELATED LINKS
