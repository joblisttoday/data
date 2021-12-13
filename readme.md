## Companies

A List of companies potentially hirring.

The folders of this projects are as follow:

- In `./companies`, all companies that might be hirring
- In `./tags`, all tags used to describe companies (and cities), for which we have information; can be used for featured tags etc.
- In`./cities`, all cities/region that we want to feature, because a certain number of companies are hirring there


## How to use the project

- Search jobs that can automatically be indexed at [joblist.gitlab.io](https://joblist.gitlab.io).
- Add a new copany and edit existing ones on [joblist.gitlab.io/cms](https://joblist.gitlab.io/cms)
- Explore companies and their public data: [joblist.gitlab.io/profiles](https://joblist.gitlab.io/profiles)

The data and all software are accessible, reusable and open to contribution, check the licenses.

> All the `joblist` code is on [gitlab/joblist](https://gitlab.com/joblist), this repository on Github is only used because netlify-cms open-authoring mode only works with Github (in editorial-workflow mode & graphql-api activated) as backend.

## How to contribute

The most straight forward way to contribute, is by loggin in the CMS at [joblist.gitlab.io/cms](https://joblist.gitlab.io/cms), with your free Github account.

That way, netlify-CMS (in *open-authoring* mode) will handle the work to add a contribution to this project, to create/edit the data for each companies.

> The other way is by making a PR to this (or any) repository, editting any
> part of this content.

## How is the data of this repository used

### Data source

This list is also used as a data source, cloned in [gitlab/joblist/workers](https://gitlab.com/joblist/workers) to:

- extract jobs from companies and populate an algolia index (searchable at joblist.city)
- generate a static API of companies

### Automatic backup to Gitlab

There is an automatic synchronisation of this github repository to gitlab; see the deployment section.


## Development

In the repository, is also setup a gohugo.io project with the [companies-theme](https://gitlab.com/joblist/companies-theme) as a git submodule.

### Serve the local hugo server

```
hugo server --config="./.themes/config.toml"
```

### Update the hugo theme

The gohugo.io theme
([gitlab/joblist/companies-theme](https://gitlab.com/joblist/companies-theme))
is installed in this repo as a git submodule.

To update it:
- `cd` in `./.themes/companies-theme`
- `git pull`, to get the latest updates from the gitlab repo
- `cd` back into this project
- `git commit -m "theme update etc..."`, to validate the changes in
  the git submodule of the theme
- `git push`, to send the changes to this repo (on Github, then
  auto-synced to Gitlab)

### Convert markdown files with hugo

If you have all companies in the `./companies` folder:

```
mkdir output
hugo convert toYAML --config config.toml  -o output/
```

Where the content of `./config.toml` is:
```
contentDir = 'companies'
```

### Deployment

This repository is synchronised to the repo at
[gitlab/joblist/profiles](https://gitlab.com/joblist/profiles),
automatically by Gitlab.

Defined in the file `./gitlab-ci.yml`, each time a change is made to
the branch `master` of this repo, a new version of the site is built
by gohugo (see `./gitlab-ci.yml`), and deployed to the related gitlab
page.

### Open authoring

For netlify-cms open-authoring to work, we will need to have the
netlify-cms options setup pointing to this repository, and an instance
of this site, deployed from git on netlify (so the gotrue api endpoint
providing authentication work).

```
export default {
	config: {
		publish_mode: 'editorial_workflow',
		backend: {
			name: 'github',
			repo: 'joblistcity/companies',
			auth_scope: 'repo',
			open_authoring: true,
			use_graphql: true
		},
		// ...
	}
	// ...
}
```

## Licenses

- code: GPLv3
- data: Creative Commons: Attribution + Noncommercial + ShareAlike (BY-NC-SA)
