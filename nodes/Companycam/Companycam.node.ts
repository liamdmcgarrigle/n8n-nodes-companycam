import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { projectFields, projectOperations } from './ProjectDescription';
import { notBuildNotice } from './NotBuiltYetNotice';
import { projectPhotoOperations } from './ProjectPhotoDescription';
import { projectCollaboratorFields, projectCollaboratorOperations } from './ProjectCollaboratorDescription';
import { projectDocumentOperations } from './ProjectDocumentDescription';
import { projectUserOperations } from './ProjectUserDescription';
import { projectLabelOperations } from './ProjectLabelDescription';

export class Companycam implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CompanyCam',
		name: 'companycam',
		group: ['Data & Storage'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: 'Node for connecting CompanyCam',
		defaults: {
			name: 'CompanyCam',
		},
		icon: 'file:companycamLogo.svg',
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				default: 'project',
				// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
					{
						name: 'Project',
						value: 'project',
					},
					{
						name: 'Project Photo',
						value: 'projectPhoto',
					},
					{
						name: 'Project Collaborator',
						value: 'projectCollaborator',
					},
					{
						name: 'Project Document',
						value: 'projectDocument',
					},
					{
						name: 'Project User',
						value: 'projectUser',
					},
					{
						name: 'Project Label',
						value: 'projectLabel',
					},
					{
						name: 'Project Checklist',
						value: 'projectChecklist',
					},
					{
						name: 'User',
						value: 'user',
					},
					{
						name: 'Photo',
						value: 'photo',
					},
					{
						name: 'Tag',
						value: 'tag',
					},
					{
						name: 'Group',
						value: 'group',
					},
					{
						name: 'Other',
						value: 'other',
					},
				],
			},

			...projectOperations,
			...projectFields,

			...projectPhotoOperations,
			// ...projectPhotoFields,

			...projectCollaboratorOperations,
			...projectCollaboratorFields,

			...projectDocumentOperations,
			// ...projectDocumentFields,

			...projectUserOperations,
			// ...projectUserFields,

			...projectLabelOperations,
			// ...projectLabelFields,


			...notBuildNotice
		],
	};


	// async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	// 	const items = this.getInputData();

	// 	let item: INodeExecutionData;
	// 	let myString: string;


	// 	for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
	// 		try {
	// 			myString = this.getNodeParameter('myString', itemIndex, '') as string;
	// 			item = items[itemIndex];

	// 			item.json['myString'] = myString;
	// 		} catch (error) {
	// 			// This node should never fail but we want to showcase how
	// 			// to handle errors.
	// 			if (this.continueOnFail()) {
	// 				items.push({ json: this.getInputData(itemIndex)[0].json, error, pairedItem: itemIndex });
	// 			} else {
	// 				// Adding `itemIndex` allows other workflows to handle this error
	// 				if (error.context) {
	// 					// If the error thrown already contains the context property,
	// 					// only append the itemIndex
	// 					error.context.itemIndex = itemIndex;
	// 					throw error;
	// 				}
	// 				throw new NodeOperationError(this.getNode(), error, {
	// 					itemIndex,
	// 				});
	// 			}
	// 		}
	// 	}

	// 	return this.prepareOutputData(items);
	// }
// }
}
