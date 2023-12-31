import { AbButton } from "alurabooks-ds-develop";
import { Link } from "react-router-dom";
import MainTitle from "../../components/MainTitle";
import { useCartContext } from "../../contextApi/cart";
import { formatter } from "../../utils/currency-formatter.ts";

import './Cart.css';
import ItemCart from "./ItemCart";

const Cart = () => {
    const { cart, addItemCart } = useCartContext();

    return (<section className="cart-page">

        <MainTitle text="Minha sacola" />
        <div className="content">
            <h4>Itens selecionados</h4>
            <div className="itens">
                {cart?.itens.map((item, index) =>
                    <ItemCart key={index} item={item} />)}
            </div>
            <div>
                <Link to='/'>Continuar comprando</Link>
            </div>
            <footer>
                <ul>
                    <li>Total da compra</li>
                    <li><strong>{formatter.format(cart?.total || 0)}</strong></li>
                    <li>
                        <AbButton text="Finalizar compra" />
                    </li>
                </ul>
            </footer>
        </div>
    </section>);
}

export default Cart;