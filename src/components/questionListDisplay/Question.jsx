import TruncatedQuestion from "./truncation/truncatedQuestion"
import RegularQuestion from "./truncation/regularQuestion"
import { Link } from "react-router-dom"

//question component
export default function question({entry, length}) {
    // console.log("question entry", entry)
    // console.log("question length", length)
    
    //the thinking
    function icon(entry, length) {
        //if icon and short question
        //displays img, displays entire question
        if (entry.img !== "" && !length) {
            
            return <div key={entry._id} className="item">
                <Link to={`/questions/${entry._id}`}>
                    <img className=" rounded float-left" src={entry.img} alt="" />
                    <RegularQuestion question={entry.question} />
                    {/* "imgnolength" */}
                </Link>
            </div>
        } else if (entry.img !== "" && length > 0) {
            //if icon and long question
            //displays img and truncates question with length
            return <div key={entry._id} className="item">
                <Link to={`/questions/${entry._id}`}>
                    <img className=" rounded float-left" src={entry.img} alt="" />
                    <TruncatedQuestion question={entry.question} length={length} />
                    {/* "imglength" */}
                </Link>
            </div>
        } else if (!entry.img && length) {
            //if no icon and long question
            //omits img and displays truncated question
            return <div key={entry._id} className="item">
                <Link to={`/questions/${entry._id}`}>
                    {/* <p className="text-dark fs-5">{entry.question.slice(0, length) + "..."}</p> */}
                    <TruncatedQuestion question={entry.question} length={length+3} />
                    {/* "noimglength" */}
                </Link>
            </div>
        } else {
            //final, no icon and short question, displays whole question
            return <div key={entry._id} className="item">
                <Link to={`/questions/${entry._id}`}>
                    {/* <p className="text-dark fs-5">{entry.question.slice(0, length) + "..."}</p> */}
                    <RegularQuestion question={entry.question} />
                    {/* "noimgnolength" */}
                </Link>
            </div>
        }
    }

    return icon(entry, length)
  
}