import collections from './collections.js'

export default {
    config: {
	load_config_file: false,
	display_url: window.location.origin,

	backend: {
	    name: 'github',
	    repo: 'joblistcity/companies',
	    open_authoring: true,
	},
	publish_mode: 'editorial_workflow',

	media_folder: 'media/uploads',
	public_folder: 'media/uploads',

	collections
    }
}
