import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Navigate } from "react-router-dom"
import { useSignup } from "../hooks/useSignup"

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const { signup, error, isLoading } = useSignup()

    const handelSubmit = async (e) => {
        e.preventDefault()

        await signup(username, password)
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <form className="login"
            onSubmit={e => handelSubmit(e)}>
            <h2>انشىء حساب جديد</h2>
            <input type="text"
                name="username"
                placeholder="UserName"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input type="text"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input type="submit" value="انشىء حساب" className="btn" />
            <p>لديك حساب بالفعل ? <Link to="/login">تسجيل دخول</Link></p>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Register