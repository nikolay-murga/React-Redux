export const ACTION_TYPES = {
    ADD_NEW_NAME: 'ADD_NEW_NAME',
    DELETE_NAME: 'DELETE_NAME',
    FILTER_NAME: 'FILTER_NAME'
};

interface addNewName {
    type: typeof ACTION_TYPES.ADD_NEW_NAME;
    name: string;
}

interface deleteName {
    type: typeof ACTION_TYPES.DELETE_NAME;
    name: string[];
}


interface filterName {
    type: typeof ACTION_TYPES.FILTER_NAME;
    filter: string;
}

export type StoreTypes = addNewName
    | deleteName
    | filterName;