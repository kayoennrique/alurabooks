import { AbButton, AbModal, AbTextField } from "alurabooks-ds-develop";
import { useState } from "react";

import imageMain from './assets/login.png';

import './ModalRegistrationUser.css';


const ModalRegistrationUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [complement, setComplement] = useState('');
    const [cep, setCep] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmed, setPasswordConfirmed] = useState('');

    const whenSubmitFormular = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = {
            name,
            email,
            password,
            address,
            cep,
            complement
        }
        console.log(user)
        alert('Usuário foi cadastrado com sucesso!')
    }

    return (<AbModal 
        title="Cadastrar" 
        open={true}
        whenClose={() => console.log('fecha ai')}    
    >
        <section className="bodyModalRegistration">
            <figure>
                <img src={imageMain} alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura" />
            </figure>
            <form onSubmit={whenSubmitFormular}>
                <AbTextField 
                    label="Name"
                    value={name}
                    onChange={setName}
                />
                <AbTextField 
                    label="E-mail"
                    value={email}
                    onChange={setEmail}
                    type="email"
                />
                <AbTextField 
                    label="Endereço"
                    value={address}
                    onChange={setAddress}
                />
                <AbTextField 
                    label="Complemento"
                    value={complement}
                    onChange={setComplement}
                />
                <AbTextField 
                    label="CEP"
                    value={cep}
                    onChange={setCep}
                />
                <AbTextField 
                    label="Senha"
                    value={password}
                    onChange={setPassword}
                    type="password"
                />
                <AbTextField 
                    label="Confirmação da senha"
                    value={passwordConfirmed}
                    onChange={setPasswordConfirmed}
                    type="password"
                />
                <div className="actions">
                    <AbButton text="Cadastrar"/>
                </div>
            </form>
        </section>
    </AbModal>)
}

export default ModalRegistrationUser