import storeState from '../store/store-state';

export default function header() {
    return {
        headers: {
            Authorization: `Bearer ${storeState().auth.authorization}`
        }
    };
}
