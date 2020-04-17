import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';
import { getItems, getNewItems, getCurrentCash } from '../../mocks/items.mock';

import { FiPower } from 'react-icons/fi'

export default function Shopping() {
    const username = localStorage.getItem('username');
    const [items, setItems] = useState([]);
    const history = useHistory();
    const [currentCash, setCurrentChash] = useState("");

    useEffect(() => {
        setItems(getItems);
        setCurrentChash(getCurrentCash)
    }, [items.length]);

    const handleLogout = () => {
        history.push('/')
    }

    const newItems = getNewItems();

    return (
        <div className="profile-container">
            <header>
                <span>Bem-vindo (a), {username.toUpperCase()}</span>
                <img src={logo} alt="Logo" />
                <Link to="/purchase" className="button">CADASTRAR COMPRA</Link>

                <button onClick={handleLogout} style={{ marginLeft: '15px' }}>
                    <FiPower size={30} color="#407d3b" />
                </button>
            </header>

            <div className="status-cashback">
                <div>CASHBACK DISPONÍVEL</div>
                <b>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currentCash)}</b>
            </div>

            <h1>Cadastros aprovados</h1>
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
                        <p> {item.cashBackValue}</p>

                        <strong> Status do cadastro </strong>
                        <p> {item.status}</p>

                    </li>
                ))}
            </ul>


            <h1>Cadastros em validação</h1>
            <ul>
                {newItems.length ?
                    newItems.map(item => (
                        <li key={item.code}>
                            <strong> CÓDIGO DA COMPRA</strong>
                            <p> {item.code}</p>

                            <strong> VALOR </strong>
                            <p> R$ {item.value}</p>

                            <strong> DATA </strong>
                            <p> {item.date}</p>

                            <strong> % de cashback </strong>
                            <p> {item.cashBackValue || '-'}</p>

                            <strong> R$ de cashback </strong>
                            <p> {item.cashbackValue || '-'}</p>

                            <strong> Status do cadastro </strong>
                            <p> {item.status || 'Em validação'}</p>
                        </li>
                    ))
                    :
                    <strong>Nenhum novo cadastro</strong>
                }

            </ul>
        </div >
    )
}