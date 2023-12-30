import { useQuery, useReactiveVar } from "@apollo/client";
import { IBook } from "../../interfaces/IBooks";
import { ICategorie } from "../../interfaces/ICategorie";
import { GET_BOOKS } from "./queries";
import { booksVar, filterBooksVar } from "./state";


export const useBooks = (categorie: ICategorie) => {
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