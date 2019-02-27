import { SiteAction } from '../actions';
import { StoreState } from '../types';
import { ADD_ARTICLE } from '../constants';

export function enthusiasm(state: StoreState, action: SiteAction): StoreState {
    switch (action.type) {
        case ADD_ARTICLE: {
            return {
                ...state
            };
        }
        default: return state;
    }
}