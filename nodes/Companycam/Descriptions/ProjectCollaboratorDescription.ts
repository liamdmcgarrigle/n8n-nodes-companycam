import { INodeProperties } from "n8n-workflow";

export const projectCollaboratorOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Create Invitation for Collaboration',
				value: 'createInvitationForCollaboration',
				action: 'Create invitation for collaboration',
				description: 'Invites a non-licensed user to colaborate on a project'
			},
			{
				name: 'List Project Collaborators',
				value: 'listProjectCollaborators',
				action: 'List project collaborators',
			},
			{
				name: 'List Project Invitations',
				value: 'ListProjectInvitations',
				action: 'List project invitations',
			},
		],
		default: 'createInvitationForCollaboration',
		displayOptions: {
			show: {
				resource: [
					'projectCollaborator',
				]
			},
		},
	},
]


export const projectCollaboratorFields: INodeProperties[] = []
