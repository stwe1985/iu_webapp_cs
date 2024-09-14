import { useRouteError } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        
        <div className="container-sm">
            <Alert variant="danger" className=" d-flex flex-column align-items-center align-bottom">
                <h3>Oops!</h3>
                <p>
                    Da hat sich ein Spendenpaket verirrt..
                </p>
                <i>Status: ({error.statusText || error.message})</i><br />
                <Link to="/">
                    <Button variant="secondary" className="m-5 justify-content-center">Zur Hauptseite</Button>
                </Link>

            </Alert>
        </div>
    );
}