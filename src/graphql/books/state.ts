import { makeVar } from "@apollo/client";
import { IBook } from "../../interfaces/IBooks";

export const booksVar= makeVar<IBook[]>([]);