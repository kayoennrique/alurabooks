import { ICategorie } from "../../interfaces/ICategorie";

interface BooksListProps {
    categorie: ICategorie
}

const BooksList = ({categorie}: BooksListProps) => {

    console.log(categorie);
    
    return <></>
}

export default BooksList;