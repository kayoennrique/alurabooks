import { IItemCart } from '../../../interfaces/IItemCart';
import './MiniCartItem.css';

interface MiniCartItemProps {
    item: IItemCart
}

const MiniCartItem = ({ item } : MiniCartItemProps) => {
    return (<div className="mini-cart-item">
        <h5>{item.book.title}</h5>
        <h6>Autoria: {item.book.author.name}</h6>
    </div>);
}

export default MiniCartItem;