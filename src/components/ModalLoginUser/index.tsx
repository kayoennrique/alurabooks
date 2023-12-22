import { AbButton, AbModal, AbTextField } from "alurabooks-ds-develop";
import { useState } from "react";

import imageMain from './assets/login.png';

import './ModalLoginUser.css';

interface PropsModalLoginUser {
    open: boolean
    whenClose: () => void
    whenLogin: () => void
}

const ModalLoginUser = ({ open, whenClose, whenLogin } : PropsModalLoginUser) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const whenSubmitFormular = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = {
            email,
            password,
        }
        console.log(user)
    }

    return (<AbModal 
        title="Login" 
        open={open}
        whenClose={whenClose}    
    >
        <section className="bodyModalRegistration">
            <figure>
                <img src={imageMain} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
            </figure>
            <form onSubmit={whenSubmitFormular}>
                <AbTextField
                    label="E-mail"
                    value={email}
                    onChange={setEmail}
                    type="email"
                />
                <AbTextField 
                    label="Senha"
                    value={password}
                    onChange={setPassword}
                    type="password"
                />
                <div className="actions">
                    <AbButton text="Fazer login"/>
                </div>
            </form>
        </section>
    </AbModal>);
}

export default ModalLoginUser;