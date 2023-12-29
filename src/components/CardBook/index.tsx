import { AbButton } from "alurabooks-ds-develop";
import { Link } from "react-router-dom";
import { IBook } from "../../interfaces/IBooks";
import { formatter } from "../../utils/currency-formatter.ts";

import './CardBook.css'


interface CardBookProps {
    book: IBook
}

const getMinimumValue = (book: IBook) => {
    return Math.min(...book.optionPurchase.map(op => op.price));
}

const CardBook = ( { book } : CardBookProps) => {
    return (<div className="book" key={book.id}>
        <img src={book.imageCover} alt={book.description} />
        <ul>
            <li>
                <strong>{book.title}</strong>
            </li>
            <li>
                A partir de: <strong>{formatter.format(getMinimumValue(book))}</strong>
            </li>
            <li className="link-container">
                <Link to={`/book/${book.slug}`}>
                    <AbButton isBlock text="Comprar" />
                </Link>
            </li>
        </ul>
    </div>);
}

export default CardBook;