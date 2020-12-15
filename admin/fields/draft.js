export default {
    label: 'Draft',
    name: 'draft',
    widget: 'select',
    required: false,
    default: false,
    hint: 'If draft is set to Yes, this page will not be visible on the site.',
    options: [
	{
	    label: 'Yes',
	    value: true
	},
	{
	    label: 'No',
	    value: ''
	}
    ]
}
