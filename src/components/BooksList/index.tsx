import { gql, useQuery } from "@apollo/client";
import { ICategorie } from "../../interfaces/ICategorie";
import CardBook from "../CardBook";

import './BooksList.css'
import { IBook } from "../../interfaces/IBooks";

interface BooksListProps {
    categorie: ICategorie
}

const GET_BOOKS = gql`
    query GetBooks {
        books {
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

    const { data } = useQuery<{ books: IBook[] }>(GET_BOOKS)
    // const { data: products } = useQuery(['searchOfBooksByCategory', categorie], () => getProductsFromCategory(categorie))

    return <section className="books">
        {data?.books.map(book => <CardBook book={book} key={book.id} />)}
    </section>
}

export default BooksList;