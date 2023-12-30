import { IAuthor } from "./IAuthor";
import { IPurchaseOption } from "./IPurchaseOption";
import { ITag } from "./ITag";

export interface IBook {
    id: number
    categorie: number
    title: string
    slug: string
    description: string
    isbn: string
    numberPages: number
    publication: string
    imageCover: string
    author: IAuthor
    optionPurchase: IPurchaseOption[]
    about: string
    tags: ITag[]
}