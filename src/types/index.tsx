/**
 * Article metadata as it comes down raw from the JSON.
 */
export interface ArticleMetadata {
    file: string;
    keyName: string;
    tags: string[];
    title: string;
    date: string;
}

/**
 * Section metadata as it comes down from the raw JSON.
 */
export interface SectionMetadata {
    name: string;
    keyName: string;
    entries: string[];
}

/**
 * Site metadata as it comes down from the raw JSON.
 */
export interface SiteMetadata {
    siteTitle: string;
    sections: Record<string, SectionMetadata>;
    entries: Record<string, ArticleMetadata>;
    divs: string[];
    css: string[];
}

export interface ArticleState {
    id: string;
    title: string;
    file: string;
    content?: string;
    expanded: boolean;
    date: Date;
}

export interface SectionState {
    id: string;
    title: string;
    articles: string[];

    // Subsets of ordered article IDs, indexed by tag.
    tags: Record<string, string[]>;
}

export interface StoreState {
    /** True if the initial response has come back. */
    hasPopulated: boolean;

    // Raw article data indexed by ID.
    articles: Record<string, ArticleState>;

    // A section containing articles.
    sections: Record<string, SectionState>;

    // List of article IDs in order as they should appear.
    articleOrder: string[];

    // Name of the site.
    siteTitle: string;

    // Currently-selected tag (null to show all)
    focusedTag: string | null;

    // Currently-selected section (null to show default section)
    selectedSection: string | null;

    // Section to show when none is selected.
    defaultSection: string;

    // Divs to show at the top level, indexed by url, with html as the data.
    siteDivs: Record<string, string | null>;

    // CSS files to apply at the top level.
    siteCss: string[];
}