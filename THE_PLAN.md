# Planned Improvements
- Dynamically load CSS as a theme (perhaps specified in lunchlady).
- Automatically page in articles as you scroll. (infinite scrolling)
- Display featured tags as global navigation.
  -  Tag used in global navigation can point to a single article and present as 'page', rather than a set of articles.
- Break out reducers via `combineReducers`
- Custom header, footer HTML.  Remove generic site header.
  - Maybe there can be a generic `global` tag where that HTML block is applied to every page, always.
- Mark out space for unloaded article so visibility of all items can be calculated before anything loads.
- Linting
- Ability to have multiple tags toggled on.

# Possible Improvements
- Implement async stuff w/ redux-thunk
- Ability to deeplink directly to a section or article -- Routes? Query string variables?

# Challenges Ahead
- How do we handle images?
- Can we handle relative file paths in the HTML?  Probably not.
- Can we work the `back` button?  Maybe query string fixes this?
- How does this scale as the blog grows?  How big does content.json get?  What's "critical mass" there?
  - Could break the file into smaller pieces.  At that point, it may just be outgrown.

# Known Issues
- In the render for TagList, the 'All' filter uses 'all' as its key.  There is a risk of key collision here.

# Releases

## vNext
First release.

### Features
- Articles load into the page asynchronously.
- Articles can be expanded to read the whole thing.
- Page title renders.
- Filter content by tag.
- Display the number of appearances of a tag.
- Order the displayed tags by appearance count.
