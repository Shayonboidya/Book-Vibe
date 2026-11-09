"use client"

import { IBook } from '@/app/Type';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({ book }: { book: IBook }) => {
    const { readBooks, setReadBooks } = useContext(BooksContext) as {
        readBooks: IBook[];
        setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    };

    const haveAlrady = readBooks.find(b => b.bookId === book.bookId);

    const handelClickToRead = () => {
        // console.log("Read books button", book);
        if (!haveAlrady) {
            setReadBooks([...readBooks, book]);
        }
        toast.success(`You have Read ${book.bookName}`);

    }
    return <button className="btn btn-soft btn-info" onClick={() => handelClickToRead()}>Read</button>;

};

export default ReadButton;