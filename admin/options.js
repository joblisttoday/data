import collections from './collections.js'

export default {
    config: {
	// Skips config.yml.
	// By not skipping, the configs will be merged, with the js-version taking priority.
	load_config_file: false,
	display_url: window.location.origin,

	backend: {
	    name: 'github',
	    repo: 'joblistcity/companies',
	    open_authoring: true
	},

	media_folder: 'static/media/uploads',
	public_folder: 'media/uploads',

	collections
    }
}
