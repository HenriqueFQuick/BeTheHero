import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault();
        
        try{
            const res = await api.post('http:/localhost:3333/sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', res.data.name);
            history.push('/profile');
        }catch(err){
            console.log('ERRO: ',err.message)
        }
    }


    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="BeTheHeroe"/>
                <form onSubmit={handleLogin}>
                    <h1>Faca seu logon</h1>
                    <input 
                        placeholder="Sua Id"
                        value={id}
                        onChange={e => setId(e.currentTarget.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Nao tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}