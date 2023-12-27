import MainTitle from "../../components/MainTitle";
import { getCategoryBySlug } from "../../http";
import { useParams } from "react-router";
import Loader from "../../components/Loader";
import { useQuery } from "@tanstack/react-query";
import BooksList from "../../components/BooksList";

const Categorie = () => {
    const params = useParams()
    const { data: categorie, isLoading } = useQuery(['categoryBySlug', params.slug], () => getCategoryBySlug(params.slug || ''))

    if (isLoading) {
        return <Loader />
    }

    return (<section>
        <MainTitle text={categorie?.name ?? ''} />
        <BooksList categorie={categorie!} />
    </section>);
}

export default Categorie;