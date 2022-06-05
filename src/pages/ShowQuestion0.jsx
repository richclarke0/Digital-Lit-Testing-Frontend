import { useState } from "react"
import { Link } from "react-router-dom"

import { useParams, useNavigate } from "react-router-dom"

export default function Show(props) {
    const { id } = useParams()
    const questions = props.questions
    const question = questions.find((p) => p._id === id)
    const [answerCheck, setAnswerCheck] = useState(<p>Select an answer...</p>)

function multiChange(event) {
    // console.log(event.target.value)
    if (question.multis[event.target.value] === question.answer) {
        setAnswerCheck(
            <p>CORRECT!</p>
        )
    } else {
        setAnswerCheck(
            <p>WRONG</p>
        )
    }
}

    console.log("question", question)
    const multipleChoice = () => {
        return question.multis.map((option, index) => (
            <option value={index}>{option}</option>
        ))
    }
    return (
        <div className="show">
            <p>Question Type: {question.type == "multi" ? "Multiple Choice" : "Text"}</p>
            <div className="icondisp">
                <img src={question.img} alt="" />
                <p>Question: {question.question}</p>
            </div>
            <select onChange={multiChange}>{multipleChoice()}</select>
            {/* <p>Correct answer: {question.answer}</p> */}
            {answerCheck}
            <Link to={`/question/edit/${question._id}`}>
                <button>Edit This Question</button>
            </Link>
        </div>
    ) 
}

