A List of companies hirring, that can be managed with `netlify-cms`, taking advantage of the `open-authoring` feature it offers: https://www.netlifycms.org/docs/open-authoring

# Folder structure explained

This project follows 

-`./content`, are all companies, each in its own files.

# How is this list used

This list is also used as a data source in other systems.
- cloned in https://gitlab.com/joblist/workers to extract jobs from companies and populate an algolia index (searchable at joblist.city)
- [In progress] filtered (on the key/value `city=berlin`) in an other instance at joblistberlin.com, https://gitlab.com/joblist/berlin, to avoid duplication of data
- what else?

## Questions

### Why not hosted on gitlab like the rest

Gitlab does not support open authoring mode for netlify-cms.

### Why not hosted on github pages

Because github api requires a backend, to create authenticated requests.

Therefore the simple/most-straight-foreward with netlify-cms, is to host the site on netlify.

This is because otherwise, we run in this issue: https://github.com/netlify/netlify-cms/issues/4731

### Why hosted on netlify and add an other service

See above; to simplify authentication to github api to be able to log in netlify-cms and edit this repo.
