import { ReactElement, createContext, useContext } from "react";
import { ICart } from "../../interfaces/ICart";

export interface ICartContext {
    cart?: ICart
}

export const CartContext = createContext<ICartContext>({});

interface CartProviderProps {
    children: ReactElement
}

const CartProvider = ({ children }: CartProviderProps) => {
    const cart: ICart = {
        itens: [],
        total: 0
    }

    return (

        <CartContext.Provider value={{ cart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext<ICartContext>(CartContext);
}

export default CartProvider;