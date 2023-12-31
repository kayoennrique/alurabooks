import { AbInputQuantity } from "alurabooks-ds-develop";
import { formatter } from "../../utils/currency-formatter.ts";
import { IItemCart } from "../../interfaces/IItemCart";
import bin from './assets/bin.png';

import './Item-Cart.css';

interface ItemCartProps {
    item: IItemCart
}

const ItemCart = ({ item } : ItemCartProps) => {

    return (
        <div className="item-cart">
            <figure>
                <img src={item.book.imageCover} alt={item.book.description} />
            </figure>
            <div className="details">
                <ul>
                    <li className="title">{item.book.title}</li>
                    <li className="description">{item.book.description}</li>
                    <li className="authhor">Por: {item.book.author.name}</li>
                </ul>
            </div>
            <div>
                <ul className="price">
                    <li className="label">
                        <strong>Preço:</strong>
                    </li>
                    <li className="valor">
                        {formatter.format(item.optionPurchase.price)}
                    </li>
                </ul>
            </div>
            <div className="amount">
                <AbInputQuantity value={item.amount} onChange={() => console.log('[AbInputQuantity] - onChange')}/>
            </div>
            <div>
                <button className="btn-exclude">
                    <img src={bin} alt="Ícone de uma lixeira" />
                </button>
            </div>
        </div>
    )
}

export default ItemCart