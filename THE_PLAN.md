# Planned Improvements
- Dynamically load CSS as a theme (perhaps specified in lunchlady).
  - https://stackoverflow.com/questions/28386125/dynamically-load-a-stylesheet-with-react
- Automatically page in articles as you scroll. (infinite scrolling)
- Break out reducers via `combineReducers`
- Custom header, footer HTML.  Remove generic site header.
  - Maybe there can be a generic `global` tag where that HTML block is applied to every page, always.
- Mark out space for unloaded article so visibility of all items can be calculated before anything loads.
- Linting
- Ability to have multiple tags toggled on.
- Indicate which tags are toggled.

# Possible Improvements
- Implement async stuff w/ redux-thunk

# Challenges Ahead
- How do we handle images?
- Can we handle relative file paths in the HTML?  Probably not.
- Can we work the `back` button?  Maybe query string fixes this?
- How does this scale as the blog grows?  How big does content.json get?  What's "critical mass" there?
  - Could break the file into smaller pieces.  At that point, it may just be outgrown.

# Known Issues
- In the render for TagList, the 'All' filter uses 'all' as its key.  There is a risk of key collision here.

# Releases

## v0.2.0
Splitting the site into multiple sections.

### Features
- Site now is split into multiple sections (blogs) which each have their own content.
- Choosing a section filters to the content in that section.
- Site title will reflect the selected section.
- Sections and articles can be focused with routes.

## v0.1.0
First release.

### Features
- Articles load into the page asynchronously.
- Articles can be expanded to read the whole thing.
- Page title renders.
- Filter content by tag.
- Display the number of appearances of a tag.
- Order the displayed tags by appearance count.
