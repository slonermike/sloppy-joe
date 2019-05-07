import Article, { ArticleValues, ArticleDispatch } from '../components/Article';

import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { expandArticle, SiteAction, fetchArticle } from 'src/actions';

export function mapStateToProps(state: StoreState, ownProps: {id: string}): ArticleValues {
    const articleState = state.articles[ownProps.id];
    const sectionId = state.selectedSection || state.defaultSection;

    if ( articleState ) {
        const { file, id, title, content, expanded, date } = articleState;
        return {
            id,
            sectionId,
            title,
            date,
            content,
            expanded,
            key: id,
            url: file
        };
    } else {
        return {
            url: null,
            id: ownProps.id,
            key: ownProps.id,
            sectionId,
            title: 'Error',
            date: new Date(),
            content: `Unable to load content: ${ownProps.id}`,
            expanded: false
        };
    }
}

export function mapDispatchToProps(dispatch: Dispatch<SiteAction>): ArticleDispatch {
    return {
        expandArticle: (articleId: string) => dispatch(expandArticle(articleId)),
        loadContent: (articleId: string, url: string) => fetchArticle(dispatch, articleId, url)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
