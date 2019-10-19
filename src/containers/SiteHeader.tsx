import SiteHeader, { SiteHeaderActions, SiteHeaderData } from '../components/SiteHeader';
import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchDiv, SiteAction } from 'src/actions';

export function mapStateToProps( state: StoreState): SiteHeaderData {
    const { siteTitle, siteDivs, siteCss } = state;
    const selectedSection = state.sections[state.selectedSection || state.sectionOrder[0]];
    const articleTitle = state.focusedArticle ? state.articles[state.focusedArticle].title : null;
    const sectionTitle = selectedSection ? selectedSection.title : null;

    const headerData: SiteHeaderData = {
        siteTitle,
        sectionTitle,
        articleTitle,
        headerDivs: {...(siteDivs['headers'])} || {},
        siteCss
    };

    return headerData;
}

export function mapDispatchToProps(dispatch: Dispatch<SiteAction>): SiteHeaderActions {
    return {
        loadCustomHTML: (url: string) => fetchDiv(dispatch, url)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader);
