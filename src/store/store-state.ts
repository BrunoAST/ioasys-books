import { store } from '.';
import { Store } from '../shared/models/Store';

export default function storeState() {
    return (store.getState() as Store)
} 
