import React from 'react'

const Contador = () => {

    const [contador,setContador] = React.useState(0)
    
    const sumaCont =() =>{

        console.log('click en el contador')
        setContador(contador+1)

    }

        return (
            <div>
                <hr></hr>
                <h2>Contador</h2>
                <h3>{contador}</h3>
                <h4>{contador === 5 ?'por el culo te la inco' : 'aaaa que chiido' }</h4>
                <button onClick={() => sumaCont()}>+1 al contador</button>
            </div>
        )
}

export default Contador
