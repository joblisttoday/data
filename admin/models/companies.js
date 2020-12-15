import jobBoardUrl from '../fields/jobBoardUrl.js'
import jobBoardProvider from '../fields/jobBoardProvider.js'
import jobBoardHostname from '../fields/jobBoardHostname.js'
import draft from '../fields/draft.js'
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
    format: 'toml-frontmatter',
    name: 'companies',
    label: 'Companies',
    label_singular: 'Company',
    folder: 'content/',
    media_folder: '',
    path: '{{slug}}/index',
    create: true,
    slug: '{{title}}',
    editor: {
	preview: false
    },
    fields: [
	jobBoardUrl,
	/* jobBoardProvider,
	   jobBoardHostname,
	   draft,
	   updatedAt,
	   createdAt,
	   facebookUrl,
	   instagramUrl,
	   twitterUrl,
	   linkedinUrl,
	   longitude,
	   latitude,
	   slug,
	   companyUrl,
	   postalCode,
	   city,
	   country,
	   address,
	   tags,
	   body,
	   title */
    ]
}

export default companies
