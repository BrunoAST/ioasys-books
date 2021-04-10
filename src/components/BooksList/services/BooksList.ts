import { AxiosResponse } from 'axios';

import Http from '../../../services/Http';
import { BookModel } from '../models/BookModel';
import { BookPaginated } from '../models/BookPaginated';

export default class BooksListHttp {
    static getBooks(page: number = 1, amount: number = 12): Promise<AxiosResponse<BookPaginated>> {
        return Http.get<BookPaginated>(`books?page=${page}&amount=${amount}`);
    }

    static getBookById(id: string): Promise<AxiosResponse<BookModel>> {
        return Http.get<BookModel>(`books/${id}`);
    }
}
