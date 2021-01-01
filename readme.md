## Companies

A List of companies potentially hirring.

The folders of this projects are as follow:

- In `./companies`, all companies that might be hirring
- In `./tags`, all tags used to describe companies (and cities), for which we have information; can be used for featured tags etc.
- In`./cities`, all cities/region that we want to feature, because a certain number of companies are hirring there


## How to use the project

- Add a new copany and edit existing ones on [edit.joblist.city](https://edit.joblist.city)
- Search jobs that can automatically be indexed at [joblist.city](https://joblist.city).
- Explore companies and their public data: [profiles.joblist.city](https://profiles.joblist.city)

The data and all software are accessible, reusable and open to contribution, check the licenses.

## How to contribute

The most straight forward way to contribute, is by loggin in the CMS at [edit.joblist.city](https://edit.joblist.city), with your free Github account.

That way, netlify-CMS (in *open-authoring* mode) will handle the work to add a contribution to this project, to create/edit the data for each companies.

> The other way is by making a PR to this (or any) repository, editting any
> part of this content.

## How is this list used

This list is also used as a data source, cloned in [gitlab/joblist/workers](https://gitlab.com/joblist/workers) to:

- extract jobs from companies and populate an algolia index (searchable at joblist.city)
- generate a static API of companies


## Development notes

In the repository, is also setup a gohugo.io project with the [companies-theme](https://gitlab.com/joblist/companies-theme) as a git submodule.

### Serve the local hugo server

```
hugo server --config="./.themes/config.toml"
```

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

## Licenses

- code: GPLv3
- data: Creative Commons: Attribution + Noncommercial + ShareAlike (BY-NC-SA)
