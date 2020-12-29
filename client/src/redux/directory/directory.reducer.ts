import { sections } from '../../data/directory.data';

const INITIAL_STATE = {
    sections: sections
}

const directoryReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;