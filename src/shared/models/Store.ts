export class UserStore {
    constructor(
        public name: string,
        public id: string
    ) { }   
}

export class AuthStore {
    constructor(
        public authorization: string,
        public contentLength: string,
        public contentType: string,
        public refreshToken: string,
        public signed: boolean
    ) { }
}

export class Store {
    constructor(
        public user: UserStore,
        public auth: AuthStore
    ) { }
}
