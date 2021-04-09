import { AxiosResponse } from 'axios';

import Http from '../../../services/Http';
import { BookPaginated } from '../models/BookPaginated';

export default class BooksListHttp {
    static getBooks(page: number = 1): Promise<AxiosResponse<BookPaginated>> {
        return Http.get<BookPaginated>(`books?page=${page}&amount=${12}&category=biographies`);
    }
}
