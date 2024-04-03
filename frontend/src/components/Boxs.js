import React from 'react'
import { Link } from 'react-router-dom'
import { ChoseeHandel, ChickHandel } from "../utils/Function_action"
import { useQuestContext } from "../hooks/useQuestContext"

const Boxs = ({ index, test, type }) => {
    const { quests, dispatch } = useQuestContext()

    const DeleteTestHandel = async () => {
        const response = await fetch('exams/delete/' + test._id, {
            method: 'DELETE',
        })
        const json = await response.json()
        console.log(json);
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return (
        < div className="box" key={test._id} >
            <h2>
                <span>{++index}</span>
                {test.quest}
            </h2>
            <h4 data-id={`${test._id}`}
                data-name="1"
                onClick={() => ChoseeHandel(1, test._id)}>
                {test.ans1}</h4>
            <h4 data-id={`${test._id}`}
                data-name="2"
                onClick={() => ChoseeHandel(2, test._id)}>
                {test.ans2}</h4>
            <h4 data-id={`${test._id}`}
                data-name="3"
                onClick={() => ChoseeHandel(3, test._id)}>
                {test.ans3}</h4>
            <h4 data-id={`${test._id}`}
                data-name="4"
                onClick={() => ChoseeHandel(4, test._id)}>
                {test.ans4}</h4>
            <h4 data-id={`${test._id}`}
                data-name="5"
                onClick={() => ChoseeHandel(5, test._id)}>
                {test.ans5}</h4>
            <div >
                <div className="button">
                    <button
                        id="check"
                        data-id={`${test._id}`}
                        data-name={`${test.number}`}
                        onClick={() => ChickHandel(index - 1)}>
                        تحقق
                    </button>
                </div>
                <Link className="button" to={"/edit?type=" + type + "&&id=" + test._id}>
                    <button style={{ "background": "green" }}>
                        update
                    </button>
                </Link>
                <div className="button">
                    <button style={{ "background": "red" }} onClick={() => DeleteTestHandel(test._id, type)}>delete</button>
                </div>
            </div>
            <div className="name">
                !
                <span
                >:المساهم<br />
                    {test.name}
                </span>
            </div>
        </div>
    )
}

export default Boxs