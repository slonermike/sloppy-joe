import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SiteAction, selectSection } from 'src/actions';
import SectionList, { SectionListValues, SectionListDispatch } from 'src/components/SectionList';

export function mapStateToProps(state: StoreState): SectionListValues {
    return {
        sections: Object.keys(state.sections).map((sectionName) => {
            const section = state.sections[sectionName];
            return {
                name: section.title,
                keyName: section.id
            };
        })
    };
}

export function mapDispatchToProps(dispatch: Dispatch<SiteAction>): SectionListDispatch {
    return {
        selectSection: (id: string) => dispatch(selectSection(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionList);
