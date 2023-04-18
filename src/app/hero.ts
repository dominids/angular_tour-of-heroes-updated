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