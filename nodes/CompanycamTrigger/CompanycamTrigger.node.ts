// import { createHmac } from 'crypto';
import type {
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
} from 'n8n-workflow';


export class CompanycamTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CompanyCam Trigger',
		name: 'companycamTrigger',
		icon: 'file:companycamLogo.svg',
		group: ['trigger'],
		version: 1,
		description: 'Handle CompanyCam events via webhooks',
		defaults: {
			name: 'CompanyCam Trigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'companycamApi',
				required: true,
			},
		],

		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				required: true,
				default: [],
				// eslint-disable-next-line n8n-nodes-base/node-param-multi-options-type-unsorted-items
				options: [
					{
						name: 'All',
						value: '*',
					},
					{
						name: 'Photo Added',
						value: 'photo.created',
					},
					{
						name: 'Photo Deleted',
						value: 'photo.deleted',
					},
					{
						name: 'Project Created',
						value: 'project.created',
					},
					{
						name: 'Project Updated',
						value: 'project.updated',
					},
					{
						name: 'Project Label Created',
						value: 'project.label_added',
					},
					{
						name: 'Project Deleted',
						value: 'project.deleted',
					},
					{
						name: 'Comment Added',
						value: 'comment.created',
					},
					{
						name: 'Photo Tag Added',
						value: 'photo.tag_added',
					},
					{
						name: 'ToDo List Created',
						value: 'todo_list.created',
					},
					{
						name: 'ToDo List Completed',
						value: 'todo_list.completed',
					},
					{
						name: 'ToDo List Deleted',
						value: 'todo_list.deleted',
					},
					{
						name: 'Task Completed',
						value: 'task.completed',
					},
					{
						name: 'Document Added',
						value: 'document.created',
					},
					{
						name: 'Document Added',
						value: 'document.created',
					},
				],
			},
			{
				displayName: 'Filters',
				name: 'filters',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				options: [
					{
						displayName: 'Project ID',
						name: 'projectId',
						type: 'string',
						default: '',
					},
				],
			},


			// ---------------------------------------------------------------------
	// ----------------------- FOR OPERATION FIELDS ------------------------
	// ---------------------------------------------------------------------
	{
		displayName: "Sorry, we haven't built this part yet.",
		name: 'notice',
		type: 'notice',
		default: '',
	},
	{
		displayName: "This node was funded by a company only for specific functionality. We added all of the functions to show what is possible with the CompanyCam API. If you want extra functionality, feel free to reach out to us or submit a PR on the GitHub repo.",
		name: 'notice',
		type: 'notice',
		default: '',
	},
	{
		displayName: "liam@mcgarrigle.co",
		name: 'notice',
		type: 'notice',
		default: '',
	},


		],
	};


	// I added in the clickup webhook to use as a template


	webhookMethods = {
		// default: {
		// 	async checkExists(this: IHookFunctions): Promise<boolean> {
				// const teamId = this.getNodeParameter('team') as string;
				// const webhookData = this.getWorkflowStaticData('node');
				// if (webhookData.webhookId === undefined) {
				// 	return false;
				// }
				// const endpoint = `/team/${teamId}/webhook`;
				// const { webhooks } = await clickupApiRequest.call(this, 'GET', endpoint);
				// if (Array.isArray(webhooks)) {
				// 	for (const webhook of webhooks) {
				// 		if (webhook.id === webhookData.webhookId) {
				// 			return true;
				// 		}
				// 	}
				// }
			// 	return false;
			// },
		// 	async create(this: IHookFunctions): Promise<boolean> {
		// 		const webhookUrl = this.getNodeWebhookUrl('default');
		// 		const webhookData = this.getWorkflowStaticData('node');
		// 		const filters = this.getNodeParameter('filters') as IDataObject;
		// 		const teamId = this.getNodeParameter('team') as string;
		// 		const events = this.getNodeParameter('events') as string[];
		// 		const endpoint = `/team/${teamId}/webhook`;
		// 		const body: IDataObject = {
		// 			endpoint: webhookUrl,
		// 			events,
		// 		};

		// 		body.events = '*';

		// 		const { webhook } = await clickupApiRequest.call(this, 'POST', endpoint, body);
		// 		webhookData.webhookId = webhook.id;
		// 		webhookData.secret = webhook.secret;
		// 		return true;
		// 	},
		// 	async delete(this: IHookFunctions): Promise<boolean> {
		// 		const webhookData = this.getWorkflowStaticData('node');
		// 		const endpoint = `/webhook/${webhookData.webhookId}`;
		// 		try {
		// 			await clickupApiRequest.call(this, 'DELETE', endpoint);
		// 		} catch (error) {
		// 			return false;
		// 		}
		// 		delete webhookData.webhookId;
		// 		delete webhookData.secret;
				// return true;
		// 	},
		// },
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		// const webhookData = this.getWorkflowStaticData('node');
		// const headerData = this.getHeaderData() as IDataObject;
		// const req = this.getRequestObject();
		// const computedSignature = createHmac('sha256', webhookData.secret as string)
		// 	.update(JSON.stringify(req.body))
		// 	.digest('hex');
		// if (headerData['x-signature'] !== computedSignature) {
		// 	// Signature is not valid so ignore call
		// 	return {};
		// }
		return {
			// workflowData: [this.helpers.returnJsonArray(req.body as IDataObject)],
		};
	}
}
