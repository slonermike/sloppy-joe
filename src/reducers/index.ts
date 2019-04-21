import { SiteAction } from '../actions';
import { StoreState, ArticleMetadata, ArticleState, SectionMetadata } from '../types';
import { EXPAND_ARTICLE, UPDATE_ARTICLE_CONTENT, FOCUS_TAG, UPDATE_SITE, SELECT_SECTION, APPLY_SITE_LEVEL_HTML, APPLY_SITE_LEVEL_CSS } from '../constants';

const ARTICLE_FOLDER = './content/';

function getArticle(state: StoreState, id: string): ArticleState | null {
    return state.articles[id] || null;
}

function addArticle(state: StoreState, article: ArticleMetadata) {
    const id = article.keyName;
    state.articles[id] = {
        id,
        title: article.title,
        file: `${ARTICLE_FOLDER}${article.file}`,
        expanded: false
    };
    state.articleOrder.push(id);
}

function addSection(state: StoreState, section: SectionMetadata, rawArticles: Record<string, ArticleMetadata>) {
    const sectionTags = section.entries.reduce<Record<string, string[]>>((acc, entryId) => {
        const entry = rawArticles[entryId];
        entry.tags.forEach((tag) => {
            const tagData = acc[tag] = acc[tag] || [] as string[];
            tagData.push(entryId);
        });
        return acc;
    }, {});

    state.sections[section.keyName] = {
        id: section.keyName,
        title: section.name,
        articles: [ ...section.entries ],
        tags: sectionTags
    }
}

function getArticleByIndex(state: StoreState, index: number) {
    return state.articles[index];
}

export function siteReducer(state: StoreState, action: SiteAction): StoreState {
    switch (action.type) {
        case UPDATE_SITE: {
            const data = action.metadata;
            const newState = {
                ...state
            };

            Object.keys(data.entries).forEach((key) => {
                const entry = data.entries[key];
                addArticle(newState, entry);
            });

            Object.keys(data.sections).forEach((key) => {
                const section = data.sections[key];
                addSection(newState, section, data.entries);

                // TODO: actually have some meaningful order to the default section.
                newState.defaultSection = newState.defaultSection || key;
            });

            newState.siteCss = data.css.map(url => `${ARTICLE_FOLDER}${url}`);

            newState.siteDivs = data.divs.reduce<Record<string, string | null>>((acc, url) => {
                acc[`${ARTICLE_FOLDER}${url}`] = null;
                return acc;
            }, {} as Record<string, string | null>);

            return newState;
        }
        case SELECT_SECTION: {
            if (action.id === state.selectedSection) {
                return state;
            } else if (!state.sections[action.id]) {
                console.log(`Error: No section of id \'${action.id}\' available.`);
                return state;
            }

            const newState = {
                ...state,
                selectedSection: action.id
            };

            return newState;
        }
        case EXPAND_ARTICLE: {
            const newState = {
                ...state
            };

            let article;
            if (action.articleId !== undefined) {
                article = getArticle(newState, action.articleId);
            } else if (action.articleIndex !== undefined) {
                article = getArticleByIndex(newState, action.articleIndex);
            }

            if (article) {
                article.expanded = true;
                return newState;
            } else {
                break;
            }
        }
        case UPDATE_ARTICLE_CONTENT: {
            const newState = {
                ...state
            };

            let article;
            if (action.articleId !== undefined) {
                article = getArticle(newState, action.articleId);
            }

            if (article) {
                article.content = action.content;
                return newState;
            } else {
                break;
            }
        }
        case APPLY_SITE_LEVEL_HTML: {
            const newState = {
                ...state,
                siteDivs: {...state.siteDivs}
            };

            newState.siteDivs[action.url] = action.html;

            return newState;
        }
        case APPLY_SITE_LEVEL_CSS: {
            return {
                ...state,
                siteCss: [...state.siteCss, action.url]
            }
        }
        case FOCUS_TAG: {
            return {
                ...state,
                focusedTag: action.tag
            }
        }
        default: break;
    }

    return state;
}