import { AbButton, AbInputQuantity, AbOptionsGroup, AbTag } from "alurabooks-ds-develop";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BlockAbout from "../../components/BlockAbout";
import Loader from "../../components/Loader";
import MainTitle from "../../components/MainTitle";
import { formatter } from "../../utils/currency-formatter.ts";
import { useBook } from "../../graphql/books/hooks";
import './Book.css';
import { useCartContext } from "../../contextApi/cart";

const Book = () => {
    const params = useParams();

    const { addItemCart } = useCartContext();

    const [option, setOption] = useState<AbOptionsGroup>();

    const [amount, setAmount] = useState(1);

    const { data, loading, error } = useBook(params.slug || '');

    if (error) {
        console.log('Alguma coisa deu errada');
        console.log(error.message);
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

    const toAddItembyCart = () => {
        if (!data?.book) {
            return
        }
        const optionPurchase = data.book.optionPurchase.find(op => op.id === option?.id);
        if (!optionPurchase) {
            alert('Por favor selecione uma opção de compra')
           return 
        }
        addItemCart({
            book: data.book,
            amount,
            optionPurchase
        })
    }

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
                                <AbInputQuantity onChange={setAmount} value={amount} />
                            </div>
                            <div>
                                <AbButton text="Comprar" onClick={toAddItembyCart} />
                            </div>
                        </footer>
                    </div>
                </div>
                <div>
                    <BlockAbout title="Sobre o Autor" body={data?.book.author.about} />
                    <BlockAbout title="Sobre o Livro" body={data?.book.about} />
                </div>
                <div className="tags">
                    {data?.book.tags?.map(tag => <AbTag context="secondary" key={tag.name} text={tag.name} />)}
                </div>
            </div>
        </section>
    );
}

export default Book;