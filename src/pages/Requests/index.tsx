import { AbButton } from "alurabooks-ds-develop";
import { useEffect, useState } from "react";
import { IRequest } from "../../interfaces/IResquest";
import http from "../../http";
import './Requests.css';

const Requests = () => {

    const formatter = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });

    const [requests, setRequests] = useState<IRequest[]>([])

    useEffect(() => {
        http.get<IRequest[]>('pedidos')
            .then(response => setRequests(response.data))
            .catch(erro => console.log(erro))
    }, [])

    const exclude = (request: IRequest) => {
        http.delete('pedidos/' + request.id)
            .then(() => setRequests(requests.filter(p => p.id !== request.id)))
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