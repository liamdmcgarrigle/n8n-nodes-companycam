import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CompanycamApi implements ICredentialType {
	name = 'companycamApi';

	displayName = 'CompanyCam API';

	genericAuth = true;

	properties: INodeProperties[] = [
		{
			displayName: 'Token',
			name: 'value',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'authorization': '=Bearer {{$credentials.value}}',
			},
		},
	};

}
