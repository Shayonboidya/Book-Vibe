import React from 'react';
import BooksSkeleton from '../component/BookSkeleton';

const BooksPageLoading = () => {
    return (
        <div>
            <BooksSkeleton></BooksSkeleton>
        </div>
    );
};

export default BooksPageLoading;