import axios from 'axios'
import { useEffect, useState } from 'react'
import { useLocation, Navigate } from "react-router-dom"
import { useQuestContext } from "../hooks/useQuestContext"

const EditQuset = ({ }) => {
    const indexOfAnd = useLocation().search.indexOf("&&")
    const type = useLocation().search.slice(6, indexOfAnd)
    const id = useLocation().search.slice(indexOfAnd + 5,)
    const [redirect, setRedirect] = useState(false)


    const [name, setName] = useState("")
    const [quest, setQuest] = useState("")
    const [ans1, setAns1] = useState("")
    const [ans2, setAns2] = useState("")
    const [ans3, setAns3] = useState("")
    const [ans4, setAns4] = useState("")
    const [ans5, setAns5] = useState("")
    const [number, setNumber] = useState(0)
    const { quests, dispatch } = useQuestContext()

    useEffect(() => {
        axios.get(`/exams/add-old/` + id).then((response) => {
            setName(response.data.result.name)
            setQuest(response.data.result.quest)
            setAns1(response.data.result.ans1)
            setAns2(response.data.result.ans2)
            setAns3(response.data.result.ans3)
            setAns4(response.data.result.ans4)
            setAns5(response.data.result.ans5)
            setNumber(response.data.result.number)
        })
    }, [])

    const UpdateTestHandel = async (e) => {
        e.preventDefault()
        const response = await fetch(`/exams/add-old/` + id,
            {
                method: "PATCH",
                body: JSON.stringify({
                    name,
                    type,
                    number,
                    ans5,
                    ans4,
                    ans3,
                    ans2,
                    ans1,
                    quest
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        const json = await response.json()
        if (response.ok) {
            dispatch({ type: "UPDATE_TASK", payload: json })
            setRedirect(true)
        }
    }

    if (redirect) {
        return <Navigate to={`/exams?type=${type}`} />
    }
    return (
        <section className="add">
            <form >
                <div>
                    <label htmlFor="name">اسم المساهم #اختياري</label>
                    <textarea name="name" id="name" placeholder="ادخل اسمك"
                        onChange={e => setName(e.target.value)}
                        value={name} />
                </div>
                <div>
                    <label htmlFor="quest">السؤال</label>
                    <textarea name="quest" id="quest" placeholder="السؤال"
                        value={quest} onChange={e => setQuest(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="ans1"> الجواب الاول</label>
                    <textarea name="ans1" id="ans1" placeholder="الجواب الاول"
                        value={ans1} onChange={e => setAns1(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="ans2"> الجواب الثاني</label>
                    <textarea name="ans2" id="ans2" placeholder="الجواب الثاني"
                        value={ans2} onChange={e => setAns2(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="ans3"> الجواب الثالث</label>
                    <textarea name="ans3" id="ans3" placeholder="الجواب الثالث"
                        value={ans3} onChange={e => setAns3(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="ans4"> الجواب الرابع</label>
                    <textarea name="ans4" id="ans4" placeholder="الجواب الرابع"
                        value={ans4} onChange={e => setAns4(e.target.value)} />

                </div>
                <div>
                    <label htmlFor="ans5"> الجواب الخامس</label>
                    <textarea name="ans5" id="ans5" placeholder="الجواب الخامس"
                        value={ans5} onChange={e => setAns5(e.target.value)} />
                </div>
                <div>
                    {console.log()}
                    <label htmlFor="number"> رقم الجواب الصحيح</label>
                    <input

                        type="number"
                        name="number"
                        id="number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                </div>
                <div className="button">
                    <button type="submit" onClick={(e) => UpdateTestHandel(e)}>تعديل</button>
                </div>
            </form>
        </section>
    )
}

export default EditQuset