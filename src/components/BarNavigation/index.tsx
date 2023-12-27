import { Link, useNavigate } from "react-router-dom";
import NavigationButton from "../NavigationButton";
import logo from './assets/logo.png';
import user from './assets/user.svg';
import './BarNavigation.css';
import ModalRegistrationUser from "../ModalRegistrationUser";
import ModalLoginUser from "../ModalLoginUser"
import { useEffect, useState } from "react";
import { ICategorie } from "../../interfaces/ICategorie";
import http from "../../http";
import './BarNavigation.css'

const BarNavigation = () => {

    const [openRegistrationModal, setOpenRegistrationModal] = useState(false);
    const [modalLoginOpen, setModalLoginOpen] = useState(false);
    const [categories, setCategories] = useState<ICategorie[]>([]);

    useEffect(() => {
        http.get<ICategorie[]>('categorias')
            .then(response => {
                console.log(response.data);
                setCategories(response.data);
            });
    }, []);

    let navigate = useNavigate();

    const token = sessionStorage.getItem('token');

    const [userIsLogged, setUserIsLogged] = useState<boolean>(token != null);

    const whenLogin = () => {
        setUserIsLogged(true);
        setModalLoginOpen(false);
    }

    const logOut = () => {
        setUserIsLogged(false)
        sessionStorage.removeItem('token');
        navigate('/');
    }

    return (<nav className="ab-navbar">
        <h1 className="logo">
            <Link to="/">
                <img className="logo" src={logo} alt="Logo da AluraBooks" />
            </Link>
        </h1>
        <ul className="navigation">
            <li>
                <a href="#!">Categorias</a>
                <ul className="submenu">
                    {categories.map(categorie => (<li key={categorie.id}>
                        <Link to={`/categorias/${categorie.slug}`}>
                            {categorie.name}
                        </Link>
                    </li>))}
                </ul>
            </li>
        </ul>
        <ul className="actions">
            {!userIsLogged && (<>
                <li>
                    <NavigationButton
                        text="Login"
                        textAltSrc="Icone representando um usuário"
                        imageSrc={user}
                        onClick={() => setModalLoginOpen(true)}
                    />
                    <ModalLoginUser
                        open={modalLoginOpen}
                        whenClose={() => setModalLoginOpen(false)}
                        whenLogin={whenLogin}
                    />
                </li>
                <li>
                    <NavigationButton
                        text="Cadastrar-se"
                        textAltSrc="Icone representando um usuário"
                        imageSrc={user}
                        onClick={() => setOpenRegistrationModal(true)}
                    />
                    <ModalRegistrationUser
                        open={openRegistrationModal}
                        whenClose={() => setOpenRegistrationModal(false)}
                    />
                </li>
            </>)}
            {userIsLogged &&
                <>
                    <li>
                        <Link to="/minha-conta/pedidos">Minha conta</Link>
                    </li>
                    <li>
                        <NavigationButton 
                            text="Logout"
                            textAltSrc="Icone representando um usuário"
                            imageSrc={user}
                            onClick={logOut}
                        />
                    </li>
                </>
            }
        </ul>
    </nav>);
}

export default BarNavigation;