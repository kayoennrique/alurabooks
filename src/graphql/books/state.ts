import { makeVar } from "@apollo/client";
import { IBook } from "../../interfaces/IBooks";
import { ICategorie } from "../../interfaces/ICategorie";

interface FilterBooks {
    categorie?: ICategorie,
    title?: string
}

export const filterBooksVar = makeVar<FilterBooks>({})

export const booksVar = makeVar<IBook[]>([])