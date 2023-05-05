export interface Hero {
    id: number;
    name: string;
    class: string;
}

export class Hero2 {

    constructor(
        public id: number,
        public name: string,
        public power: string,
    ) { }

}

export class user2 {

    constructor(
        public username: string,
        public email: string,
        public password: string,
    ) { }

}