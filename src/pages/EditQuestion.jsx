import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function Show(props) {
    const { id } = useParams()
    const questions = props.questions
    const question = questions.find((p) => p._id === id)
    let redirect = useNavigate()

    console.log("question", question)

    // state for form
    const [editForm, setEditForm] = useState(question)

    // handleChange function for form
    const handleChange = (event) => {
        let newArray = [...editForm.multis]

        // console.log(newForm)

        if (event.target.name.slice(0, 5) === "multi") {
            let index = +event.target.name.slice(6, 7)
            newArray[index] = event.target.value
            setEditForm((prevState) => ({
                ...prevState,
                multis: newArray,
            }))
        } else {
            setEditForm((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }))
        }
    }

    // handlesubmit for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateQuestion(editForm, question._id)
        // redirect people back to index
        redirect("/", { replace: true })
    }

    const removeQuestion = () => {
        props.deleteQuestion(question._id);
        // props.history.push("/");
        redirect("/")
    };

    return (
        <>
        <div className="edit">
            {question.img !== "" ? <p>Current Icon:</p> : <p>No Icon</p>}
            <img src={question.img} alt="" />
            <div>
                {/* <div>
                    <p>Type of thing</p>
                    <p>Question</p>
                    <p>Icon URL</p>
                    <p>Answer 1</p>
                    <p>Answer 2</p>
                    <p>Answer 3</p>
                    <p>Answer 4</p>
                    <p>Correct Answer</p>
                </div> */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>Question Type:</div>

                        <input
                            type="text"
                            value={editForm.type}
                            name="type"
                            placeholder="'multi' or 'text' required'"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                    <div>Question:</div>

                        <input
                            type="text"
                            value={editForm.question}
                            name="question"
                            placeholder="Input your question here"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                    <div>Icon URL:</div>

                    <input
                        type="text"
                        value={editForm.img}
                        name="img"
                        placeholder="Image URL, if needed"
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <div>Answer 1:</div>
                    <input
                        type="text"
                        value={editForm.multis[0]}
                        name="multis0"
                        placeholder="Multiple choice answer"
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <div>Answer 2:</div>
                    <input
                        type="text"
                        value={editForm.multis[1]}
                        name="multis1"
                        placeholder="Multiple choice answer"
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <div>Answer 3:</div>
                    <input
                        type="text"
                        value={editForm.multis[2]}
                        name="multis2"
                        placeholder="Multiple choice answer"
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <div>Answer 4:</div>
                    <input
                        type="text"
                        value={editForm.multis[3]}
                        name="multis3"
                        placeholder="Multiple choice answer"
                        onChange={handleChange}
                    />
                    </div>
                    <div>
                    <div>Correct Answer:</div>
                    <input
                        type="text"
                        value={editForm.answer}
                        name="answer"
                        placeholder="Input correct answer"
                        onChange={handleChange}
                    />
                    </div>
                    
                    <input type="submit" value="Update question" />
                </form>
            </div>
            <button id="delete" onClick={removeQuestion}>
                DELETE THIS QUESTION!
            </button>
        </div>
        </>
    )
}
