# Table of Contents
- [Table of Contents](#table-of-contents)
- [Overview of Community CompanyCam n8n Node](#overview-of-community-companycam-n8n-node)
- [If you want a custom node](#if-you-want-a-custom-node)
- [Bugs/Contributing/Feature Request](#bugscontributingfeature-request)
- [Documentation](#documentation)
	- [Installation](#installation)
	- [Operations](#operations)
	- [Credentials](#credentials)
	- [Projects](#projects)
		- [List Projects](#list-projects)
			- [Query](#query)
			- [Pagination](#pagination)
		- [Create Project](#create-project)
		- [Delete Project](#delete-project)
	- [Project Collaborator](#project-collaborator)
		- [Create Invitation for Collaboration](#create-invitation-for-collaboration)

# Overview of Community CompanyCam n8n Node
I created this node for a client who only needed very specific functionality: List Projects, Create Project, Delete Project, and Invite Collaborator. 

I decided to add the fields of everything possible with the company cam API so anyone in the future can see what is possible and either submit a PR to this repo or fund the completion. 


# If you want a custom node
Please reach out to me using the info on [my GitHub page](https://github.com/liamdmcgarrigle).  \
Nodes can be built for the community as well as privately just for one organization.

# Bugs/Contributing/Feature Request

If you have a bug to report or a feature request, please [submit a GitHub issue](https://github.com/liamdmcgarrigle/n8n-nodes-zoho-bookings/issues/new) with as much detail as you're able to give.

Feel free to submit PRs, but please get in touch with me first to make sure I am willing to add the feature before you spend the time on it.

# Documentation

## Installation

This can only be installed if you are self-hosting n8n.

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

Here is a list of all of the currently built operations in the CompanyCam node.

Projects
- List Projects
- Create Project
- Delete Project

Project Collaborator
- Create Invitation for Collaboration

## Credentials

To use this node you will need to set up CompanyCam credentials with a key from CompanyCam.

1. Go to https://app.companycam.com/access_tokens and click on "New Token"
![Screenshot1](/readme_files/get_comapnycam_key-1.png)

2. Keep the dropdown on "N/A", leave "This token will ONLY be used to read data from CompanyCam" unchecked, and click "Create Token"
![Screenshot2](/readme_files/get_comapnycam_key-2.png)

3. Copy your new token
![Screenshot3](/readme_files/get_comapnycam_key-3.png)

4. Go to the credential page in n8n, in add credentials add "CompanyCam API", then paste in your token and press save
![Screenshot4](/readme_files/get_comapnycam_key-4.png)

## Projects

### List Projects
Get a list of projects in your account. You can filter with a query and the search supports pagination.

#### Query
You can use the `Query` field to search. This will search the project name and address line 1. It returns some loose results.

For example, in my testing, it returned an address "28205 Street" when I searched "2820 Street" but when I searched for "123 Deer Path Street" it did not return the actual address which was "123 Deerpath Street"

#### Pagination
The pagination options are under the `Additional Fields`.
Page defaults to `0` and Per Page defaults to `30`.

### Create Project
Enter the project name to create a project with that name.

Under "Additional Fields" there is the option to add:
- Project Contact
- Project Address
- Project Coordinates

If you add both the project address and coordinates then the address will be displayed as the project address but the coordinates will be used for the map location and "Nearby Projects" location

### Delete Project
Delete a project by passing in the project ID.

The node returns an empty response on success.

## Project Collaborator

### Create Invitation for Collaboration
Create an invitation by passing in the Project ID. 

The response will be an object like this:
```

{
	"id":"629418",
	"project_id": "66027321",
	"invite_url": "https://l.cmpy.cam/7sHU3wcW3FP1eMdd6",
	"status": "pending",
	"accepted_at": null,
	"accepted_by_id": null,
	"expires_at": 1710633600,
	"creator_id": 2553021,
	"created_at": 1710088231,
	"updated_at": 1710088231
}
```

The `invite_url` is the link to share with the collaborator.

This link is valid for 7 days and can only be accepted once.
