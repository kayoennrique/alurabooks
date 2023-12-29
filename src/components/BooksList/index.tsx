import { ICategorie } from "../../interfaces/ICategorie";
import CardBook from "../CardBook";
import { useState } from "react";
import { AbButton, AbTextField } from "alurabooks-ds-develop";
import { useBooks } from "../../graphql/books/hooks";

import './BooksList.css'

interface BooksListProps {
    categorie: ICategorie
}

const BooksList = ({ categorie }: BooksListProps) => {

    const [textSearch, setTextSearch] = useState('');

    const { data, refetch } = useBooks(categorie);

    const searchBooks = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (textSearch) {
            refetch({
                categorieId: categorie.id,
                title: textSearch
            })
        }
    }

    return <section>
        <form onSubmit={searchBooks} style={{ maxWidth: '80%', margin: '0 auto', textAlign: 'center' }}>
            <AbTextField value={textSearch} onChange={setTextSearch} placeholder='Digite o título'/>
            <div style={{ marginTop: '16px' }}>
                <AbButton text="Buscar"/>
            </div>
        </form>
        <div className="books">
            {data?.books.map(book => <CardBook book={book} key={book.id} />)}
        </div>
    </section>
}

export default BooksList;