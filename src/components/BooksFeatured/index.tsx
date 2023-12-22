import { AbButton, AbCard } from "alurabooks-ds-develop";
import { useState } from "react";
import { IBook } from "../../interfaces/IBooks";

import './BooksFeatured.css';

interface BooksFeaturedProps {
    books: IBook[]
}

const BooksFeatured = ({ books }: BooksFeaturedProps) => {

    const [selected, selectBook] = useState<IBook>(books[0])

    return (<section className="BooksFeatured">
        <div>
            <ul className="books">
                {books.map(book => {
                    return (
                    <li 
                        key={book.name}
                        onClick={() => selectBook(book)} 
                        className={selected?.name === book.name ? 'selected' : ''}
                    >
                        <img src={book.image} alt={`Capa do livro ${book.name} escrito por ${book.author}`} />
                    </li>)
                })}
            </ul>
        </div>
        <AbCard>
            <div className="selected-details">
                <header>
                    <h5>Sobre o livro:</h5>
                </header>
                <h6>{selected.name}</h6>
                <p>{selected.description}</p>
                <p>Por: {selected.author}</p>
                <footer>
                    <div className="price">
                        <em>A partir de:</em>
                        <strong>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(selected.price)}</strong>
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