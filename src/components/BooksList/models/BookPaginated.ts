import { BookModel } from './BookModel';

export class BookPaginated {
    constructor(
        public page: number,
        public totalItems: number,
        public totalPages: number,
        public data: BookModel[]
    ) { }
}
