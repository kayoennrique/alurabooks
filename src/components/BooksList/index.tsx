import { useReactiveVar } from "@apollo/client"

import { useEffect, useState } from "react"
import { useBooks } from "../../graphql/books/hooks"
import { filterBooksVar, booksVar } from "../../graphql/books/state"
import { ICategorie } from "../../interfaces/ICategorie"
import CardBook from "../CardBook"

import './BooksList.css'
import { AbTextField } from "alurabooks-ds-develop"

interface BooksListProps {
    categorie: ICategorie
}

const BooksList  = ({ categorie }: BooksListProps) => {

    const [textSearch, setTextSearch] = useState('')

    useEffect(() => {
        filterBooksVar({
            ...filterBooksVar(),
            title: textSearch.length >= 3 ? textSearch : ''
        })
    }, [textSearch])

    filterBooksVar({
        ...filterBooksVar(),
        categorie,
    })
    
    const books = useReactiveVar(booksVar);

    useBooks()

    return <section>
        <form style={{ maxWidth: '80%', margin: '0 auto', textAlign: 'center' }}>
            <AbTextField value={textSearch} onChange={setTextSearch} placeholder='Digite o título'/>
        </form>
        <div className="books">
            {books.map(book => <CardBook book={book} key={book.id} />)}
        </div>
    </section>
}

export default BooksList 