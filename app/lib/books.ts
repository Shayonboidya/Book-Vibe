import { IBook } from "@/app/Type";
import "server-only";
import { headers } from "next/headers";

export async function fetchBooks(): Promise<IBook[]> {
    const requestHeaders = await headers();
    const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
    const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";

    if (!host) {
        throw new Error("Unable to determine the current site URL");
    }

    const response = await fetch(`${protocol}://${host}/booksData.json`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch books data");
    }

    return response.json();
}
