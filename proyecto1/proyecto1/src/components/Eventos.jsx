import React from 'react'

const Eventos = () => {

    const eventoClick = () =>{
         console.log('deja de tocarme prro!')
    }

    return (
        <div>
            <hr/>   
            <h2>Eventos</h2>
                <button onClick={()=>eventoClick()}>click</button>
        </div>
    )
}

export default Eventos
