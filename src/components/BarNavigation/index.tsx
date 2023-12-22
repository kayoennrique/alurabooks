import { Link } from "react-router-dom";
import NavigationButton from "../NavigationButton";
import logo from './assets/logo.png';
import user from './assets/user.svg';
import './BarNavigation.css';
import ModalRegistrationUser from "../ModalRegistrationUser";
import ModalLoginUser from "../ModalLoginUser"
import { useState } from "react";

const BarNavigation = () => {

    const [openRegistrationModal, setOpenRegistrationModal] = useState(false);
    const [modalLoginOpen, setModalLoginOpen] = useState(false);
    const [userIsLogged, setUserIsLogged] = useState(false);

    const whenLogin = () => {
        setUserIsLogged(true)
        setModalLoginOpen(false)
    }
    const actionsWhenDeslogado = (<>
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
    </>)

    const actionsWhenLogged = (<>
        <li>
            <Link to="/minha-conta/pedidos">Minha Conta</Link> 
        </li>
    </>)

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
                    <li>
                        <Link to="/">
                            Frontend
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Programação
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Infraestrutura
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Design e UX
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="actions">
            {userIsLogged ? actionsWhenLogged : actionsWhenDeslogado}
        </ul>
    </nav>)
}

export default BarNavigation;