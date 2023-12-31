import { IBook } from "./IBooks";
import { IPurchaseOption } from "./IPurchaseOption"

export interface IItemCart {
    book: IBook
    optionPurchase: IPurchaseOption
    amount: number
}