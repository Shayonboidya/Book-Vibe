"use client"
import { BooksContext } from '@/context/BooksContext';
import React, { useContext, useState } from 'react';
import { IBook } from '../Type';
import WishListBooksComponet from '../component/listed-books/WishListBooksComponet';
import ReadBooksComponent from '../component/listed-books/ReadBooksComponent';

const ListedBooksPage = () => {
    const { readBooks, wishList } = useContext(BooksContext) as { readBooks: IBook[], wishList: IBook[] };

    const [sortBy, setSortBy] = useState<"ratting" | "year" | "pages">("ratting");
    // console.log("Sort by", sortBy);

    const sortBooks = (books: IBook[]) => {
        const sortedBooks = [...books];

        if (sortBy == "ratting") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        }
        else if (sortBy == "year") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        else if (sortBy == "pages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }
        return sortedBooks;
    }

    const sortedReadBooks = sortBooks(readBooks);
    const sortedWishListBooks = sortBooks(wishList);

    // console.log(sortedReadBooks,"sort read books");
    // console.log(sortedWishListBooks,"sort Wishlist books");
    return (
        <div className='container mx-auto'>
            <div className='bg-slate-100 rounded-2xl my-10  font-bold text-4xl text-center p-10'>Books</div>

            <div className='text-center my-4'>
                <select
                    defaultValue="Pick a text editor"
                    className="select select-primary"
                    onChange={(e) => setSortBy(e.target.value as 'ratting' | "year" | "pages")}

                >
                    <option disabled={true}>Sort By</option>
                    <option value={"ratting"}>Ratting</option>
                    <option value={"pages"}>Number of Pages</option>
                    <option value={"year"}>Publisher Year</option>
                </select>
            </div>


            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Reads Books (${sortedReadBooks.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedReadBooks.length > 0 ?
                            sortedReadBooks.map(book => <ReadBooksComponent key={book.bookId} book={book}></ReadBooksComponent>)
                            : <p className='text-center text-slate-400'>Not Books found</p>
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${sortedWishListBooks.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedWishListBooks.length > 0 ?
                            sortedWishListBooks.map(book => <WishListBooksComponet key={book.bookId} book={book}></WishListBooksComponet>) : <p className='text-center text-slate-400'>Not Books found</p>
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooksPage;