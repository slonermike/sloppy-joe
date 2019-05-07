import * as React from 'react';
import { Link } from 'react-router-dom';

export interface SectionProps {
    name: string,
    keyName: string
};

export interface SectionListValues {
    sections: SectionProps[]
}

export interface SectionListDispatch {
}

export type SectionListProps = SectionListValues & SectionListDispatch;

function SectionList({ sections }: SectionListProps) {
    return (
        <div className="section-list">
            {
                sections.map((section: SectionProps) => {
                    return <Link key={section.keyName} to={`/section/${section.keyName}`}>{section.name}</Link>
                })
            }
        </div>
    );
}

export default SectionList;
