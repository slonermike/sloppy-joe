import * as React from 'react';

export interface SiteHeaderData {
    siteTitle: string;
    sectionTitle: string | null;
    articleTitle: string | null;
    headerDivs: Record<string, string | null>;
    siteCss: string[];
}

export interface SiteHeaderActions {
    loadCustomHTML: (url: string) => void;
}

export type SiteHeaderProps = SiteHeaderData & SiteHeaderActions;

class SiteHeader extends React.Component<SiteHeaderProps> {
    public componentDidUpdate() {
        Object.keys(this.props.headerDivs).forEach((file) => {
            if (!this.props.headerDivs[file]) {
                this.props.loadCustomHTML(file);
            }
        });

        if (this.props.articleTitle) {
            document.title = `${this.props.siteTitle} - ${this.props.articleTitle}`;
        } else if (this.props.sectionTitle) {
            document.title = `${this.props.siteTitle} - ${this.props.sectionTitle}`;
        } else {
            document.title = this.props.siteTitle;
        }
    }

    public render() {
        const allCustomHTML = Object.keys(this.props.headerDivs).map((key) => {
            return this.props.headerDivs[key];
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
