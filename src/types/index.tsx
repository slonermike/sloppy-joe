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
 * Blog metadata as it comes down from the raw JSON.
 */
export interface SectionMetadata {
    entries: string[];
}

export interface SiteMetadata {
    sections: Record<string, SectionMetadata>;
    entries: Record<string, ArticleMetadata>;
}

export interface ArticleState {
    id: string;
    title: string;
    file: string;
    content?: string;
    expanded: boolean;
}

export interface StoreState {
    // Raw article data indexed by ID.
    articles: Record<string, ArticleState>;

    // List of article IDs in order as they should appear.
    articleOrder: string[];

    // Subsets of ordered article IDs, indexed by tag.
    tags: Record<string, string[]>;

    // Name of the site.
    siteTitle: string;

    // Currently-selected tag (null to show all)
    focusedTag: string | null;
}