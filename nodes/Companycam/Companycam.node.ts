import {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { projectFields, projectOperations } from './Descriptions/ProjectDescription';
import { notBuildNotice } from './NotBuiltYetNotice';
import { projectPhotoOperations } from './Descriptions/ProjectPhotoDescription';
import { projectCollaboratorFields, projectCollaboratorOperations } from './Descriptions/ProjectCollaboratorDescription';
import { projectDocumentOperations } from './Descriptions/ProjectDocumentDescription';
import { projectUserOperations } from './Descriptions/ProjectUserDescription';
import { projectLabelOperations } from './Descriptions/ProjectLabelDescription';
import { resources } from './Resources';
import { projectChecklistOperations } from './Descriptions/ProjectChecklistDescription';
import { userOperations } from './UserDescription';
import { photoOperations } from './Descriptions/PhotoDescription';
import { tagOperations } from './TagDescription';
import { groupOperations } from './Descriptions/groupDescription';
import { otherOperations } from './Descriptions/otherDescription';

export class Companycam implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CompanyCam',
		name: 'companycam',
		group: ['Data & Storage'],
		version: 1,
		subtitle: '={{ $parameter["operation"] }}',
		description: 'Node for connecting CompanyCam',
		defaults: {
			name: 'CompanyCam',
		},
		requestDefaults: {
			baseURL: 'https://api.companycam.com/v2',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		icon: 'file:companycamLogo.svg',
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'companycamApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
				default: 'project',
				// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
					...resources
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

			...projectChecklistOperations,
			// ...projectChecklistFields,

			...userOperations,
			// ...userFields,

			...photoOperations,
			// ...photoFields,

			...tagOperations,
			// ...tagFields,

			...groupOperations,
			// ...groupFields,

			...otherOperations,
			// ...otherFields,

			...notBuildNotice
		],
	};

}
