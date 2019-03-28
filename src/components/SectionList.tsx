import * as React from 'react';

import SectionSelector from './SectionSelector';

export interface SectionProps {
    name: string,
    keyName: string
};

export interface SectionListValues {
    sections: SectionProps[]
}

export interface SectionListDispatch {
    selectSection: (id: string) => void;
}

export type SectionListProps = SectionListValues & SectionListDispatch;

function SectionList({ sections, selectSection }: SectionListProps) {
    return (
        <div className="section-list">
            {
                sections.map((section: SectionProps) => {
                    const selectThisSection = () => selectSection(section.keyName);
                    return <SectionSelector key={section.keyName} name={section.name} selectSection={selectThisSection} />
                })
            }
        </div>
    );
}

export default SectionList;
