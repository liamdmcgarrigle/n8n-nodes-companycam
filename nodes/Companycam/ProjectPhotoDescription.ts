import { INodeProperties } from "n8n-workflow";

export const projectPhotoOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'List Photos',
				value: 'listPhotos',
				action: 'List photos',
				description: 'Move an event To another calendar',
			},
			{
				name: 'Add Photo',
				value: 'addPhoto',
				action: 'Add photo',
			},
		],
		default: 'listPhotos',
		displayOptions: {
			show: {
				resource: [
					'projectPhoto',
				]
			},
		},
	},
]
