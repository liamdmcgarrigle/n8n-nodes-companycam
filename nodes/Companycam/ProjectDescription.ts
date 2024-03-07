import { INodeProperties } from "n8n-workflow";

export const projectOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'List Projects',
				value: 'listProjects',
				action: 'List projects',
			},
			{
				name: 'Create Project',
				value: 'createProject',
				action: 'Create project',
			},
			{
				name: 'Retrieve Project',
				value: 'retrieveProject',
				action: 'Retrieve project',
			},
			{
				name: 'Update Project',
				value: 'updateProject',
				action: 'Update project',
			},
			{
				name: 'Delete Project',
				value: 'deleteProject',
				action: 'Delete project',
			},
			{
				name: 'Restore Project',
				value: 'restoreProject',
				action: 'Restore project',
			},
			{
				name: 'Update The Project Notepad',
				value: 'updateTheProjectNotepad',
				action: 'Update the project notepad',
			},
			{
				name: 'List Project Comments',
				value: 'listProjectComments',
				action: 'List project comments',
			},
			{
				name: 'Add Project Comment',
				value: 'addProjectComment',
				action: 'Add project comment',
			},
		],
		default: 'createProject',
		displayOptions: {
			show: {
				resource: [
					'project',
				]
			},
		},
	},
]


export const projectFields: INodeProperties[] = []
