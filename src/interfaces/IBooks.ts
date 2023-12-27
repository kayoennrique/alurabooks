import { IPurchaseOption } from "./IPurchaseOption"

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
    author: number
    optionsPurchase: IPurchaseOption[]
    about: string
}