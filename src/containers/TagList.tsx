import TagList, { TagListValueProps, TagListDispatchProps, TagProps } from '../components/TagList';
import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SiteAction, focusTag } from 'src/actions';

export function mapStateToProps(state: StoreState): TagListValueProps {
    const visibleSection = state.sections[state.selectedSection || state.defaultSection];
    const tags = visibleSection ? Object.keys(visibleSection.tags).map((tagName) => {
        return {
            name: tagName,
            count: visibleSection.tags[tagName].length
        } as TagProps
    }).sort((a, b) => {
            return b.count - a.count;
        }
    ) : [];

    return {
        tags
    };
}

export function mapDispatchToProps(dispatch: Dispatch<SiteAction>): TagListDispatchProps {
    return {
        toggleTag: (id: string) => dispatch(focusTag(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
