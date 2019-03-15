# Planned Improvements
- Dynamically load CSS as a theme (perhaps specified in lunchlady).
- Automatically page in articles as you scroll. (infinite scrolling)
- Filter content by tag.
- Display featured tags as global navigation.
  -  Tag used in global navigation can point to a single article and present as 'page', rather than a set of articles.
- Break out reducers via `combineReducers`
- Custom header, footer HTML.  Remove generic site header.
  - Maybe there can be a generic `global` tag where that HTML block is applied to every page, always.

# Possible Improvements
- Implement async stuff w/ redux-thunk
- Ability to deeplink directly to a section or article -- Routes? Query string variables?

# Challenges Ahead
- How do we handle images?
- Can we handle relative file paths in the HTML?  Probably not.

# Known Issues
- TBD

# Releases

## vNext
First release.

### Features
- Articles load into the page asynchronously.
- Articles can be expanded to read the whole thing.
- Page title renders.
