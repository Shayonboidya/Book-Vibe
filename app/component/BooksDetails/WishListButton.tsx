"use client"

import { IBook } from '@/app/Type';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({ book }: { book: IBook }) => {
    const { wishList, setWishList } = useContext(BooksContext) as {
        wishList: IBook[];
        setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
    };

    const haveAlrady = wishList.find(b => b.bookId === book.bookId);
    const handelClickToWishList = () => {
        if (!haveAlrady) {
            setWishList([...wishList, book]);
        }
        toast.success(`Add Wish List to ${book.bookName}`);
    }
    // console.log("wishList", wishList);

    return (
        <button className="btn btn-soft btn-accent" onClick={() => handelClickToWishList()}>Wish List</button>
    );
};

export default WishListButton;