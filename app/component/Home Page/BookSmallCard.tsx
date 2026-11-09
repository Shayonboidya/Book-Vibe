
import { IBook } from "@/app/Type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookSmallCard = ({ book }: { book: IBook }) => {
    return (
        <Link
            href={`/books/${book.bookId}`}
            className="group flex h-full flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-5"
        >
            {/* Book Image */}
            <div className="flex h-56 w-full items-center justify-center overflow-hidden rounded-xl bg-base-200 p-4 sm:h-64">
                <Image
                    src={book.image}
                    width={200}
                    height={250}
                    alt={book.bookName}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Book Information */}
            <div className="flex flex-1 flex-col gap-4">

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    <span className="badge badge-success badge-outline px-3 py-3">
                        {book.tags}
                    </span>

                    <span className="badge badge-info badge-outline px-3 py-3">
                        {book.category}
                    </span>
                </div>

                {/* Title & Author */}
                <div>
                    <h2 className="line-clamp-2 text-lg font-bold text-base-content transition-colors duration-300 group-hover:text-success sm:text-xl">
                        {book.bookName}
                    </h2>

                    <p className="mt-2 text-sm text-base-content/60">
                        By: <span className="font-semibold text-base-content/80">{book.author}</span>
                    </p>
                </div>

                <div className="divider my-0"></div>

                {/* Rating & Category */}
                <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-base-content/60">
                        {book.category}
                    </p>

                    <div className="flex items-center gap-1 rounded-lg bg-warning/10 px-3 py-2">
                        <span className="text-warning">★</span>
                        <span className="font-bold">{book.rating}</span>
                    </div>
                </div>

                {/* View Details */}
                <div className="mt-auto flex justify-center">
                    <button className="text-sm font-semibold text-success transition-transform duration-300 group-hover:translate-x-1">
                        View Details →
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default BookSmallCard;
