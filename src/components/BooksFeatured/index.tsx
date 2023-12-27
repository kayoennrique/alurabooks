import { AbButton, AbCard } from "alurabooks-ds-develop";
import { useEffect, useState } from "react";
import { IBook } from "../../interfaces/IBooks";

import './BooksFeatured.css';
import { formatter } from "../../utils/currency-formatter.ts";

interface BooksFeaturedProps {
    books: IBook[]
}

const BooksFeatured = ({ books }: BooksFeaturedProps) => {

    const [selected, selectBook] = useState<IBook>();

    useEffect(() => {
        if (books?.length) {
            selectBook(books[0])

        }
    }, [books]);

    const minimumValue = selected ? Math.min(...selected.optionsPurchase.map(op => op.price)) : 0


    return (<section className="BooksFeatured">
        <div>
            <ul className="books">
                {books.map(book => {
                    return (
                    <li 
                        key={book.title}
                        onClick={() => selectBook(book)} 
                        className={selected?.title === book.title ? 'selected' : ''}
                    >
                        <img src={book.imageCover} alt={`Capa do livro ${book.title} escrito por ${book.author}`} />
                    </li>)
                })}
            </ul>
        </div>
        <AbCard>
            <div className="selected-details">
                <header>
                    <h5>Sobre o livro:</h5>
                </header>
                <h6>{selected?.title}</h6>
                <p>{selected?.description}</p>
                <p>Por: {selected?.author}</p>
                <footer>
                    <div className="price">
                        <em>A partir de:</em>
                        <strong>{formatter.format(minimumValue)}</strong>
                    </div>
                    <div>
                        <AbButton text="Comprar" />
                    </div>
                </footer>
            </div>
        </AbCard>
    </section>)

}

export default BooksFeatured