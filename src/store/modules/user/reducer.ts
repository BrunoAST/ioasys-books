import produce from 'immer';
import User from '../../../shared/models/User';
import { ActionsType } from '../models/actionsType';

const INITIAL_STATE = {
    name: '',
    id: ''
};

export default function user(state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case ActionsType.ADD_USER:
            return produce(state, draft => {
                draft.id = action.data.id;
                draft.name = action.data.name;
            });

        case ActionsType.REMOVE_USER:
            return produce(state, draft => {
                draft.id = '';
                draft.name = '';
            });
            
        default:
            return state;
    }
}
