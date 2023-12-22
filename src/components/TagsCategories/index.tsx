import { AbTag } from 'alurabooks-ds-develop';

import './TagsCategories.css';

const TagsCategories = () => {

    const tags = [
        'Android',
        'Orientação a Objetos',
        'Marketing Digital',
        'Agile',
        'Startups',
        'HTML & CSS',
        'Java',
        'Python',
    ]

    return (<section className="TagsCategories">
        <h4>CATEGORIAS MAIS BUSCADAS</h4>
        <div className="container">
            {tags.map(tag => <AbTag text={tag} key={tag}/>)}
        </div>
    </section>);
}

export default TagsCategories;