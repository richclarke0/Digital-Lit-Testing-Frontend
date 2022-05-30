import { MDBFooter, MDBIcon } from "mdb-react-ui-kit"

export default function NavFooter(props) {
    return (
        <MDBFooter className="bg-dark p-2">
            {/* //main page index  */}
            <a className='btn btn-light btn-floating m-1' href='#!' role='button'>
                <MDBIcon fas icon="list-ul" />
            </a>
            <div className="text-white">Main</div>
            
        </MDBFooter>
    )
}