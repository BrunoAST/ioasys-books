import { AxiosResponse } from 'axios';
import Http from '../../../services/Http';
import User from '../../../shared/models/User';
import LoginModel from '../models/LoginModel';

export default class LoginHttp {
    static signIn(data: LoginModel): Promise<AxiosResponse<User>> {
        return Http.post<User>(`auth/sign-in`, data);
    }
}
