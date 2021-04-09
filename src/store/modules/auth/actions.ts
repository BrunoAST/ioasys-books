import { ActionsType } from '../models/actionsType';

export function addToken(data: any) {
    return {
        type: ActionsType.ADD_TOKEN,
        data
    }
}

export function removeToken() {
    return {
        type: ActionsType.REMOVE_TOKEN,
    }
}

