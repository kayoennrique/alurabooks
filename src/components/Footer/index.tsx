import './Footer.css';

const Footer = () => {
    return (<footer className="footer">
        <h2 className="footer__title">Grupo Alura</h2>
        <ul className="list-footer">
            <li className="list-footer__title">Educação</li>
            <li className="list-footer__item">
                <img src="/images/CasaDoCodigo.svg" alt="Logo da casa do código" />
                <a href="#!" className="list-footer__link">Casa do código</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/Caelum.svg" alt="Logo da caelum" />
                <a href="#!" className="list-footer__link">Caelum</a>
            </li>
        </ul>

        <ul className="list-footer">
            <li className="list-footer__title">Educação online</li>
            <li className="list-footer__item">
                <img src="/images/Alura.svg" alt="Logo da Alura" />
                <a href="#!" className="list-footer__link">Alura</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/AluraEmpresas.svg" alt="Logo da Alura para Empresas" />
                <a href="#!" className="list-footer__link">Alura para Empresas</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/AluraLATAM.svg" alt="Logo da Alura Latam" />
                <a href="#!" className="list-footer__link">Alura LATAM</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/AluraStart.svg" alt="Logo da Alura START" />
                <a href="#!" className="list-footer__link">Alura Start</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/MusicDot.svg" alt="Logo da Music Dot" />
                <a href="#!" className="list-footer__link">Music Dot</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/AluraLingua.svg" alt="Logo da Alura Lingua" />
                <a href="#!" className="list-footer__link">Alura Lingua</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/PM3.svg" alt="Logo da PM3" />
                <a href="#!" className="list-footer__link">PM3</a>
            </li>
        </ul>

        <ul className="list-footer">
            <li className="list-footer__title">Comunidade</li>
            <li className="list-footer__item">
                <img src="/images/HipstersTech.svg" alt="Logo do Hipsters ponto Tech" />
                <a href="#!" className="list-footer__link">Hipsters ponto Tech</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/ScubaDev.svg" alt="Logo do Scuba Dev" />
                <a href="#!" className="list-footer__link">Scuba Dev</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/LayersTech.svg" alt="Logo do Layers ponto Tech" />
                <a href="#!" className="list-footer__link">Layers ponto Tech</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/LikeABoss.svg" alt="Logo do Like a Boss" />
                <a href="#!" className="list-footer__link">Like a Boss</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/CarreiraSemFronteira.svg" alt="Logo do Carreira sem fronteiras" />
                <a href="#!" className="list-footer__link">Carreira sem fronteiras</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/HipstersJobs.svg" alt="Logo do Hipsters ponto jobs" />
                <a href="#!" className="list-footer__link">Hipsters ponto jobs</a>
            </li>
            <li className="list-footer__item">
                <img src="/images/GUJ.svg" alt="Logo do GUJ" />
                <a href="#!" className="list-footer__link">GUJ</a>
            </li>
        </ul>
    </footer>);
}

export default Footer;