import { AbButton } from "alurabooks-ds-develop";
import MainTitle from "../../components/MainTitle";
import { Link } from "react-router-dom";
import { useCart } from "../../graphql/cart/hooks";
import { formatter } from "../../utils/currency-formatter.ts";

import './Cart.css'

import ItemCart from "../../components/ItemCart";





const Cart = () => {
    const { data } = useCart();

    return (<section className="cart-page">

        <MainTitle text="Minha sacola" />
        <div className="content">
            <h4>Itens selecionados</h4>
            <div className="itens">
                {data?.cart?.itens.map((item, index) => 
                    <ItemCart key={index} item={item} />)}  
            </div>
            <div>
                <Link to='/'>Continuar comprando</Link>
            </div>
            <footer>
                <ul>
                    <li>Total da compra</li>
                    <li><strong>{formatter.format(data?.cart?.total || 0)}</strong></li>
                    <li>
                        <AbButton text="Finalizar compra" />
                    </li>
                </ul>
            </footer>
        </div>
    </section>);
}

export default Cart;