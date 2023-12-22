import { AbTextField } from "alurabooks-ds-develop";
import { useState } from "react";
import Banner from "../../components/Banner";
import BooksFeatured from "../../components/BooksFeatured";
import Newsletter from "../../components/Newsletter";
import TagsCategories from "../../components/TagsCategories";
import Title from "../../components/Title";

import './Home.css';

const Home = () => {
    const [search, setSearch] = useState("")

    const releases = [
        {
            author: 'Tárcio Zemel',
            description: 'Técnicas e ferramentas que fazem a diferença nos seus estilos',
            image: '/images/books/css.jpg',
            name: 'CSS Eficiente',
            price: 29.9
        },
        {
            author: 'Sass',
            description: 'Aprendendo pré-processadores CSS',
            image: '/images/books/sass.jpg',
            name: 'Natan Souza',
            price: 29.9
        },
        {
            author: 'Diego Eis',
            description: 'O caminho das pedras para ser um dev Front-End',
            image: '/images/books/frontend.jpg',
            name: 'Guia Front-End',
            price: 29.9
        },
    ]
    const bestSellers = [
        {
            author: 'Thiago da Silva Adriano',
            description: 'Melhore suas aplicações JavaScript',
            image: '/images/books/typescript.jpg',
            name: 'Guia prático de TypeScript',
            price: 29.9
        },
        {
            author: 'Akira Hanashiro',
            description: 'A revolucionária linguagem de consulta e manipulação de dados para APIs',
            image: '/images/books/graphql.jpg',
            name: 'GraphQL',
            price: 29.9
        },
        {
            author: 'Vinícius Carvalho',
            description: 'PostgreSQL',
            image: '/images/books/postgre.jpg',
            name: 'PostgreSQL',
            price: 29.9
        },
    ]

    return (<section className="home">
        <Banner subtitle="Encontre em nossa estante o que precisa para seu desenvolvimento!" title="Já sabe por onde começar?">
            <form className="search">
                <AbTextField
                    placeholder="Qual será sua próxima leitura?"
                    value={search}
                    onChange={setSearch}
                    darkmode={true}
                    placeholderAlign="center"
                />
            </form>
        </Banner>
        <Title text="ÚLTIMOS LANÇAMENTOS"/>
        <BooksFeatured books={releases}/>
        <Title text="MAIS VENDIDOS"/>
        <BooksFeatured books={bestSellers}/>
        <TagsCategories />
        <Newsletter />
    </section>)
}

export default Home