import { BookModel } from '../../BooksList/models/BookModel';

export class ModalBookModel {
    constructor(
        public show: boolean,
        public book: BookModel,
        public onClose: () => void
    ) { }
}
