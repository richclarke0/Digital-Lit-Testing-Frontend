import { MDBFooter, MDBIcon } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"

export default function NavFooter(props) {
    return (
        <MDBFooter className="bg-dark p-4">
            {/* //main page index  */}
            <Link to="/" className='btn btn-light btn-floating mx-4'  role='button'>
                <MDBIcon fas size="lg" icon="list-ul" />
                {/* <div className="text-white">Main</div> */}
            </Link>
            <Link to="/question/new" className='btn btn-light btn-floating mx-4'  role='button'>
            <MDBIcon size="lg" far icon="file"/>
                {/* <div className="text-white">New</div> */}
            </Link>
        </MDBFooter>
    )
}