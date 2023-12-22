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

    return (<AbModal
        title="Cadastrar"
        open={true}
        whenClose={() => console.log('fecha ai')}
    >
        <div className='corpoModalCadastro'>
            <figure>
                <img src={imageMain} alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado." />
            </figure>
            <form>
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
                />
                <AbTextField
                    value={passwordConfirmed}
                    label='Confirmar senha'
                    onChange={setPasswordConfirmed}
                />
                <footer>
                    <AbButton text='Cadastrar' />
                </footer>
            </form>
        </div>
    </AbModal>);
}

export default ModalRegistrationUser;