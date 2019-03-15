import Article, { ArticleProps } from '../components/Article';

import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { expandArticle, SiteAction } from 'src/actions';

export function mapStateToProps(state: StoreState, ownProps: {id: string}): Partial<ArticleProps> {
    const articleState = state.articles[ownProps.id];

    if ( articleState ) {
        const { title, content, expanded } = articleState;
        return {
            title, content, expanded
        };
    } else {
        return {
            title: 'Error',
            content: `Unable to load content: ${ownProps.id}`,
            expanded: false
        };
    }
}

export function mapDispatchToProps(dispatch: Dispatch<SiteAction>): Partial<ArticleProps> {
    return {
        expandArticle: (articleId: string) => dispatch(expandArticle(articleId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
