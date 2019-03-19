import * as React from 'react';

import './SiteHeader.scss';

export interface TagSelectorProps {
    tag: string;
    count?: number;
    toggleTag: () => void;
}

function TagSelector({ tag, toggleTag, count }: TagSelectorProps) {
    const countString = count ? (' (' + count + ')') : '';
    return (
        <button className="tag-selector" onClick={toggleTag}>{ `${tag}${countString}` }</button>
    );
}

export default TagSelector;
