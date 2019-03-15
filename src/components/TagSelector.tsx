import * as React from 'react';

import './SiteHeader.scss';

export interface TagSelectorProps {
    tag: string;
    toggleTag: () => void;
}

function TagSelector({ tag, toggleTag }: TagSelectorProps) {
    return (
        <button className="tag-selector" onClick={toggleTag}>{ tag }</button>
    );
}

export default TagSelector;
