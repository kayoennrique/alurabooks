import { ReactNode } from "react";
import './Banner.css';
import bg from './assets/fundo.png';

interface BannerProps {
    title?: string
    subtitle?: string
    children?: ReactNode
}

const Banner = ({ title, subtitle, children } : BannerProps) => {
    return (<section className="banner-main" style={{ backgroundImage: `url(${bg})`}}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        {children}
    </section>);
}

export default Banner