import SiteHeader, { SiteHeaderActions, SiteHeaderData } from '../components/SiteHeader';
import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchDiv, SiteAction } from 'src/actions';

export function mapStateToProps( state: StoreState): SiteHeaderData {
    const { siteTitle, siteDivs, siteCss } = state;
    const selectedSection = state.sections[state.selectedSection || state.defaultSection];
    const sectionTitle = selectedSection ? selectedSection.title : null;

    return {
        siteTitle,
        sectionTitle,
        siteDivs,
        siteCss
    };
}

export function mapDispatchToProps(dispatch: Dispatch<SiteAction>): SiteHeaderActions {
    return {
        loadCustomHTML: (url: string) => fetchDiv(dispatch, url)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader);
