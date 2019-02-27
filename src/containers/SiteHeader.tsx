import SiteHeader, { SiteHeaderProps } from '../components/SiteHeader';
import { StoreState } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps( { siteTitle }: StoreState): SiteHeaderProps {
    return {
        siteTitle
    };
}

export function mapDispatchToProps(_dispatch: Dispatch<never>) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteHeader);
