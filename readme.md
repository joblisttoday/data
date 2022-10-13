# Companies

A list of projects and companies potentially hirring, editable by
everyone in full transparency with open authoring, each updates
submitted through git(hub).

> Check out the licenses at the bottom of this page for usages and
> contributions

This project aims to be a usefull ressource, and to be used as data base for
ways to search and explore the data (ex : https://joblist.today)

> All data in this repository is used a data source for all other
> joblist.today projects (websites, search etc.). All welcome to use
> and contribute data, ideas, prototypes...

## Notes on contributing

Everyone is welcome to contribute to this project and to all data.

Try to be objective and informative when editing content, so the
information is clear and usefull for everyone.

Also, feel free to discuss anything in a Pull Request or Issue.

> The data models should evolve into a more usefull representation of
> a project/company available data.

## How to use the project

In addition to explore and editting the content of this repository (it
is folders and files) manually (in git/github), it is also possible to
use:

- [edit.joblist.today](https://edit.joblist.today) to add a new company/projects
  and edit existing ones. The other way is by making a PR to this
  repository, editting any part of the content.
- [profiles.joblist.today](https://profiles.joblist.today) to explore the content of this project, companies data.
- [joblist.today](https://joblist.today) to search all the jobs that
  can automatically be indexed

### Other ressources

- [gitlab@joblist/workers](https://gitlab.com/joblist/workers),
  fetching jobs for companies with known providers (and sending the
  results to algolia indexes)
- [gitlab@joblist/job-board-providers](https://gitlab.com/joblist/job-board-providers),
  for web-components and APIs to dispay jobs from companies using open
  job board providers

## How to use netlify-cms & github authentication

Netlify CMS (content management system) is the most straight forward
way to contribute to this project, and anyone is allowed to
contribute.

By login-in with your Github account, it will provide a graphical
interface to edit and review the data.

1. Login at [edit.joblist.today/cms](https://edit.joblist.today), with your free Github account.
1. add new content or edit existing one through the interface
1. `save` your changes. They will be stored as `draft`
1. go to the `workflow` tab of the CMS, and move (drag) your changes
   to the `In Review` section.
1. administrators & contributors will discuss and review your changes
   (visible as Pull Requests on
   [github@joblisttoday/companies/pulls](https://github.com/joblisttoday/companies/pulls))
1. your pull request is then merged (or closed), and your github account notified
1. changes will be visible live on the `profiles.joblist.today` site
   (can take 1/2 hour; see gitlab-ci:sync and build)

> Netlify-CMS (in *open-authoring* mode) will handle the work to add a
> contribution to this project; to create/edit the data models, each
> companies, so you everyone can safely submit changes.

> The code for the netlify-cms instance is hosted here: [gitlab@joblist/cms](https://gitlab.com/joblist/cms)).

## Notes on **job board providers**

Job list today systems are able to automatically display and index
jobs from a variety of job board providers.

Test and learn more about which providers are currently available,
check [providers.joblist.today](https://providers.joblist.today)

> it is possible to use the providers as javascript web-components (to
> embed them in any website), and also in node through their simplified
> API to the job board providers (see the job list workers code).

> only providers that do not require authentication are currently
> supported; [checkout known issues (or create
> one)](https://gitlab.com/joblist/job-board-providers/-/issues)


## Project's folder structure

The folders of this project/repository are as follow:

- In `./companies`, all companies that might be hirring
- In `./tags`, all tags used to describe companies (and cities), for which we have information; can be used for featured tags etc.
- In`./cities`, all cities/region that we want to feature, because a certain number of companies are hirring there

## Deployment

Look in the `./gitlab-ci.yml` file (the github project made for
contributions, synchronises to gitlab, which runs the CI pipelines).

> The project is automatically synchronised to
> https://gitlab.com/joblist/data, which runs the `gitlab-ci.yml`
> CI/CD pipelines.

> This repository on
> Github is only used because netlify-cms open-authoring mode requires
> a repository hosted on Github ( netlifcy-cms github backend, >
> editorial-workflow mode & graphql-api activated).

## Development

There are no specific development steps. If you use the data from this
repo, remember the keys of the data might evolve, so pin your project
to a commit of this repository (and upgrade safely).

> This folder aims to be data only, with all data represented as files
> inside folders.

The data files currently have the `.md` extension as their content is
[markdown](https://en.wikipedia.org/wiki/Markdown), and the data is
stored in the `frontmatter` part of the file (the part always at the
top of the file, between the two `---`).

For an example on how to parse the data with javascript, check out the job list workers: https://gitlab.com/joblist/workers/-/blob/main/src/database.js

## Licenses

- code: GPLv3
- data & contributions: Creative Commons: Attribution +
  Noncommercial + ShareAlike (BY-NC-SA) <- to the *joblist contributors*.
