import { ACTION_TYPES } from '../store';

const InitialState = {
    names: [],
    filter: ''
};

export default function (
    state = InitialState,
    action: any
) {
    switch (action.type) {
        case ACTION_TYPES.ADD_NEW_NAME:
            return {
                ...state,
                names: [...state.names, action.name]
            };
        case ACTION_TYPES.DELETE_NAME:
            return {
                ...state,
                names: action.name
            };
        case ACTION_TYPES.FILTER_NAME:
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state;
    }
}
