# Companies

A list of companies potentially hirring, editable by everyone in full
transparency with open authoring, each updates submitted through git(hub).

> All data in this repository is used a data source for all other
> joblist projects, which all fetch it when they need. Check out the
> licenses at the bottom of this page for usages and contributions.

## How to use the project

In addition to explore and editting the content of this repository
manually, it is also possible to use:

- [edit.joblist.today](https://edit.joblist.today) to add a new copany
  and edit existing ones. The other way is by making a PR to this
  repository, editting any part of the content.
- [profiles.joblist.today](https://profiles.joblist.today) to explore the content of this project, companies data.
- [joblist.today](https://joblist.today) to search all the jobs that
  can automatically be indexed from the fetching
  `company.{provider_name,provider_hostname}` (see
  [gitlab@joblist/workers](https://gitlab.com/joblist/workers),
  [gitlab@joblist/job-board-providers](https://gitlab.com/joblist/job-board-providers)).

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
   (visible at
   [github@joblisttoday/companies](https://github.com/joblisttoday/companies)
1. your pull request is merged (or closed), and your github account notified
1. changes are visible live on the `profiles.joblist.today` site
   (can take 1/2 hour; see gitlab-ci:sync).

> Netlify-CMS (in *open-authoring* mode) will handle the work to add a
> contribution to this project; to create/edit the data models, each
> companies, so you everyone can safely submit changes.

> The code for the netlify-cms instance is hosted here: [gitlab@joblist/cms](https://gitlab.com/joblist/cms)).

## Notes on contributing

Everyone is welcome to contribute to this project and to all data.

Try to be objective and informative when editing content, so the
information is clear and usefull for everyone.

Also, feel free to discuss anything in a Pull Request or Issue.

## Project's folder structure

The folders of this project/repository are as follow:

- In `./companies`, all companies that might be hirring
- In `./tags`, all tags used to describe companies (and cities), for which we have information; can be used for featured tags etc.
- In`./cities`, all cities/region that we want to feature, because a certain number of companies are hirring there

## Deployment

Look in the `./gitlab-ci.yml` file.

## Notes

> The project is automatically synchronised to
> https://gitlab.com/joblist/data, which runs the `gitlab-ci.yml`
> CI/CD pipelines.

> This repository on
> Github is only used because netlify-cms open-authoring mode requires
> a repository hosted on Github ( netlifcy-cms github backend, >
> editorial-workflow mode & graphql-api activated).

## Licenses

- code: GPLv3
- data & contributions: Creative Commons: Attribution +
  Noncommercial + ShareAlike (BY-NC-SA) <- to the *joblist contributors*.
