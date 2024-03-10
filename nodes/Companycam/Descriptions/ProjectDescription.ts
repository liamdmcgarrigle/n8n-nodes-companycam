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
				routing: {
					request: {
						method: 'POST',
					},
				},
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


export const projectFields: INodeProperties[] = [

	//
	// CREATE PROJECT
	//
	{
		displayName: 'Project Name',
		name: 'projectName',
		type: 'string',
		required: true,
		default: '',
		routing: {
			request: {
				body: {
					"name":'={{$parameter.projectName}}',
				}
			},
		},
		displayOptions: {
			show: {
				resource: [
					'project',
				],
				operation: [
					'createProject'
				]
			}
		},
	},


	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'project',
				],
				operation: [
					'createProject'
				]
			}
		},
		routing: {
			request: {
				body: {
					"primary_contact":{
						"name": "={{$parameter.additionalFields.contact.contactFields.name}}",
						"email": "={{$parameter.additionalFields.contact.contactFields.email}}",
						"phone_number": "={{$parameter.additionalFields.contact.contactFields.phone_number}}",
					},
					"address":{
						"street_address_1": "={{$parameter.additionalFields.address.addressFields.street_address_1}}",
						"street_address_2": "={{$parameter.additionalFields.address.addressFields.street_address_2}}",
						"city": "={{$parameter.additionalFields.address.addressFields.city}}",
						"state": "={{$parameter.additionalFields.address.addressFields.state}}",
						"postal_code": "={{$parameter.additionalFields.address.addressFields.postal_code}}",
						"country": "={{$parameter.additionalFields.address.addressFields.country}}",
					},
					"coordinates":{
						"lat": "={{$parameter.additionalFields.coordinates.coordinatesFeilds.lat}}",
						"lon": "={{$parameter.additionalFields.coordinates.coordinatesFeilds.lon}}",
					},
				}
			},
		},
		options: [
			{
				displayName: 'Contact',
				name: 'contact',
				placeholder: 'Add Contact',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: false,
				},

				options: [
					{
						name: 'contactFields',
						displayName: 'Contact',
						values: [
							{
								displayName: 'Name',
								name: 'name',
								type: 'string',
								default: '',
								placeholder: 'John Smith',
							},
							{
								displayName: 'Email',
								name: 'email',
								type: 'string',
								default: '',
								placeholder: 'example@email.com',
							},
							{
								displayName: 'Phone Number',
								name: 'phone_number',
								type: 'string',
								default: '',
							},
						],
					},

				],
			},
			{
				displayName: 'Address',
				name: 'address',
				placeholder: 'Add address',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: false,
				},
				options: [
					{
						name: 'addressFields',
						displayName: 'Address',
						values: [
							{
								displayName: 'Street Address 1',
								name: 'street_address_1',
								type: 'string',
								default: '',
								placeholder: '2600 Benjamin Franklin Pkwy',
							},
							{
								displayName: 'Street Address 2',
								name: 'street_address_2',
								type: 'string',
								default: '',
								placeholder: 'Unit B',
							},
							{
								displayName: 'City',
								name: 'city',
								type: 'string',
								default: '',
								placeholder: 'Philadelphia',
							},
							{
								displayName: 'State',
								name: 'state',
								type: 'string',
								default: '',
								placeholder: 'PA',
							},
							{
								displayName: 'Postal Code',
								name: 'postal_code',
								type: 'string',
								default: '',
								placeholder: '19130',
							},
							{
								displayName: 'Country',
								name: 'country',
								type: 'string',
								default: '',
								placeholder: 'United States',
							},
						],
					},

				],
			},
			{
				displayName: 'Coordinates',
				name: 'coordinates',
				placeholder: 'Add coordinates',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: false,
				},
				options: [
					{
						name: 'coordinatesFeilds',
						displayName: 'Coordinates',
						values: [
							{
								displayName: 'Lattatude',
								name: 'lat',
								type: 'number',
								default: '',
								placeholder: '',
								typeOptions: {
									maxValue: 90,
									minValue: -90,
									numberStepSize: 0.000001,
								},
								required: true,
							},
							{
								displayName: 'Longitude',
								name: 'lon',
								type: 'number',
								default: '',
								placeholder: '',
								typeOptions: {
									maxValue: 180,
									minValue: -180,
									numberStepSize: 0.000001,
								},
								required: true,
							},
						],
					},

				],
			},
		],
	},

	//
	// CREATE PROJECT
	//
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'string',
		required: true,
		default: '',
		routing: {
			request: {
				method: 'DELETE',
				url: '=/projects/{{$parameter.projectId}}'
			},
		},
		displayOptions: {
			show: {
				resource: [
					'project',
				],
				operation: [
					'deleteProject'
				]
			}
		},
	},
]
