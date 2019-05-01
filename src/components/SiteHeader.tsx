import * as React from 'react';

import './SiteHeader.scss';

export interface SiteHeaderData {
    siteTitle: string;
    siteDivs: Record<string, string | null>;
    siteCss: string[];
}

export interface SiteHeaderActions {
    loadCustomHTML: (url: string) => void;
}

export type SiteHeaderProps = SiteHeaderData & SiteHeaderActions;

class SiteHeader extends React.Component<SiteHeaderProps> {
    public componentDidUpdate() {
        Object.keys(this.props.siteDivs).forEach((file) => {
            if (!this.props.siteDivs[file]) {
                this.props.loadCustomHTML(file);
            }
        });
    }

    public render() {
        const allCustomHTML = Object.keys(this.props.siteDivs).map((key) => {
            return this.props.siteDivs[key];
        }).join('\n\n');

        return (
            <div className="header">
                { this.props.siteCss.map(url => <link key={ url } rel="stylesheet" type="text/css" href={ url }></link>) }
                { allCustomHTML && <div className='custom-html' dangerouslySetInnerHTML={{ __html: allCustomHTML }}></div> }
                <div className="site-title">{ this.props.siteTitle }</div>
            </div>
        );
    }
}

export default SiteHeader;
