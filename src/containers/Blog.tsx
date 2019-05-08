import Blog, { BlogValueProps, BlogDispatchProps } from '../components/Blog';

import { StoreState, SectionState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SiteAction } from 'src/actions';

function filterArticles(state: StoreState, section: SectionState): string[] {
    if (!section) {
        return [];
    } else if (!state.focusedTag || !section.tags[state.focusedTag]) {
        return section.articles;
    } else {
        return section.tags[state.focusedTag];
    }
}

export function mapStateToProps(state: StoreState): BlogValueProps {
    const sectionId = state.selectedSection || state.sectionOrder[0];
    const articleId = state.focusedArticle;

    if (articleId) {
        const article = state.articles[articleId];
        return {
            title: article.title,
            articles: [articleId]
        }
    } else if (sectionId) {
        const section = state.sections[sectionId];
        return {
            title: section.title,
            articles: filterArticles(state, section)
        };
    } else {
        return {
            title: '',
            articles: []
        }
    }
}

export function mapDispatchToProps(_dispatch: Dispatch<SiteAction>): BlogDispatchProps {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
