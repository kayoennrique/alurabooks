import { gql, useQuery } from "@apollo/client";
import { ICategorie } from "../../interfaces/ICategorie";
import CardBook from "../CardBook";

import './BooksList.css'
import { IBook } from "../../interfaces/IBooks";
import { useState } from "react";
import { AbButton, AbTextField } from "alurabooks-ds-develop";

interface BooksListProps {
    categorie: ICategorie
}

const GET_BOOKS = gql`
query GetBooks($categorieId: Int, $title: String) {
    books(categorieId: $categorieId, title: $title) {
      id
      slug
      title
      imageCover
      optionPurchase {
        id
        price
      }
    }
  }
`;

const BooksList = ({ categorie }: BooksListProps) => {

    const [textSearch, setTextSearch] = useState('');

    const { data, refetch } = useQuery<{ books: IBook[]}>(GET_BOOKS, {
        variables: {
            categorieId: categorie.id
        }
    })

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