import { ActionsType } from '../models/actionsType';

export function addUser(data: { name: string, id: string }) {
    return {
        type: ActionsType.ADD_USER,
        data
    }
}

export function removeUser() {
    return {
        type: ActionsType.REMOVE_USER,
    }
}

