export default function truncatedQuestion({ question, length }) {
    return  <p className="text-dark fs-5">{question.slice(0, length) + "..."}</p>
}

