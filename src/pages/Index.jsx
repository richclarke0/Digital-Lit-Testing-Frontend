import { Link } from "react-router-dom"
import Question from "../components/questionListDisplay/Question.jsx"

function Index(props) {
  // loaded function
  console.log("props", props)
  const loaded = () => {
    //add a parent container with scroll and start at top
    //change list item to left-align
    //add bottom border to item
    //snip text to length in item

    function questionSwitcher(entry, length) {
      if (entry.question.length > length) {
        return <Question entry={entry} length={length} />
      } else return <Question entry={entry} />
    }

    return <div className="list">
     { props.questions.map((entry) => (
       //enter the lenght you want here, or use magic to reassign the value
      questionSwitcher(entry, 29)
      )) }
    </div>
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }


  return props.questions ? loaded() : loading()
}

export default Index