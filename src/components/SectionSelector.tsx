import * as React from 'react';

export interface SectionSelectorProps {
    name: string;
    selectSection: () => void;
}

function SectionSelector({ name, selectSection }: SectionSelectorProps) {
    return (
        <button className="section-selector" onClick={selectSection}>{ name }</button>
    );
}

export default SectionSelector;
