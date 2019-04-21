import SiteHeader, { SiteHeaderActions, SiteHeaderData } from '../components/SiteHeader';
import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchDiv, SiteAction } from 'src/actions';

export function mapStateToProps( { siteTitle, siteDivs, siteCss }: StoreState): SiteHeaderData {
    return {
        siteTitle,
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
