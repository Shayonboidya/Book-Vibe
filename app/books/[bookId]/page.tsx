
import ReadButton from "@/app/component/BooksDetails/ReadButton";
import WishListButton from "@/app/component/BooksDetails/WishListButton";
import { IBook } from "@/app/Type";
import Image from "next/image";
import { notFound } from "next/navigation";

// Load books data
const getBooks = async (): Promise<IBook[]> => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        return res.json();

    } catch {
        throw new Error("Failed to fetch books data");
    }
};

const BookPage = async ({
    params,
}: {
    params: Promise<{ bookId: string }>;
}) => {
    const { bookId } = await params;

    // Validate ID
    const id = Number(bookId);

    if (!Number.isInteger(id)) {
        notFound();
    }

    // Get books
    const books: IBook[] = await getBooks();

    // Find specific book
    const book = books.find((b) => b.bookId === id);

    // Handle invalid book ID
    if (!book) {
        notFound();
    }

    return (
        <main className="container mx-auto px-4 py-10 sm:py-16">
            <div className="group flex flex-col gap-6 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-7 lg:flex-row lg:gap-10">

                {/* Book Image */}
                <div className="flex w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-base-200 p-6 sm:p-8 lg:w-2/5">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={350}
                        height={450}
                        className="h-72 w-auto object-contain transition-transform duration-500 group-hover:scale-105 sm:h-96"
                    />
                </div>

                {/* Book Information */}
                <div className="flex flex-1 flex-col gap-5">

                    {/* Title & Author */}
                    <div>
                        <span className="badge badge-success badge-outline mb-3">
                            {book.category}
                        </span>

                        <h2 className="text-2xl font-bold leading-tight text-base-content sm:text-3xl lg:text-4xl">
                            {book.bookName}
                        </h2>

                        <p className="mt-3 text-base text-base-content/60">
                            By <span className="font-semibold text-base-content">
                                {book.author}
                            </span>
                        </p>
                    </div>

                    <div className="divider my-0"></div>

                    {/* Book Details */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-base-content/50">
                                Publisher
                            </p>
                            <p className="mt-1 font-semibold">{book.publisher}</p>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-base-content/50">
                                Published
                            </p>
                            <p className="mt-1 font-semibold">{book.yearOfPublishing}</p>
                        </div>

                        <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-base-content/50">
                                Total Pages
                            </p>
                            <p className="mt-1 font-semibold">{book.totalPages} Pages</p>
                        </div>
                    </div>

                    <div className="divider my-0"></div>

                    {/* Tags */}
                    <div>
                        <h3 className="mb-3 text-sm font-bold">Book Tags</h3>

                        <div className="flex flex-wrap gap-2">
                            {book.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="badge badge-success badge-outline px-4 py-3"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-between rounded-xl bg-warning/10 p-4">
                        <div>
                            <p className="text-sm text-base-content/60">
                                Reader Rating
                            </p>
                            <p className="mt-1 text-2xl font-bold">
                                {book.rating} <span className="text-warning">★</span>
                            </p>
                        </div>
                        <span className="text-sm font-medium text-base-content/60">
                            Book Vibe Rating
                        </span>
                    </div>

                    {/* Review */}
                    <div>
                        <h3 className="mb-2 font-bold">About This Book</h3>
                        <p className="text-sm leading-7 text-base-content/70">
                            {book.review}
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <ReadButton book={book}></ReadButton>
                        <WishListButton book={book}></WishListButton>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default BookPage;
