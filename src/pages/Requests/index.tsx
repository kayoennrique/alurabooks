import { AbButton } from "alurabooks-ds-develop";

import axios from 'axios';

import './Requests.css';
import { useEffect, useState } from "react";
import { IRequest } from "../../interfaces/IResquest";

const Requests = () => {

    const formatter = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });

    const [requests, setRequests] = useState<IRequest[]>([])

    useEffect(() => {
        const token = sessionStorage.getItem('token')
        axios.get<IRequest[]>('http://localhost:8000/pedidos', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => setRequests(response.data))
            .catch(erro => console.log(erro))
    }, [])

    const exclude = (request: IRequest) => {
        const token = sessionStorage.getItem('token')
        axios.delete('http://localhost:8000/pedidos/' + request.id, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            setRequests(requests.filter(p => p.id !== request.id))
        })
            .catch(erro => console.log(erro))
    }

    return (<section className="requests">
        <h1>Meus pedidos</h1>
        {requests.map(request => (<div className="request" key={request.id}>
            <ul>
                <li>Pedido: <strong>{request.id}</strong></li>
                <li>Data do pedido: <strong>{new Date(request.date).toLocaleDateString()}</strong></li>
                <li>Valor total: <strong>{formatter.format(request.total)}</strong></li>
                <li>Entrega realizada em: <strong>{new Date(request.delivery).toLocaleDateString()}</strong></li>
                <li>
                    <button onClick={() => exclude(request)}>Excluir</button>
                </li>
            </ul>
            <AbButton text="Detalhes" />
        </div>))}
    </section>)
}

export default Requests;