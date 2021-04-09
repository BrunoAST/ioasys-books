import produce from 'immer';
import { ActionsType } from '../models/actionsType';

const INITIAL_STATE = {
    authorization: null,
    'content-length': null,
    'content-type': null,
    'refresh-token': null,
    signed: false
};

export default function user(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case ActionsType.ADD_TOKEN:
            return produce(state, draft => {
                draft.authorization = action.data['authorization'];
                draft['content-length'] = action.data['content-length'];
                draft['content-type'] = action.data['content-type'];
                draft['refresh-token'] = action.data['refresh-token'];
                draft.signed = true;
            });

        case ActionsType.REMOVE_TOKEN:
            return produce(state, draft => {
                draft.authorization = null;
                draft['content-length'] = null;
                draft['content-type'] = null
                draft['refresh-token'] = null;
                draft.signed = false;
            });
            
        default:
            return state;
    }
}
