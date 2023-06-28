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
        timestamp: Date,
        text: string,
    ) {
        this.id = id;
        this.postId = postId;
        this.authorUsername = authorUsername;
        this.timestamp = timestamp;
        this.text = text;
    }
}