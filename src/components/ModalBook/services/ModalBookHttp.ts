import { AxiosResponse } from 'axios';

import Http from '../../../services/Http';
import { BookModel } from '../../BooksList/models/BookModel';

export default class ModalBookHttp {
    static getBookById(id: string): Promise<AxiosResponse<BookModel>> {
        return Http.get<BookModel>(`books/${id}`);
    }
}
