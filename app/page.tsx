import React, { Suspense } from 'react';
import Banner from './component/Home Page/Banner';
import Books from './component/Home Page/Books';
import BooksSkeleton from './component/BookSkeleton';

const page = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<BooksSkeleton></BooksSkeleton>}>
                <Books></Books>
            </Suspense>
        </div>
    );
};

export default page;