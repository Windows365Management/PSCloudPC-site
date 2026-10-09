---
external help file: PSCloudPC-help.xml
Module Name: PSCloudPC
online version:
schema: 2.0.0
---

# Get-CPCAuditEvent

## SYNOPSIS
Returns Cloud PC audit events

## SYNTAX

```
Get-CPCAuditEvent [-Activity <String>] [-Top <Int32>] [-ProgressAction <ActionPreference>] [<CommonParameters>]
```

## DESCRIPTION
The function will return all Cloud PC audit events, or audit events filtered
by activity name.
Audit events record every create, update, and delete
operation performed on Cloud PC resources and are useful for compliance,
troubleshooting, and change tracking.

Optionally use -Top to limit the number of results returned (audit logs
can grow large in active tenants).

## EXAMPLES

### EXAMPLE 1
```
Get-CPCAuditEvent
```

### EXAMPLE 2
```
Get-CPCAuditEvent -Top 25
```

### EXAMPLE 3
```
Get-CPCAuditEvent -Activity "Reprovision cloudPc"
```

## PARAMETERS

### -Activity
Filter audit events by activity name, e.g.
"Update cloudPC" or
"Reprovision cloudPc".
Use Get-CPCAuditEvent first to discover activity names
in your tenant.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Top
Limit the number of audit events returned.
When omitted all events are returned.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: 0
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
Requires CloudPC.Read.All or CloudPC.ReadWrite.All permission
(delegated or application).
API reference: https://learn.microsoft.com/en-us/graph/api/virtualendpoint-list-auditevents

## RELATED LINKS
