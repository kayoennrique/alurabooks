import { useQuery } from "@tanstack/react-query"
import { getAuthor } from "../../http"
import BlockAbout from "../BlockAbout"

interface AboutAuthorProps {
    authorId: number
}

const AboutAuthor = ({ authorId } : AboutAuthorProps) => {
    const { data: author } = useQuery(['author', authorId], () => getAuthor(authorId));

    return <BlockAbout title="Sobre o Autor" body={author?.about} />
}

export default AboutAuthor;