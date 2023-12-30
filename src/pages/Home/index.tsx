import { AbTextField } from "alurabooks-ds-develop";
import { useState } from "react"
import Banner from "../../components/Banner"
import BooksFeatured from "../../components/BooksFeatured";
import Newsletter from "../../components/Newsletter"
import TagsCategories from "../../components/TagsCategories"
import Title from "../../components/Title"
import { IBook } from "../../interfaces/IBooks"
import { GET_HIGHLIGHTS } from "../../graphql/books/queries"
import { useQuery } from "@apollo/client"

import './Home.css'

const Home = () => {
    const [search, setSearch] = useState("")

    const { data } = useQuery<{ highlights: { releases: IBook[], bestSellers: IBook[] } }>(GET_HIGHLIGHTS)
    return (<section className="home">
        <Banner subtitle="Encontre em nossa estante o que precisa para seu desenvolvimento!" title="Já sabe por onde começar?">
            <form className="buscar">
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
        <BooksFeatured  books={data?.highlights.releases ?? []}/>
        <Title text="MAIS VENDIDOS"/>
        <BooksFeatured  books={data?.highlights.bestSellers ?? []}/>
        <TagsCategories />
        <Newsletter />
    </section>)
}

export default Home