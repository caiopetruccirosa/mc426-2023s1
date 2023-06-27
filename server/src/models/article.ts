export default class Article {
    id?: string;
    creatorUsername: string;
    timestamp?: Date;
    title: string;
    content: string;

    constructor(
        id: string,
        creatorUsername: string,
        timestamp: Date = new Date(Date.now() - 3 * 60 * 60 * 1000),
        relatedArticleId: string,
        title: string,
        content: string,
    ) {
        this.id = id;
        this.creatorUsername = creatorUsername;
        this.timestamp = timestamp;
        this.title = title;
        this.content = content;
    }
}