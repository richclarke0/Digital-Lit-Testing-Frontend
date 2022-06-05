import { Link } from "react-router-dom"

export default function NavFooter(props) {
    return (
        <div className="footer">
            {/* //main page index  */}
            <Link to="/" className='icon'>
            <img src="./list.png"></img>
                {/* <div className="text-white">Main</div> */}
            </Link>
            <Link to="/question/new" className='icon    '>
            <img src="./new.png"></img>
                {/* <div className="text-white">New</div> */}
            </Link>
        </div>
    )
}