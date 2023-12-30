import { useQuery, useReactiveVar } from "@apollo/client";
import { IBook } from "../../interfaces/IBooks";
import { GET_BOOK, GET_BOOKS } from "./queries";
import { booksVar, filterBooksVar } from "./state";

export const useBooks = () => {
    const filter = useReactiveVar(filterBooksVar)
    return useQuery<{ books: IBook[] }>(GET_BOOKS, {
        variables: {
            categorieId: filter.categorie?.id,
            title: filter.title
        },
        onCompleted(data) {
            if (data.books) {
                booksVar(data.books)
            }
        },
    })
}

export const useBook = (slug: string) => {
    return useQuery<{ book: IBook }>(GET_BOOK, {
        variables: {
            slug
        }
    })
}