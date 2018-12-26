module.exports = {        
	extend: 'apostrophe-widgets',        
	label: 'Github Page',        
	addFields: [{
		name: 'title',
		type: 'string',
		label: 'Title',
		required: true
	}, {
		name: 'user',
		type: 'string',
		label: "Username"
	}, {
		name: 'desc',
		type: 'string',
		label: 'Description',
		required: true
	}, {
		name: 'url',
		type: 'url',
		label: 'Github URL',
		required: true
	}]
};

