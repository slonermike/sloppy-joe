import * as React from 'react';

import './Hello.css';

export interface Props {
    name: string;
    enthusiasm?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({ name, enthusiasm = 1, onIncrement, onDecrement }: Props) {
    enthusiasm = Math.max(enthusiasm, 1);
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamation(enthusiasm)}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

/**
 * Get the specified number of exclamation marks.
 */
function getExclamation(count: number) {
    return Array(count+1).join('!');
}

export default Hello;