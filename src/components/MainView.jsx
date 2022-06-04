import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import Index from "../pages/Index"
import ShowQuestion from "../pages/showQuestion"
import EditQuestion from "../pages/EditQuestion"
import NewQuestion from "../pages/NewQuestion"

export default function MainView(props) {

    const [questions, setQuestions] = useState(null)

    const URL = "https://digital-lit-questions.herokuapp.com/questions"
    const POSTURL = "https://digital-lit-questions.herokuapp.com/question"
    // console.log("questions null?", questions)

    const getQuestions = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setQuestions(data)
        // console.log("set questions", questions)
    }

    const deleteQuestion = async (id) => {
        // make delete request to create people
        await fetch(POSTURL +"/"+ id, {
          method: "DELETE",
        })
        // getQuestions()
      }


      const updateQuestion = async (question, id) => {
        // make put request
        await fetch(POSTURL + "/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(question),
        })
        // update list of
        getQuestions()
      }

    useEffect(() => {
        getQuestions()
        console.log("useEffect runs")
    }, [])

    return (
        <main>
            <Routes>

                <Route exact 
                path="/" 
                
                element={<Index getQuestions={getQuestions} questions={questions} />} />

                <Route path="/question/:id" 
                element={<ShowQuestion 
                deleteQuestion={deleteQuestion} 
                updateQuestion={updateQuestion}
                questions={questions}/>} 
                />

                {/* <Route path="/question/edit/:id" element={<EditQuestion />} /> */}

                <Route path="/question/new/" 
                element={<NewQuestion 
                    getQuestions={getQuestions}
                    URL={POSTURL}/>} 
                    />

            </Routes>
        </main>
    )
}