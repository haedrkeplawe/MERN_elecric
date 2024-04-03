import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const { login, error, isLoading } = useLogin()

    const LoginEvent = async (e) => {
        e.preventDefault()
        await login(username, password)
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <form className="login" onSubmit={
            e => LoginEvent(e)
        }>
            <h2>تسجيل الدخول</h2>
            <input type="text"
                name="username"
                placeholder="UserName"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input type="submit" value="تسجيل الدخول" className="btn" />
            <p>جديد في هذا الموقع ? <Link to="/register">انشىء حساب جديد</Link></p>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login