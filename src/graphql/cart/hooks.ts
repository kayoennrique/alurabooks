import { useQuery } from "@apollo/client";
import { GET_CART } from "./queries";
import { ICart } from "../../interfaces/ICart";

export const useCart = () => {
    return useQuery<{ cart: ICart }>(GET_CART)
}