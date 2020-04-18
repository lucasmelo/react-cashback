import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import logo from '../../assets/img/logo.png';
import { getItems, getNewItems, getCurrentCash } from '../../mocks/items.mock';
import { FiPower } from 'react-icons/fi';
import { AiOutlineDollar } from 'react-icons/ai';
import { TiHeart } from 'react-icons/ti';
import { FaSyncAlt } from 'react-icons/fa';

export default function Shopping() {
    const history = useHistory();
    const username = localStorage.getItem('username');
    const [items, setItems] = useState([]);
    const [newItems, setNewItems] = useState([]);
    const [currentCash, setCurrentChash] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setItems(getItems);
            setCurrentChash(getCurrentCash);
            setNewItems(getNewItems());
        }, 3000)
    }, [items.length]);

    const handleLogout = () => {
        history.push('/');
    }

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
                <AiOutlineDollar size={50} color="#25442557" style={{ marginBottom: '5px' }} />
                <p>CASHBACK ACUMULADO</p>
                <label>
                    {currentCash.length ?
                        new Intl
                            .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                            .format(currentCash) : 'Carregando...'}
                </label>
            </div>

            <h1>Cadastros aprovados</h1>
            {items.length ? null : <p> Carregando suas informações...</p>}

            <ul>
                {items.map(item => (
                    <li key={item.code}>
                        <strong> CÓDIGO DA COMPRA</strong>
                        <p> {item.code}</p>

                        <strong> VALOR </strong>
                        <p>
                            {item.value}
                        </p>

                        <strong> DATA </strong>
                        <p> {item.date}</p>

                        <strong> % de cashback </strong>
                        <p> {item.cashbackPercent}</p>

                        <strong> R$ de cashback </strong>
                        <p> {item.cashBackValue}</p>

                        <strong> Status do cadastro </strong>
                        <p> {item.status}</p>

                        <span><TiHeart size={20} color="#ff000047" style={{ marginRight: '5px' }} /> Aprovado </span>
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
                            <p>
                                {item.value}
                            </p>

                            <strong> DATA </strong>
                            <p> {item.date}</p>

                            <strong> % de cashback </strong>
                            <p>
                                {item.cashbackPercent || '-'}
                            </p>

                            <strong> R$ de cashback </strong>
                            <p>
                                {item.cashBackValue || '-'}
                            </p>

                            <strong> Status do cadastro </strong>
                            <p> {item.status || 'Em validação'}</p>

                            <span>
                                <FaSyncAlt size={20} color="#c5f0c1" style={{ marginRight: '5px' }} />
                                Em validação <br />
                            </span>
                        </li>
                    ))
                    :
                    <p>Nenhum novo cadastro...</p>
                }
            </ul>
        </div>
    )
}