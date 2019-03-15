/**
 * Article metadata as it comes down raw from the JSON.
 */
export interface ArticleMetadata {
    file: string;
    tags: string[];
    title: string;
}

/**
 * Blog metadata as it comes down from the raw JSON.
 */
export interface BlogMetadata {
    entries: ArticleMetadata[];
}

export interface ArticleState {
    id: string;
    title: string;
    file: string;
    content?: string;
    expanded: boolean;
}

export interface StoreState {
    articles: Record<string, ArticleState>;
    articleOrder: string[];
    siteTitle: string;
}