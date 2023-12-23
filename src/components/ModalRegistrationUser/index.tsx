import { AbButton, AbModal, AbTextField } from "alurabooks-ds-develop";
import { useState } from "react";

import imageMain from './assets/login.png';

import './ModalRegistrationUser.css';
import http from "../../http";

interface PropsModalRegistrationUser {
    open: boolean
    whenClose: () => void
}

const ModalRegistrationUser = ({ open, whenClose } : PropsModalRegistrationUser) => {

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
    
            http.post('public/registrar', user)
                .then(() => {
                    alert('Usuário foi cadastrado com sucesso!')
                    setName('')
                    setEmail('')
                    setAddress('')
                    setComplement('')
                    setCep('')
                    setPassword('')
                    setPasswordConfirmed('')
                    whenClose()
                })
                .catch(() => {
                    alert('OPS! Alguma coisa deu errado!')
                })
        }

    return (<AbModal
        title="Cadastrar"
        open={open}
        whenClose={whenClose}
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