## Companies

A List of companies potentially hirring.

The folders of this projects are as follow:

- In `./companies`, all companies that might be hirring
- In `./tags`, all tags used to describe companies (and cities), for which we have information; can be used for featured tags etc.
- In`./cities`, all cities/region that we want to feature, because a certain number of companies are hirring there


## How to use the project

- Add a new copany and edit existing ones on
  [edit.joblist.today](https://edit.joblist.today). The other way is
  by making a PR to this (or any) repository, editting any part of
  this content.
- Explore companies and their public data:
  [profiles.joblist.today](https://profiles.joblist.today).
- Search jobs that can automatically be indexed from the
  `company.{provider_name,provider_hostname}` at
  [joblist.today](https://joblist.today).

> All the `joblist` code is on [gitlab/joblist](https://gitlab.com/joblist), this repository on Github is only used because netlify-cms open-authoring mode only works with Github (in editorial-workflow mode & graphql-api activated) as backend.

## How to use netlify-cms & github authentication

The most straight forward way to contribute, is by loggin in the CMS at [edit.joblist.today/cms](https://edit.joblist.today), with your free Github account.

Netlify-CMS (in *open-authoring* mode) will handle the work to add a contribution to this project, to create/edit the data for each companies, and to for the repository so you everyone can safely submit changes.

## How is the data of this repository used

### Data source

This list is also used as a data source, cloned in [gitlab/joblist/workers](https://gitlab.com/joblist/workers) to:

- extract jobs from companies and populate an algolia index (searchable at joblist.today)
- generate a static API of companies

### Deployment

Look in the `./gitlab-ci.yml` file.

## Licenses

- code: GPLv3
- data: Creative Commons: Attribution + Noncommercial + ShareAlike (BY-NC-SA)
