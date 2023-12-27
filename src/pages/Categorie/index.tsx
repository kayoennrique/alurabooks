import { useEffect, useState } from "react";
import MainTitle from "../../components/MainTitle"
import { ICategorie } from "../../interfaces/ICategorie";
import http from "../../http";
import { useParams } from "react-router";
import Loader from "../../components/Loader";

const Categorie = () => {
    const [categorie, setCategorie] = useState<ICategorie>();
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        setIsLoading(true)
        http.get<ICategorie[]>('categorias', {
            params: {
                slug: params.slug
            }
        }).then(response => {
           setCategorie(response.data[0])
           setIsLoading(false)
        })
    }, []);

    if (isLoading) {
        return <Loader />
    }

    return (<section>
        <MainTitle text={categorie?.name ?? ''} />
    </section>);
}

export default Categorie;