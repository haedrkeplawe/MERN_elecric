import { useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import Nav from "../components/Nav"
import { useQuestContext } from "../hooks/useQuestContext"
import Boxs from "../components/Boxs"
import { useAuthContext } from "../hooks/useAuthContext"

const Exams = () => {
    const type = useLocation().search.slice(6,)
    const { quests, dispatch } = useQuestContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchQuest = async () => {
            const response = await fetch(`/exams?method=${type}`, {
                headers: {
                    "Authorization": `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                const re = json.filter(w => w.type === type)
                dispatch({ type: 'SET_WORKOUTS', payload: re })
            }
        }
        if (user) {
            fetchQuest()
        }
    }, [type, dispatch, user])



    return (
        <>
            <Nav to="home" />
            <div className="mainTitle">
                <h2>{type}</h2>
            </div>
            <Link className="add" to={"/create?type=" + type}>ساهم باضافه سوال</Link>
            <section>
                <div className="contaienr">
                    {quests && quests.map((test, index) => {
                        return (
                            <Boxs key={test._id}
                                index={index}
                                test={test}
                                type={type}
                            />)
                    }

                    )}
                </div>
            </section >
        </>
    )
}

export default Exams