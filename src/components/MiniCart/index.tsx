import { AbButton } from "alurabooks-ds-develop";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contextApi/cart";
import NavigationButton from "../NavigationButton";

import bag from './assets/bag.png';

import './MiniCart.css'
import MiniCartItem from "./MiniCartItem";

const MiniCart = () => {
    const navigate = useNavigate();

    const { cart } = useCartContext();

    return (
        <div>
            <div className="cart dropdown">
                <NavigationButton
                    text="Sacola"
                    textAltSrc=""
                    imageSrc={bag}
                />  
                <div className="minicart-content">
                    <h4>Resumo da compra</h4>
                    {cart?.itens.map((item, index) => (<MiniCartItem key={index} item={item} />))}
                    <AbButton text="Ver sacola" onClick={() => navigate('/minha-sacola')}/>
                </div>
            </div>
        </div>
    );
}

export default MiniCart;