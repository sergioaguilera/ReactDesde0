import React from 'react'

const Variables = () => {

    const saludo =' ,que rollo'
    const imagen ='http://mycomatherapy.weebly.com/uploads/4/7/9/5/47958041/published/welf.jpg?1566161673'

    return (
        <div>
            <h2>Nuevo componente {saludo}</h2>
            <img src={imagen}></img>
        </div>
    )
}

export default Variables
