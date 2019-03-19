import * as React from 'react';

import TagSelector from './TagSelector';

export interface TagProps {
    name: string,
    count: number
};

export interface TagListValueProps {
    tags: TagProps[];
}

export interface TagListDispatchProps {
    toggleTag: (id: string | null) => void;
}

export type TagListProps = TagListValueProps & TagListDispatchProps;

function TagList({ tags, toggleTag }: TagListProps) {
    return (
        <div className="tag-list">
            <TagSelector key={'all'} tag={'All'} toggleTag={() => toggleTag(null)} />
            {
                tags.map((tag: TagProps) => {

                    const toggleThisTag = () => toggleTag(tag.name);
                    return <TagSelector key={tag.name} tag={tag.name} count={tag.count} toggleTag={toggleThisTag} />
                })
            }
        </div>
    );
}

export default TagList;
