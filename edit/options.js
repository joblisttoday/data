import collections from './collections.js'

export default {
    config: {
	load_config_file: false,
	display_url: window.location.origin,

	publish_mode: 'editorial_workflow',
	backend: {
	    name: 'github',
	    repo: 'joblistcity/companies',
	    open_authoring: true,
	    use_graphql: true
	},

	media_folder: 'media/uploads',
	public_folder: 'media/uploads',
	logo_url: './joblist-logo.png',

	collections
    }
}
