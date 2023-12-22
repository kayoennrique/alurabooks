import { Link } from "react-router-dom";
import BotaoNavegacao from "../NavigationButton";
import ModalCadastroUsuario from "../ModalRegistrationUser/ModalCadastroUsuario"
import logo from './assets/logo.png';
import user from './assets/usuario.svg';
import './BarNavigation.css';

const BarNavigation = () => {
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
                <BotaoNavegacao text="Login" textAltSrc="Icone representando um usuário" imageSrc={user} />
            </li>
            <li>
                <BotaoNavegacao
                    text="Cadastrar-se"
                    textAltSrc="Icone representando um usuário"
                    imageSrc={user}
                />
                {/* <ModalCadastroUsuario /> */}
            </li>
        </ul>
    </nav>)
}

export default BarNavigation;