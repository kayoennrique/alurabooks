import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { AbButton, AbInputQuantity, AbOptionsGroup } from "alurabooks-ds-develop";
import { useState } from "react"
import { useParams } from "react-router-dom"
import BlockAbout from "../../components/BlockAbout"
import Loader from "../../components/Loader"
import AboutAuthor from "../../components/AboutAuthor"
import MainTitle from "../../components/MainTitle"
import { getBook } from "../../http"
import { IBook } from "../../interfaces/IBooks"
import { formatter } from "../../utils/currency-formatter.ts"

import './Book.css';

const Book = () => {
    const [quantity, setQuantity] = useState(0);

    const params = useParams()

    const [option, setOption] = useState<AbOptionsGroup>()

    const { data: book, isLoading, error } = useQuery<IBook | null, AxiosError>(['book', params.slug], () => getBook(params.slug || ''))

    if (error) {
        console.log('Alguma coisa deu errada')
        console.log(error.message)
        return <h1>Ops! Algum erro inesperado aconteceu</h1>
    }

    if (book === null) {
        return <h1>Livro não encontrado!</h1>
    }

    if (isLoading || !book) {
        return <Loader />
    }

    const options: AbOptionsGroup[] = book.optionsPurchase ? book.optionsPurchase.map(option => ({
        id: option.id,
        body: formatter.format(option.price),
        title: option.title,
        footer: option.formats ? option.formats.join(',') : ''
    }))
        : []

    return (
        <section className="book-detail">
            <MainTitle text="Detalhes do livro" />
            <div className="">
                <div className="container">
                    <figure>
                        <img src={book.imageCover} alt={book.description} />
                    </figure>
                    <div className="details">
                        <h2>{book.title}</h2>
                        <p>{book.description}</p>
                        <h3>Selecione o formato do seu livro:</h3>
                        <div className="options">
                            <AbOptionsGroup
                                options={options}
                                onChange={setOption}
                                standardValue={option}
                            />
                        </div>
                        <p><strong>*Você terá acesso às futuras atualizações do livro.</strong></p>
                        <footer>
                            <div className="qtdContainer">
                                <AbInputQuantity
                                    onChange={setQuantity}
                                    value={quantity}
                                    
                                />
                            </div>
                            <div>
                                <AbButton text="Comprar" />
                            </div>
                        </footer>
                    </div>
                </div>
                <div>
                    <AboutAuthor authorId={book.author} />
                    <BlockAbout title="Sobre o Livro" body={book.about} />
                </div>
            </div>
        </section>
    )
}

export default Book;