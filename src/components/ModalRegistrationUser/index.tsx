import { AbButton, AbModal, AbTextField } from "alurabooks-ds-develop";
import { useState } from "react";
import axios from "axios";

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
    
            axios.post('http://localhost:8000/public/registrar', user)
                .then(() => {
                    alert('Usuário foi cadastrado com sucesso!')
                    setName('')
                    setEmail('')
                    setAddress('')
                    setComplement('')
                    setCep('')
                    setPassword('')
                    setPasswordConfirmed('')
                })
                .catch(() => {
                    alert('OPS! Alguma coisa deu errado!')
                })
        }

    return (<AbModal
        title="Cadastrar"
        open={true}
        whenClose={() => console.log('fecha ai')}
    >
        <div className='bodyModalRegistration'>
            <figure>
                <img src={imageMain} alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado." />
            </figure>
            <form onSubmit={whenSubmitFormular}>
                <AbTextField
                    value={name}
                    label='Nome'
                    onChange={setName}
                />
                <AbTextField
                    value={email}
                    label='E-mail'
                    onChange={setEmail}
                />
                <AbTextField
                    value={address}
                    label='Endereço'
                    onChange={setAddress}
                />
                <AbTextField
                    value={complement}
                    label='Complemento'
                    onChange={setComplement}
                />
                <AbTextField
                    value={cep}
                    label='CEP'
                    onChange={setCep}
                />
                <AbTextField
                    value={password}
                    label='Senha'
                    onChange={setPassword}
                    type="password"
                />
                <AbTextField
                    value={passwordConfirmed}
                    label='Confirmar senha'
                    onChange={setPasswordConfirmed}
                    type="password"
                />
                <div className="actions">
                    <AbButton text="Cadastrar"/>
                </div>
            </form>
        </div>
    </AbModal>);
}

export default ModalRegistrationUser;