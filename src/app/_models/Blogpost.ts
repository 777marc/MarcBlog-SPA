export class Blogpost {
    constructor(
        public id: number,
        public active: boolean,
        public author: string,
        public body: string,
        public category: string,
        public dateCreated: Date,
        public description: string,
        public title: string,
        public likes: number
    ) {}
}
