import * as React from 'react';

import TagSelector from './TagSelector';

export interface TagListValueProps {
    tags: string[];
}

export interface TagListDispatchProps {
    toggleTag: (id: string | null) => void;
}

export type TagListProps = TagListValueProps & TagListDispatchProps;

function TagList({ tags, toggleTag }: TagListProps) {
    return (
        <div className="tag-list">
            {
                tags.map((tagName: string) => {

                    const toggleThisTag = () => toggleTag(tagName);
                    return <TagSelector key={tagName} tag={tagName} toggleTag={toggleThisTag} />
                })
            }
            <TagSelector key={'all'} tag={'All'} toggleTag={() => toggleTag(null)} />
        </div>
    );
}

export default TagList;
