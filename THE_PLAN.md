# Planned Improvements
- Automatically page in articles as you scroll. (infinite scrolling)
- Break out reducers via `combineReducers`
- Mark out space for unloaded article so visibility of all items can be calculated before anything loads.
- Linting
- Flesh out tag functionality.
- Directly-linked articles should start out expanded.
- Scroll to article top when linking directly to it and scrolled below it.
- Use article title in document title when directly linked.
- Set up themes folder in which a user can select an entire folder full of html and css to add, rather than piecemeal.
  - Include a default theme, `/public/themes/default` and exclude other theme folders from git.

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
- Why does it request the header file multiple times?

# Releases

## v0.3.0
- Remove dompurify & sanitize, as this is all read-only, static and therefore sanitizing is not necessary.  Prevents YouTube videos, custom scripts, etc.
- Article title displays in the document title.

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
