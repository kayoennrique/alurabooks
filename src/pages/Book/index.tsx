import { AbButton, AbInputQuantity, AbOptionsGroup, AbTag } from "alurabooks-ds-develop";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BlockAbout from "../../components/BlockAbout";
import Loader from "../../components/Loader";
import MainTitle from "../../components/MainTitle";
import { formatter } from "../../utils/currency-formatter.ts";
import { useBook } from "../../graphql/books/hooks";
import './Book.css';

const Book = () => {
    const params = useParams()

    const [option, setOption] = useState<AbOptionsGroup>()

    const { data, loading, error } = useBook(params.slug || '')

    if (error) {
        console.log('Alguma coisa deu errada')
        console.log(error.message)
        return <h1>Ops! Algum erro inesperado aconteceu</h1>
    }

    if (loading) {
        return <Loader />
    }

    const options: AbOptionsGroup[] = data?.book.optionPurchase ? data?.book.optionPurchase.map(option => ({
        id: option.id,
        body: formatter.format(option.price),
        title: option.title,
        footer: option.formats ? option.formats.join(',') : ''
    }))
        : []

        return (
            <section className="book-detail">
                <MainTitle text="Detalhes do Livro" />
                <div className="">
                    <div className="container">
                        <figure>
                            <img src={data?.book.imageCover} alt={data?.book.description} />
                        </figure>
                        <div className="details">
                            <h2>{data?.book.title}</h2>
                            <p>{data?.book.description}</p>
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
                                    <AbInputQuantity onChange={() => {}} value={0}/>
                                </div>
                                <div>
                                    <AbButton text="Comprar" />
                                </div>
                            </footer>
                        </div>
                    </div>
                    <div>
                        <BlockAbout title="Sobre o Autor" body={data?.book.author.about} />
                        <BlockAbout title="Sobre o Livro" body={data?.book.about} />
                    </div>
                    <div className="tags">
                        {data?.book.tags?.map(tag => <AbTag context="secondary" key={tag.name} text={tag.name}/>)}
                    </div>
                </div>
            </section>
        )
    }

export default Book;