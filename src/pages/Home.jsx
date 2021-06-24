import React from 'react'
import { useHistory } from 'react-router-dom'

import IllustrationImg from '../assets/illustration.svg'

import '../styles/home.css'

export function Home() {
    const history = useHistory();

    function navigateToAnimes() {
        history.push('/Animes')
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Bem-vindo ao Animedex</strong>
                <p>Procure um anime para assistir e divirta-se</p>
            </aside>    

            <main>
                <div className="main-content">
                    <button onClick={navigateToAnimes} className="create-animes">
                        Entre e procure um anime
                    </button>                
                </div>
            </main>
        </div>
    )   
}


