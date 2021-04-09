import axios, { AxiosError, AxiosResponse } from 'axios';

import storeState from '../store/store-state';
import { API } from '../environment/api';
import history from './history';
import ROUTES from '../routes/RouterName';
import { store } from '../store';
import { addToken, removeToken } from '../store/modules/auth/actions';
import { addUser, removeUser } from '../store/modules/user/actions';

export function header() {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${storeState().auth.authorization}`
        }
    };
}

export const api = axios.create({
    baseURL: API,
});

api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },

    async function (error: AxiosError): Promise<unknown> {
        const refresh = storeState().auth.refreshToken;

        if (error.request.status === 401 && refresh) {
            const response = await refreshToken(error);
            return response;
        }

        store.dispatch(removeToken());
        store.dispatch(removeUser());
        history.push(ROUTES.LOGIN);
        return Promise.reject(error);
    }
);

async function refreshToken(error: AxiosError) {
    return new Promise((resolve, reject) => {
        try {
            const header = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${storeState().auth.authorization}`
            };

            const parameters = {
                method: 'POST',
                headers: header,
            };

            const body = { refreshToken: storeState().auth.refreshToken };

            api
                .post('/auth/refresh-token', body, { params: parameters, headers: header })
                .then(async (res) => {
                    store.dispatch(addToken(res.headers))
                    store.dispatch(addUser(res.data))
                    return resolve(res);
                })
                .catch((err) => {
                    return reject(err);
                });

        } catch (err) {
            return reject(err);
        }
    });
};
