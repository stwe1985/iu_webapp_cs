import { useRouteError } from "react-router-dom";
import { Alert } from "react-bootstrap";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="container-sm">
            <Alert variant="danger m-5">
                <h3>Oops!</h3>
                <p>
                    Da hat sich ein Spendenpaket verirrt..
                </p>
                <p>{error.message}</p>
            </Alert>
        </div>
    );
}