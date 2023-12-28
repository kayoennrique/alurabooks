import { useQuery } from "@tanstack/react-query";
import { ICategorie } from "../../interfaces/ICategorie";
import { getProductsFromCategory } from "../../http";
import CardBook from "../CardBook";

import './BooksList.css'

interface BooksListProps {
    categorie: ICategorie
}

const BooksList = ({ categorie }: BooksListProps) => {
    const { data: products } = useQuery(['searchOfBooksByCategory', categorie], () => getProductsFromCategory(categorie))

    return <section className="books">
    {products?.map(book => <CardBook book={book} key={book.id} />)}
    </section>
}

export default BooksList;