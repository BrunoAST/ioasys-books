import { BookModel } from './BookModel';

export class BookPaginated {
    constructor(
        public page: number,
        public amount: number,
        public data: BookModel[]
    ) { }
}
