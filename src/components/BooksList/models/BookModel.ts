export class BookModel {
    constructor(
        public authors: string[],
        public title: string,
        public description: string,
        public pageCount: number,
        public category: string,
        public imageUrl: string,
        public language: string,
        public isbn10: string,
        public isbn13: string,
        public publisher: string,
        public published: number,
        public id: string
    ) { }
}
