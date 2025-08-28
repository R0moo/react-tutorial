import { useState } from 'react'

const CaixaTexto = (props) => {

    const [texto, setTexto] = useState('');

    const gerenciaTexto = (e) => {
        setTexto(e.target.value)
    }

    return (
        <div>
            <h3>Input</h3>
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <p>Você digitou: {texto}</p>
            <hr />
        </div>)
}

export default Paragrafo
