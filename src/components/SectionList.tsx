import * as React from 'react';
import { Link } from 'react-router-dom';

export interface SectionProps {
    name: string,
    keyName: string,
    isCurrentSection: boolean
};

export interface SectionListValues {
    sections: SectionProps[]
}

export interface SectionListDispatch {
}

export type SectionListProps = SectionListValues & SectionListDispatch;

function getClass(props: SectionProps) {
    return `section-link ${(props.isCurrentSection ? 'selected' : 'unselected')}`
}

function SectionList({ sections }: SectionListProps) {
    return (
        <div className="section-list">
            {
                sections.map((section: SectionProps) => {
                    return  <div className={getClass(section)}>
                                <Link key={section.keyName} to={`/section/${section.keyName}`}>{section.name}</Link>
                            </div>
                })
            }
        </div>
    );
}

export default SectionList;
