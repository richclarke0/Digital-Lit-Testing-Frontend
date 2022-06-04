import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



export default function NewQuestion(props) {
  let redirect = useNavigate()
console.log("newQuestion props", props.URL)
  // state for formData
  const [newForm, setNewForm] = useState({
    type: "multi",
    question: "",
    multis: ["", "", "", ""],
    img: "",
    answer: ""
  })

  //new question
  const createNewQuestion = async (formData) => {
    // make post request to create thingy
    console.log("formData",formData)
    await fetch(props.URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formData),
    })
  }

  // handleChange function for form
  const handleChange = (event) => {

    let newArray = [...newForm.multis]

    // console.log(newForm)

    if (event.target.name.slice(0, 5) === "multi") {
      let index = +event.target.name.slice(6,7)
      newArray[index] = event.target.value
      setNewForm((prevState) => ({
        ...prevState,
        multis: newArray,
      }))
    } else {
      setNewForm((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }))
    }
  }

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault()
    createNewQuestion(newForm)
    setNewForm({
      type: "multi",
      question: "",
      multis: ["", "", "", ""],
      img: "",
      answer: ""
    })
    // props.setRefresh(props.refresh * -1)
    // console.log("refresh", props.refresh)
    // props.getQuestions()
    redirect("/", {replace: true})
    // Navigate("/")
  }

  //loaded
  // const loaded = () => {
  //   return props.people.map((person) => (
  //     <div key={person._id} className="person">
  //       <Link to={`/people/${person._id}`}>
  //         <h1>{person.name}</h1>
  //       </Link>
  //       <img src={person.image} alt={person.name} />
  //       <h3>{person.title}</h3>
  //     </div>
  //   ))
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.type}
        name="type"
        placeholder="'multi' or 'text' required'"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.question}
        name="question"
        placeholder="Input your question here"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.image}
        name="img"
        placeholder="Image URL, if needed"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.multis[0]}
        name="multis0"
        placeholder="Multiple choice answer"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.multis[1]}
        name="multis1"
        placeholder="Multiple choice answer"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.multis[2]}
        name="multis2"
        placeholder="Multiple choice answer"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.multis[3]}
        name="multis3"
        placeholder="Multiple choice answer"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.answer}
        name="answer"
        placeholder="Input correct answer"
        onChange={handleChange}
      />
      <input type="submit" value="Add question" />
    </form>
  )

}