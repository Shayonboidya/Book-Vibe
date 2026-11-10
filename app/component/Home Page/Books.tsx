import { IBook } from "@/app/Type";
import BookSmallCard from "./BookSmallCard";

// Load books data
const getData = async (): Promise<IBook[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        return res.json();
    } catch {
        throw new Error("Failed to fetch books data");
    }

};

const Books = async () => {
    const books: IBook[] = await getData();

    return (
        <section className="container mx-auto my-16 px-4 sm:my-20 lg:my-24">

            {/* Section Heading */}
            <div className="mb-10 flex flex-col text-center items-center justify-center gap-4 sm:flex-row">
                <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-success">
                        Explore Our Collection
                    </p>

                    <h2 className="text-3xl font-bold text-base-content sm:text-4xl">
                        Popular Books
                    </h2>

                    <p className="mt-2 text-base text-base-content/60">
                        Discover your next favorite book from our collection.
                    </p>
                </div>

                {/* <div className="rounded-xl bg-success/10 px-5 py-3 text-sm font-semibold text-success">
                    {books.length} Books Available
                </div> */}
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
                {books.slice(0, 9).map((book) => (
                    <BookSmallCard key={book.bookId} book={book} />
                ))}
            </div>

            {/* Empty State */}
            {books.length === 0 && (
                <div className="rounded-2xl border border-dashed border-base-300 py-16 text-center">
                    <h3 className="text-xl font-semibold">No Books Found!</h3>
                    <p className="mt-2 text-base-content/60">
                        Please check back later for new books.
                    </p>
                </div>
            )}
        </section>
    );
};

export default Books;
