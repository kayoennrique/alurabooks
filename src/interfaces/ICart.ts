import { IItemCart } from "./IItemCart"

export interface ICart {
    total: number
    itens: IItemCart[]
}