export default class Post {
    id: string;
    posterUsername: string;
    date?: Date;
    title: string;
    content: string;

    constructor(
        id: string,
        posterUsername: string,
        date: Date,
        title: string,
        content: string,
    ) {
        this.id = id;
        this.posterUsername = posterUsername;
        this.date = date;
        this.title = title;
        this.content = content;
    }
}