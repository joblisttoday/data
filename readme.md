## Companies

A List of companies.

## How to contribute

The most straight forward way to contribute, is by loggin in the [https://edit.joblist.city](edit.joblist.city) with your free Github account.

That way, netlify-CMS (in open authoring) will handle all the the hard work (based on git), to add a contribution to this project (as when used in software dedevelopment), and to create/edit the data keys and values for each companies (stored in toml files).

> The other way is by making a PR editting any part of this
> repository's content. The diff result of this operation should be
> the same as when done through the cms.

## How is this list used

This list is also used as a data source in other systems.
- cloned in https://gitlab.com/joblist/workers to extract jobs from companies and populate an algolia index (searchable at joblist.city)
- [TODO] filtered (on the key/value `city=berlin`) in an other instance at joblistberlin.com, https://gitlab.com/joblist/berlin, to avoid duplication of data
- [TODO] static api, to for example use companies data in javascript widgets (other project?)
- can be cloned or reused

To sum up:
- organize companies based on libre and transparent data
- use companies data as source in other services
