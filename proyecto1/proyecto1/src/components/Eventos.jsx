import React, {useState} from 'react'

const Eventos = () => {

    const [texto,setTexto] = useState ('Este es el estado inicial del texto antes del click')
    const eventoClick = () =>{
         console.log('deja de tocarme prro!')
         setTexto('El  texto ha cambiado despues del click ')
    }

    return (
        <div>
            <hr/>   
            <h2>{texto}</h2>
                <button onClick={()=>eventoClick()}>click</button>
        </div>
    )
}

export default Eventos
