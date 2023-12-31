import { useMutation, useQuery } from "@apollo/client";
import { ADD_ITEM, GET_CART } from "./queries";
import { ICart } from "../../interfaces/ICart";

export const useCart = () => {
    return useQuery<{ cart: ICart }>(GET_CART)
}

export const useAddItem = () => {
    return useMutation(ADD_ITEM, {
        refetchQueries: [
            'GetCart'
        ]
    });
}