import { Link } from "react-router-dom";
import NavigationButton from "../NavigationButton";
import logo from './assets/logo.png';
import user from './assets/user.svg';
import './BarNavigation.css';
import ModalRegistrationUser from "../ModalRegistrationUser";
import { useState } from "react";

const BarNavigation = () => {

    const [openRegistrationModal, setOpenRegistrationModal] = useState(false);

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
            <li>
                <NavigationButton
                    text="Login"
                    textAltSrc="Icone representando um usuário"
                    imageSrc={user} />
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
                    whenClose={() => setOpenRegistrationModal(false)} />
            </li>
        </ul>
    </nav>)
}

export default BarNavigation;