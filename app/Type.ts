export interface IBook {
    bookId: number
    bookName: string,
    author: string,
    image: string,
    totalPages: number,
    rating: number,
    category: string,
    tags: string[];
    review: string,
    publisher: string
    yearOfPublishing: number;
}