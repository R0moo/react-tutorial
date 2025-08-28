import { useState } from 'react'

const Paragrafo = (props) => {

    const [pontos, setPontos] = useState(0);

    const aumentarPontos = () => {
        setPontos(pontos + 1)
    }

    const diminuirPontos = () => {
        if(pontos == 0){
            return
        }
        setPontos(pontos - 1)
    }


    return (
        <div>
            <p>Bem vindo {props.nome}!!</p>
            <p>{props.nome} tem {pontos} pontos</p>
            <button onClick={aumentarPontos} >+</button>
            <button onClick={diminuirPontos} >-</button>
            <hr />
        </div>)
}

export default Paragrafo
