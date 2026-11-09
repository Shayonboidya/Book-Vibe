'use client'
import { IBook } from '@/app/Type';
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';
import { CiCircleRemove } from 'react-icons/ci';

const  RemovedWishlistBook = ({ book }: { book: IBook }) => {

    const { setWishList } = useContext(BooksContext) as {
        setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
    };

    const handelClickRemoved = () => {
        setWishList(currentBooks => currentBooks.filter(currentBook => currentBook !== book));
    }

    return (
        <button
            type="button"
            aria-label="Remove book"
            className="btn btn-ghost btn-circle btn-sm text-error transition-all duration-300 hover:rotate-90 hover:bg-error/10 hover:text-error sm:btn-md"

            onClick={() => handelClickRemoved()}
        >
            <CiCircleRemove size={24} />
        </button>
    );
};

export default RemovedWishlistBook ;