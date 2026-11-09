
"use client";

import React, { createContext, useState } from "react";
import { IBook } from "@/app/Type";

interface IBooksContext {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishList: IBook[];
    setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<IBooksContext | undefined>(undefined);

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
    const [readBooks, setReadBooks] = useState<IBook[]>([]);
    const [wishList, setWishList] = useState<IBook[]>([]);

    const shareData: IBooksContext = {
        readBooks,
        setReadBooks,
        wishList,
        setWishList,
    };

    return (
        <BooksContext.Provider value={shareData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
