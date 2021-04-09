import { AxiosResponse } from 'axios';

import { header, api } from './header';

export default class Http {
    static post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
        return api.post<T>(url, data);
    }

    static get<T>(url: string): Promise<AxiosResponse<T>> {
        return api.get(url, header());
    }
}
