import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SiteAction, selectSection } from 'src/actions';
import SectionList, { SectionListValues, SectionListDispatch } from 'src/components/SectionList';

export function mapStateToProps(state: StoreState): SectionListValues {
    return {
        sections: state.sectionOrder.map((sectionName) => {
            const section = state.sections[sectionName];
            const selectedSection = state.selectedSection || state.sectionOrder[0];
            return {
                name: section.title,
                keyName: section.id,
                isCurrentSection: section.id === selectedSection
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
