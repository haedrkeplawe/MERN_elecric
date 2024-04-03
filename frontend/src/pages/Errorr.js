import React from 'react'
import { Link } from 'react-router-dom'

const Errorr = () => {
    return (
        <div><h1>you no have acount </h1>
            <Link to="/login">login</Link>
        </div>
    )
}

export default Errorr