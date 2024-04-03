import React from 'react'
import Nav from '../components/Nav'

const Home = () => {
    return (
        <>
            <Nav to="exams" />
            <div className="mainTitle">
                <h2>اختر الدورات من الاعلى</h2>
            </div>
        </>
    )
}

export default Home