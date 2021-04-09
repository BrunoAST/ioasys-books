declare type Gender = 'M' | 'F';

export default class User {
    constructor(
        public id: string,
        public name: string,
        public birthdata: Date,
        public gender: Gender,
    ) { }
}
