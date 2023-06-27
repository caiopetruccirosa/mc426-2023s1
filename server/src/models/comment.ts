export default class Comment {
    id?: string;
    postId: number;
    authorUsername: string;
    timestamp?: Date;
    text: string;

    constructor(
        id: string,
        postId: number,
        authorUsername: string,
        timestamp: Date = new Date(Date.now() - 3 * 60 * 60 * 1000),
        text: string,
    ) {
        this.id = id;
        this.postId = postId;
        this.authorUsername = authorUsername;
        this.timestamp = timestamp;
        this.text = text;
    }
}