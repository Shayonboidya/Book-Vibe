import Link from 'next/link';
import React from 'react';
import RemovedWishlistBook from './RemovedBook/RemovedWishlistBook ';
import Image from 'next/image';
import { IBook } from '@/app/Type';

const WishListBooksComponet = ({book}:{book:IBook}) => {
    return (
        <div className="group flex flex-col gap-6 rounded-2xl border border-base-300 bg-base-100 p-8 my-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 lg:flex-row">

            {/* Book Image */}
            <div className="flex w-full shrink-0 items-center justify-center rounded-xl bg-base-200 p-6 sm:p-8 lg:w-64">
                <Image
                    src={book.image}
                    width={200}
                    height={250}
                    alt={book.bookName}
                    className="h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-105 sm:h-64"
                />
            </div>

            {/* Book Information */}
            <div className="flex flex-1 flex-col justify-between gap-5">

                {/* Title & Author */}
                <div>
                    <div className="flex items-center justify-between gap-3">
                        {/* Category */}
                        <span className="badge badge-success badge-outline px-4 py-3 text-xs font-semibold sm:text-sm">
                            {book.category}
                        </span>
                        <RemovedWishlistBook book={book}></RemovedWishlistBook>

                    </div>

                    <h2 className="text-2xl font-bold text-base-content transition-colors group-hover:text-success sm:text-3xl">
                        {book.bookName}
                    </h2>

                    <p className="mt-2 text-sm text-base-content/60 sm:text-base">
                        By <span className="font-semibold text-base-content/80">{book.author}</span>
                    </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-base-content">
                        Tags:
                    </span>

                    {book.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-success badge-outline px-3 py-3"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="divider my-0"></div>

                {/* Book Information Grid */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-base-content/50">
                            Publisher
                        </p>
                        <p className="mt-1 font-semibold text-base-content">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-base-content/50">
                            Year of Publishing
                        </p>
                        <p className="mt-1 font-semibold text-base-content">
                            {book.yearOfPublishing}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-base-content/50">
                            Total Pages
                        </p>
                        <p className="mt-1 font-semibold text-base-content">
                            {book.totalPages} Pages
                        </p>
                    </div>

                </div>

                <div className="divider my-0"></div>

                {/* Footer */}
                <div className="flex flex-wrap items-center justify-between gap-4">

                    {/* Rating */}
                    <div className="flex items-center gap-2 rounded-lg bg-warning/10 px-4 py-2">
                        <span className="text-xl text-warning">★</span>
                        <span className="font-bold text-base-content">
                            {book.rating}
                        </span>
                    </div>

                    {/* View Details */}
                    <Link
                        href={`/books/${book.bookId}`}
                        className="btn btn-success rounded-xl px-6 text-white transition-all duration-300 hover:scale-105"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WishListBooksComponet;