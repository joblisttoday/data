import jobBoardUrl from '../fields/jobBoardUrl.js'
import jobBoardProvider from '../fields/jobBoardProvider.js'
import jobBoardHostname from '../fields/jobBoardHostname.js'
import updatedAt from '../fields/updatedAt.js'
import createdAt from '../fields/createdAt.js'
import facebookUrl from '../fields/facebookUrl.js'
import instagramUrl from '../fields/instagramUrl.js'
import twitterUrl from '../fields/twitterUrl.js'
import linkedinUrl from '../fields/linkedinUrl.js'
import longitude from '../fields/longitude.js'
import latitude from '../fields/latitude.js'
import slug from '../fields/slug.js'
import companyUrl from '../fields/companyUrl.js'
import postalCode from '../fields/postalCode.js'
import city from '../fields/city.js'
import country from '../fields/country.js'
import address from '../fields/address.js'
import tags from '../fields/tags.js'
import body from '../fields/body.js'
import title from '../fields/title.js'

const companies  = {
    name: 'companies',
    label: 'Companies',
    label_singular: 'Company',
    folder: 'content/companies',
    media_folder: '',
    path: '{{slug}}/index',
    extension: 'toml',
    create: true,
    slug: '{{title}}',
    /* filter: {
       field: 'city',
       value: 'berlin'
     * }, */
    editor: {
	preview: false
    },
    fields: [
	title,
	slug,
	companyUrl,
	jobBoardUrl,
	jobBoardProvider,
	jobBoardHostname,
	body,
	tags,
	linkedinUrl,
	twitterUrl,
	facebookUrl,
	instagramUrl,
	longitude,
	latitude,
	country,
	city,
	postalCode,
	address,
	updatedAt,
	createdAt,
    ]
}

export default companies
