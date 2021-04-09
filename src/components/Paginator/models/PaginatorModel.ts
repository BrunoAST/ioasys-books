export class PaginatorModel {
    constructor(
        public next: (page: number) => void,
        public previous: (page: number) => void,
        public page: number,
        public totalItems: number,
        public totalPages: number,
    ) { }
}
