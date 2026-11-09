import React from "react";

const BooksSkeleton = () => {
    return (
        <section className="container mx-auto my-16 px-4 sm:my-20 lg:my-24 animate-pulse">

            {/* Section Heading */}
            <div className="mb-10 flex flex-col items-center justify-center gap-4 text-center">
                <div className="h-4 w-40 rounded bg-base-300"></div>

                <div className="h-9 w-56 rounded-lg bg-base-300 sm:h-11 sm:w-72"></div>

                <div className="h-4 w-72 max-w-full rounded bg-base-300"></div>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm"
                    >
                        {/* Book Image */}
                        <div className="h-56 w-full rounded-xl bg-base-300 sm:h-64"></div>

                        {/* Tags */}
                        <div className="flex gap-2">
                            <div className="h-6 w-20 rounded-full bg-base-300"></div>
                            <div className="h-6 w-24 rounded-full bg-base-300"></div>
                        </div>

                        {/* Book Title */}
                        <div className="h-7 w-3/4 rounded bg-base-300"></div>

                        {/* Author */}
                        <div className="h-4 w-1/2 rounded bg-base-300"></div>

                        {/* Category & Rating */}
                        <div className="mt-3 flex items-center justify-between">
                            <div className="h-5 w-24 rounded bg-base-300"></div>
                            <div className="h-5 w-12 rounded bg-base-300"></div>
                        </div>

                        {/* Button */}
                        <div className="mt-2 h-11 w-full rounded-xl bg-base-300"></div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default BooksSkeleton;