import TagList, { TagListValueProps, TagListDispatchProps } from '../components/TagList';
import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SiteAction, focusTag } from 'src/actions';

export function mapStateToProps(state: StoreState): TagListValueProps {
    return {
        tags: Object.keys(state.tags)
    };
}

export function mapDispatchToProps(dispatch: Dispatch<SiteAction>): TagListDispatchProps {
    return {
        toggleTag: (id: string) => dispatch(focusTag(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
