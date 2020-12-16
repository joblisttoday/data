## Companies

A List of companies hirring, that can be managed with `netlify-cms`, taking advantage of the `open-authoring` feature it offers: https://www.netlifycms.org/docs/open-authoring

## Folder structure explained

This project follows 

- `./content/*`, all data publicly manageable through the netlify-cms
- `./admin`, netlify-cms configuration files making the edition possible
- `./index.html`, homepage website to introduce this data and systems

## How is this list used

This list is also used as a data source in other systems.
- cloned in https://gitlab.com/joblist/workers to extract jobs from companies and populate an algolia index (searchable at joblist.city)
- [TODO] filtered (on the key/value `city=berlin`) in an other instance at joblistberlin.com, https://gitlab.com/joblist/berlin, to avoid duplication of data
- [TODO] static api, to for example use companies data in javascript widgets (other project?)
- can be cloned or reused

To sum up:
- organize companies based on libre and transparent data
- use companies data as source in other services

## How to contribute

The most straight forward way to contribute, is by loggin in the netlify-cms instance (link at the top) with your free Github account.

That way, the CMS will handle all the the hard work based on git, to make a contribution to this project (as when used in software dedevelopment), and to create/edit the data keys and values for each companies (stored in toml files).

The other way is by making a PR editting any part of this repository's
content. The diff result of this operation should be the same as when done
through the cms.

## Questions

### Why not hosted on gitlab like the rest

Gitlab does not support open authoring mode for netlify-cms.

### Why not hosted on github pages

Because github api requires a backend, to create authenticated requests.

Therefore the simple/most-straight-foreward with netlify-cms, is to host the site on netlify.

This is because otherwise, we run in this issue: https://github.com/netlify/netlify-cms/issues/4731

### Why hosted on netlify and add an other service

See above; to simplify authentication to github api to be able to log in netlify-cms and edit this repo.

## Licenses 

Code: [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)

Data: [Creative Commons Attribution-ShareAlike license (CC-BY-SA)](https://creativecommons.org/licenses/by-sa/2.5/),
