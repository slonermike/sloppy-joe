import Blog, { BlogValueProps, BlogDispatchProps } from '../components/Blog';

import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SiteAction } from 'src/actions';

export function mapStateToProps(state: StoreState): BlogValueProps {
    return {
        articles: state.focusedTag ? state.tags[state.focusedTag] : state.articleOrder
    };
}

export function mapDispatchToProps(_dispatch: Dispatch<SiteAction>): BlogDispatchProps {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
