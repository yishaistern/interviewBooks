export class Book {
    id: string;
    volumeInfo: {
        title: string,
        authors: string[],
        publisher: string;
        publishedDate: string;
        pageCount: number;
        categories: string[];
        language: string;
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        },
        webReaderLink: string;
    };
}
