---
external help file: PSCloudPC-help.xml
Module Name: PSCloudPC
online version:
schema: 2.0.0
---

# Update-CPCAzureNetworkConnection

## SYNOPSIS
Updates an existing Azure Network Connection

## SYNTAX

### Name (Default)
```
Update-CPCAzureNetworkConnection -Name <String> [-DisplayName <String>] [-SubscriptionId <String>]
 [-ResourceGroupId <String>] [-VirtualNetworkId <String>] [-SubnetId <String>] [-AdDomainName <String>]
 [-AdDomainUserName <String>] [-AdDomainPassword <SecureString>] [-OrganizationalUnit <String>]
 [-ProgressAction <ActionPreference>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Id
```
Update-CPCAzureNetworkConnection -ConnectionId <String> [-DisplayName <String>] [-SubscriptionId <String>]
 [-ResourceGroupId <String>] [-VirtualNetworkId <String>] [-SubnetId <String>] [-AdDomainName <String>]
 [-AdDomainUserName <String>] [-AdDomainPassword <SecureString>] [-OrganizationalUnit <String>]
 [-ProgressAction <ActionPreference>] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Updates an existing Azure Network Connection (cloudPcOnPremisesConnection) in the
Cloud PC service via the Microsoft Graph v1.0 API.
Only the properties you supply
are changed; omitted properties retain their current values.

Target the connection by its display name (looked up via Get-CPCAzureNetworkConnection)
or by its object ID directly via -ConnectionId.

## EXAMPLES

### EXAMPLE 1
```
Update-CPCAzureNetworkConnection -Name "Contoso Network" -SubnetId "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/RG01/providers/Microsoft.Network/virtualNetworks/VNet01/subnets/NewSubnet01"
```

### EXAMPLE 2
```
Update-CPCAzureNetworkConnection -ConnectionId "00000000-0000-0000-0000-000000000000" -DisplayName "Contoso Network Updated"
```

### EXAMPLE 3
```
Update-CPCAzureNetworkConnection -Name "Contoso Hybrid Network" -AdDomainUserName "newadmin@contoso.com" -AdDomainPassword (ConvertTo-SecureString "P@ssw0rd!" -AsPlainText -Force) -WhatIf
```

## PARAMETERS

### -Name
Display name of the Azure Network Connection to update.
Mutually exclusive with -ConnectionId.

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

### -ConnectionId
Object ID (GUID) of the Azure Network Connection to update.
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

### -DisplayName
New display name for the Azure Network Connection.

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

### -SubscriptionId
New Azure subscription ID to associate with the connection.

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

### -ResourceGroupId
New resource group resource ID.
Required format: /subscriptions/{subscription-id}/resourceGroups/{resourceGroupName}

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

### -VirtualNetworkId
New virtual network resource ID.
Required format: /subscriptions/{subscription-id}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}

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

### -SubnetId
New subnet resource ID.
Required format: /subscriptions/{subscription-id}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}

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

### -AdDomainName
New Active Directory domain FQDN.
Applicable to Hybrid Azure AD Join connections only.

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

### -AdDomainUserName
New AD domain join account UPN (e.g.
admin@contoso.com).
Hybrid Azure AD Join only.

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

### -AdDomainPassword
New password for the AD domain join account as a SecureString.
Hybrid Azure AD Join only.

```yaml
Type: SecureString
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OrganizationalUnit
New OU distinguished name for computer accounts (e.g.
OU=CloudPCs,DC=contoso,DC=com).
Hybrid Azure AD Join only.

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
API reference: https://learn.microsoft.com/en-us/graph/api/cloudpconpremisesconnection-update

## RELATED LINKS
