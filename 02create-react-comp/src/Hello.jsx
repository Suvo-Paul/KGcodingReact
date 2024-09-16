import React from 'react'

const Hello = () => {

    let myName = "Suvo"

    let fullName = () => {
        return "Suvo Paul"
    }

    return <h3>{fullName()}</h3>
}

export default Hello