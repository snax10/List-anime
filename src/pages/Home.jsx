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
                <img src={IllustrationImg} alt="Ilustração"/>
                <strong>Bem-vindo ao Animese</strong>
                <p>Procure um anime para assistir e divirta-se</p>
            </aside>    

            <main>
                <div className="main-content">
                <img src="https://pbs.twimg.com/profile_images/1335770735562907648/ggaDR0JG_400x400.jpg"/>
                    <button onClick={navigateToAnimes} className="button-animes">
                        Entre e procure um anime
                    </button>                
                </div>
            </main>
        </div>
    )   
}


