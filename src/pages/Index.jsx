import { Link } from "react-router-dom"
import QuestionComponent from "../components/questionListDisplay/Question.jsx"
import {useEffect} from "react"

function Index(props) {
  // loaded function

  useEffect(() => {
    props.getQuestions()
    console.log("index useeffect")
}, [])

  const loaded = () => {
    //add a parent container with scroll and start at top
    //change list item to left-align
    //add bottom border to item
    //snip text to length in item

    function questionSwitcher(entry, length) {
      if (entry.question.length > length) {
        return <QuestionComponent entry={entry} length={length} />
      } else return <QuestionComponent entry={entry} />
    }

    return <div className="list">
     { props.questions.map((entry) => (
       //enter the lenght you want here, or use magic to reassign the value
      questionSwitcher(entry, 32)
      )) }
    </div>
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }


  return props.questions ? loaded() : loading()
}

export default Index