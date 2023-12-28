import { AbTextField } from "alurabooks-ds-develop";
import { useState } from "react";
import Banner from "../../components/Banner";
import BooksFeatured from "../../components/BooksFeatured";
import Newsletter from "../../components/Newsletter";
import TagsCategories from "../../components/TagsCategories";
import Title from "../../components/Title";

import './Home.css';
import { getBooksFeatured } from "../../http";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
    const [search, setSearch] = useState("");

    const { data: releases } = useQuery(['destaques'], () => getBooksFeatured('lancamentos'))
    const { data: bestSellers } = useQuery(['maisVendidos'], () => getBooksFeatured('mais-vendidos'))

    return (<section className="home">
        <Banner subtitle="Encontre em nossa estante o que precisa para seu desenvolvimento!" title="Já sabe por onde começar?">
            <form className="search">
                <AbTextField
                    label="search"
                    placeholder="Qual será sua próxima leitura?"
                    value={search}
                    onChange={setSearch}
                    darkmode={true}
                    placeholderAlign="center"
                />
            </form>
        </Banner>
        <Title text="ÚLTIMOS LANÇAMENTOS" />
        <BooksFeatured books={releases ?? []} />
        <Title text="MAIS VENDIDOS" />
        <BooksFeatured books={bestSellers ?? []} />
        <TagsCategories />
        <Newsletter />
    </section>)
}

export default Home