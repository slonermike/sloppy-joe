/**
 * Article metadata as it comes down raw from the JSON.
 */
export interface ArticleMetadata {
    file: string;
    keyName: string;
    tags: string[];
    title: string;
    date: Date;
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
    sections: Record<string, SectionMetadata>;
    entries: Record<string, ArticleMetadata>;
    divs: string[];
}

export interface ArticleState {
    id: string;
    title: string;
    file: string;
    content?: string;
    expanded: boolean;
}

export interface SectionState {
    id: string;
    title: string;
    articles: string[];

    // Subsets of ordered article IDs, indexed by tag.
    tags: Record<string, string[]>;
}

export interface StoreState {
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

    siteDivs: Record<string, string | null>;
}