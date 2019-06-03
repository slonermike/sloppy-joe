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
    sectionOrder: string[];
    entries: Record<string, ArticleMetadata>;
    divs: Record<string, string[]>;
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

// Indexed by filename, with contents of the div as the value.
export type SiteDiv = Record<string, string | null>;

export interface StoreState {
    /** True if the initial response has come back. */
    hasPopulated: boolean;

    // A section containing articles.
    sections: Record<string, SectionState>;

    // Order in which the sections appear on the site (by id).
    sectionOrder: string[];

    // Raw article data indexed by ID.
    articles: Record<string, ArticleState>;

    // List of article IDs in order as they should appear.
    articleOrder: string[];

    // Name of the site.
    siteTitle: string;

    // Currently-selected tag (null to show all)
    focusedTag: string | null;

    // Currently-selected section (null to show default section)
    selectedSection: string | null;

    // Currently-selected article (null to show section)
    focusedArticle: string | null;

    // Divs to show at the top level, indexed by category (such as `header`)
    siteDivs: Record<string, SiteDiv>;

    // CSS files to apply at the top level.
    siteCss: string[];
}