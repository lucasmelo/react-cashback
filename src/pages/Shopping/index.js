import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';
import api from '../../api';

export default function Shopping() {
    const username = localStorage.getItem('username');
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         api.get('5e95e0a82f0000b9760255db')
    //             .then(response => setItems(response.data)
    //             )
    //     }, 2000)
    // }, []);

    const items = [{ "code": "5578892", "value": "555", "date": "15/02/2020", "cashbackPercent": "15%", "status": "Aprovado" }, { "code": "2223321", "value": "555", "date": "15/02/2020", "cashbackPercent": "15%", "status": "Aprovado" }];

    return (
        <div className="profile-container">
            <header>
                <span>Bem-vindo (a), {username}</span>
                <img src={logo} alt="Logo" />
                <Link to="/purchase" className="button">Cadastrar compra</Link>
            </header>

            <h1>Produtos comprados</h1>
            <ul>
                {items.map(item => (
                    <li key={item.code}>
                        <strong> CÓDIGO DA COMPRA</strong>
                        <p> {item.code}</p>

                        <strong> VALOR </strong>
                        <p> R$ {item.value}</p>

                        <strong> DATA </strong>
                        <p> {item.date}</p>

                        <strong> % de cashback </strong>
                        <p> {item.cashbackPercent}</p>

                        <strong> R$ de cashback </strong>
                        <p> {item.cashbackValue}</p>

                        <strong> Status do cadastro </strong>
                        <p> {item.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}