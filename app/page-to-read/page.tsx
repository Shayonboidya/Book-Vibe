"use client";

import React, { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "../Type";

import {
    Bar,
    BarChart,
    BarShapeProps,
    CartesianGrid,
    Label,
    LabelList,
    LabelProps,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import Link from "next/link";

const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A855F7",
    "#EC4899",
    "#64748B",
];

const getPath = (
    x: number,
    y: number,
    width: number,
    height: number
) => {
    return `M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z`;
};

const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index, isActive } = props;

    const color = colors[(index ?? 0) % colors.length];

    return (
        <path
            d={getPath(
                Number(x),
                Number(y),
                Number(width),
                Number(height)
            )}
            fill={color}
            stroke={color}
            strokeWidth={isActive ? 3 : 0}
            style={{
                transition: "all 0.3s ease",
                filter: isActive
                    ? "drop-shadow(0px 4px 6px rgba(0,0,0,0.2))"
                    : "none",
            }}
        />
    );
};

const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];

    return <Label {...props} fill={fill} />;
};

const PageToReadPage = () => {
    const { readBooks } = useContext(BooksContext) as {
        readBooks: IBook[];
    };

    const data = readBooks.map((book, idx) => ({
        name: book.bookName,
        uv: book.totalPages,
        pv: idx + 1,
        amt: idx + 1,
    }));

    const totalPages = readBooks.reduce(
        (total, book) => total + book.totalPages,
        0
    );

    const averagePages =
        readBooks.length > 0
            ? Math.round(totalPages / readBooks.length)
            : 0;

    return (
        <main className="min-h-screen bg-base-200/40 px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                {/* Page Header */}
                <div className="mb-8 overflow-hidden rounded-3xl bg-linear-to-r from-success to-emerald-700 p-6 text-white shadow-xl sm:p-10">
                    <div className="relative z-10">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                            Your Reading Journey
                        </p>

                        <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                            Pages To Read
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                            Track your reading progress and explore the
                            number of pages in your reading list.
                        </p>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6">
                        <p className="text-sm font-medium text-base-content/60">
                            Total Books
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-success sm:text-4xl">
                            {readBooks.length}
                        </h2>

                        <p className="mt-2 text-xs text-base-content/50">
                            Books in your reading list
                        </p>
                    </div>

                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6">
                        <p className="text-sm font-medium text-base-content/60">
                            Total Pages
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">
                            {totalPages.toLocaleString()}
                        </h2>

                        <p className="mt-2 text-xs text-base-content/50">
                            Combined pages of all books
                        </p>
                    </div>

                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6">
                        <p className="text-sm font-medium text-base-content/60">
                            Average Pages
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-warning sm:text-4xl">
                            {averagePages.toLocaleString()}
                        </h2>

                        <p className="mt-2 text-xs text-base-content/50">
                            Average pages per book
                        </p>
                    </div>

                </div>

                {/* Chart Section */}
                <section className="rounded-3xl border border-base-300 bg-base-100 p-4 shadow-sm sm:p-6 lg:p-8">

                    <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                        <div>
                            <h2 className="text-xl font-bold text-base-content sm:text-2xl">
                                Reading Statistics
                            </h2>

                            <p className="mt-1 text-sm text-base-content/50">
                                Page comparison of your selected books
                            </p>
                        </div>

                        {readBooks.length > 0 && (
                            <span className="badge badge-success badge-outline px-4 py-3 font-semibold">
                                {readBooks.length} Books
                            </span>
                        )}
                    </div>

                    {readBooks.length > 0 ? (
                        <div className="w-full">
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart
                                    data={data}
                                    margin={{
                                        top: 30,
                                        right: 15,
                                        left: -15,
                                        bottom: 75,
                                    }}
                                    barCategoryGap="25%"
                                >
                                    <CartesianGrid
                                        strokeDasharray="4 4"
                                        vertical={false}
                                        stroke="currentColor"
                                        opacity={0.12}
                                    />

                                    <XAxis
                                        dataKey="name"
                                        interval={0}
                                        angle={-30}
                                        textAnchor="end"
                                        height={90}
                                        tick={{
                                            fontSize: 11,
                                            fill: "currentColor",
                                        }}
                                        tickFormatter={(value: string) =>
                                            value.length > 16
                                                ? `${value.slice(0, 16)}...`
                                                : value
                                        }
                                        axisLine={false}
                                        tickLine={false}
                                    />

                                    <YAxis
                                        width={55}
                                        tick={{
                                            fontSize: 12,
                                            fill: "currentColor",
                                        }}
                                        axisLine={false}
                                        tickLine={false}
                                    />

                                    <Tooltip
                                        cursor={{
                                            fill: "currentColor",
                                            opacity: 0.06,
                                        }}
                                        contentStyle={{
                                            borderRadius: "12px",
                                            border: "1px solid #e5e7eb",
                                            padding: "12px",
                                        }}
                                        formatter={(value) => [
                                            `${Number(value).toLocaleString()} Pages`,
                                            "Total Pages",
                                        ]}
                                        labelStyle={{
                                            fontWeight: "bold",
                                            marginBottom: "5px",
                                        }}
                                    />

                                    <Bar
                                        dataKey="uv"
                                        name="Total Pages"
                                        shape={TriangleBar}
                                        activeBar
                                        radius={[8, 8, 0, 0]}
                                    >
                                        <LabelList
                                            content={CustomColorLabel}
                                            position="top"
                                        />
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="flex min-h-85.5 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-base-300 bg-base-200/30 px-5 py-12 text-center">

                            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-4xl">
                                📚
                            </div>

                            <h3 className="text-xl font-bold text-base-content sm:text-2xl">
                                Your Reading List is Empty!
                            </h3>

                            <p className="mt-3 max-w-md text-sm leading-relaxed text-base-content/60">
                                You haven&apos;t added any books to your reading
                                list yet. Explore our collection and start
                                building your reading journey.
                            </p>

                            <Link
                                href="/books"
                                className="btn btn-success mt-6 rounded-xl px-7 text-white"
                            >
                                Explore Books
                            </Link>
                        </div>
                    )}
                </section>

                {/* Footer Note */}
                {readBooks.length > 0 && (
                    <p className="mt-6 text-center text-xs text-base-content/50 sm:text-sm">
                        Keep reading, keep growing. Every page counts! ✨
                    </p>
                )}

            </div>
        </main>
    );
};

export default PageToReadPage; 