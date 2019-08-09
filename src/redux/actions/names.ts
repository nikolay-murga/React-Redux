import { ACTION_TYPES, StoreTypes } from '../store';

export function onAddName(name: string): StoreTypes {
    return {
        type: ACTION_TYPES.ADD_NEW_NAME,
        name
    };
}

export function onDeleteName(name: string[]): StoreTypes {
    return {
        type: ACTION_TYPES.DELETE_NAME,
        name
    };
}

export function onFilterName(filter: string): StoreTypes {
    return {
        type: ACTION_TYPES.FILTER_NAME,
        filter
    };
}