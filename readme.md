## Companies

A List of companies hirring, in the `./companies` folder.

## How to contribute

The most straight forward way to contribute, is by loggin in the CMS at [edit.joblist.city](https://edit.joblist.city), with your free Github account.

That way, netlify-CMS (in *open-authoring* mode) will handle the work to add a contribution to this project, to create/edit the data for each companies.

> The other way is by making a PR to this repository, editting any
> part of this content.

## How is this list used

This list is also used as a data source, cloned in [gitlab/joblist/workers](https://gitlab.com/joblist/workers) to:
- extract jobs from companies and populate an algolia index (searchable at joblist.city)
- generate a static API of companies


## Github & Gitlab

- the repo on Gitlab is mirrorring the one on Github, by pulling changes from it (cms edits github, gitlab pulls github)
- `gitlab-ci.yml` allows some trigger to be executed when gitlab pull changes.


## Development notes

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
