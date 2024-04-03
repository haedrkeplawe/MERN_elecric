import { useState } from 'react'
import { Navigate, Link } from "react-router-dom"
import { OpenHandel, CloseHandel } from "../utils/Function_action"
import { useLogout } from '../hooks/useLogout'

const Nav = ({ to }) => {
    const { logout } = useLogout()
    const LogoutEvent = () => {
        logout()
    }
    const [redirect, setRedirect] = useState(false)
    if (redirect) {
        return <Navigate to={`/login`} />
    }
    return (
        <nav>
            <div className="head">
                <h2>المواد المتوفره</h2>
                <span className="open"
                    onClick={() => OpenHandel()}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <span className="close"
                    onClick={() => CloseHandel()} >X</span>
            </div>
            <div className="content">
                <div className="one"
                >
                    <div className="main">
                        <Link to={"/exams?type=arabic"}>
                            عربي
                        </Link>
                    </div>
                </div>
                <div className="one">
                    <div className="main">
                        <Link to={"/exams?type=math"}>
                            رياضيات
                        </Link>
                    </div>
                </div>
                <div className="one">
                    <div className="main">
                        <Link to={"/exams?type=math2"}>
                            2رياضيات
                        </Link>
                    </div>
                </div>
            </div>
            <a onClick={e => LogoutEvent()}>تسجبل الخروج</a>
        </nav>
    )
}

export default Nav