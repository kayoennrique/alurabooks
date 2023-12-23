import { Link, Outlet } from "react-router-dom";

import './LoggedArea.css';

const LoggedArea = () => {
    return (<>
        <h1 className="LoggedArea__title">Minha conta</h1>
        <section className="LoggedArea">
            <div className="menu">
                <ul className="navigation">
                    <li>
                        <Link to="/area-logada/pedidos">Pedidos</Link>
                    </li>
                    <li>
                        <Link to="/area-logada/trocas">Trocas</Link>
                    </li>
                    <li>
                        <Link to="/area-logada/cupons">Cupons</Link>
                    </li>
                    <li>
                        <Link to="/area-logada/dados">Seus dados</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </section>
    </>);
}

export default LoggedArea;