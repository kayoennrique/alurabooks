import { useQuery } from "@apollo/client";
import { IBook } from "../../interfaces/IBooks";
import { ICategorie } from "../../interfaces/ICategorie";
import { GET_BOOKS } from "./queries";


export const useBooks = (categorie: ICategorie) => {
    return useQuery<{ books: IBook[]}>(GET_BOOKS, {
        variables: {
            categorieId: categorie.id
        }
    })
}