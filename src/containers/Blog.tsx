import Blog, { BlogProps } from '../components/Blog';

import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps(state: StoreState): BlogProps {
    return {
        articles: [
            {
                title: `${state.siteTitle}: Thing one`
            },
            {
                title: `${state.siteTitle}: Thing two`
            }
        ]
    };
}

export function mapDispatchToProps(_dispatch: Dispatch<never>) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
