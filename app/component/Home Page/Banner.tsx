import Image from "next/image";
import bannerImg from "@/assets/hero_img.jpg";
import Link from "next/link";

export default function Banner() {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-orange-50 via-amber-50 to-yellow-100">
                <div className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-10 sm:px-10 md:px-14 lg:flex-row lg:px-20 lg:py-16">

                    {/* Text Content */}
                    <div className="w-full text-center lg:w-1/2 lg:text-left">
                        <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                            Discover Your Next Favorite
                        </span>

                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Books to freshen up your bookshelf
                        </h2>

                        <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg">
                            Explore a collection of amazing books and find your next
                            great read. Every book has a new story waiting for you.
                        </p>

                        <Link
                            href="/books"
                            className="btn mt-7 rounded-xl border-none bg-orange-500 px-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
                        >
                            View the List
                            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>

                    {/* Banner Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="group mx-auto max-w-md transition-transform duration-500 hover:scale-105">
                            <Image
                                src={bannerImg}
                                alt="A beautiful collection of books"
                                priority
                                className="h-auto w-full object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
