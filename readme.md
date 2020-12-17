## Companies

A List of companies.

## How to contribute

The most straight forward way to contribute, is by loggin in the CMS at [edit.joblist.city](https://edit.joblist.city), with your free Github account.

That way, netlify-CMS (in *open-authoring* mode) will handle all the the work, to add a contribution to this project, to create/edit the data for each companies.

> The other way is by making a PR to this repository, editting any
> part of this content.

## How is this list used

This list is also used as a data source in other systems.
- cloned in https://gitlab.com/joblist/workers to extract jobs from companies and populate an algolia index (searchable at joblist.city)
- [TODO] filtered (on the key/value `city=berlin`) in an other instance at joblistberlin.com, https://gitlab.com/joblist/berlin, to avoid duplication of data
- [TODO] static api, to for example use companies data in javascript widgets (other project?)
- can be cloned or reused

To sum up:
- organize companies based on libre and transparent data
- use companies data as source in other services
