export default class Post {
    id?: string;
    posterUsername: string;
    timestamp?: Date;
    relatedArticleId: number;
    title: string;
    content: string;

    constructor(
        id: string,
        posterUsername: string,
        timestamp: Date = new Date(Date.now() - 3 * 60 * 60 * 1000),
        relatedArticleId: number,
        title: string,
        content: string,
    ) {
        this.id = id;
        this.posterUsername = posterUsername;
        this.timestamp = timestamp;
        this.relatedArticleId = relatedArticleId;
        this.title = title;
        this.content = content;
    }
}