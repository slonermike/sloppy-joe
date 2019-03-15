import Blog, { BlogProps } from '../components/Blog';

import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { expandArticle, SiteAction } from 'src/actions';

export function mapStateToProps(state: StoreState): Partial<BlogProps> {
    return {
        articles: state.articleOrder
    };
}

export function mapDispatchToProps(dispatch: Dispatch<SiteAction>): Partial<BlogProps> {
    return {
        onExpand: (articleId: string) => dispatch(expandArticle(articleId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
