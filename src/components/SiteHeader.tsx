import * as React from 'react';

import './SiteHeader.css';

export interface SiteHeaderProps {
    siteTitle: string;
}

function SiteHeader({ siteTitle }: SiteHeaderProps) {
    return (
        <div className="header">
            <div className="site-title">{ siteTitle }</div>
        </div>
    );
}

export default SiteHeader;
