import React from 'react'

const Random = () => {

    const number = Math.floor(Math.random() * 100)

    return <h1 style={{ color: 'red' }}>Random number is {number}</h1>
}

export default Random