import axios, { AxiosResponse } from 'axios';

import { API } from '../environment/api';
import header from './header';

const api = axios.create({
    baseURL: API,
});

export default class Http {
    static post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
        return api.post<T>(url, data)
    }

    static get<T>(url: string): Promise<AxiosResponse<T>> {
        return api.get(url, header());
    }
}
