import React, { Suspense } from "react";
import Banner from "./component/Home Page/Banner";
import Books from "./component/Home Page/Books";
import BooksSkeleton from "./component/BookSkeleton";

const Page = () => {
    return (
        <div>
            <Banner />

            <Suspense fallback={<BooksSkeleton />}>
                <Books />
            </Suspense>
        </div>
    );
};

export default Page;