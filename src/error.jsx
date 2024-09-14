import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="vh-100 d-inline-flex container-fluid justify-content-center" id="errorpage">
            <div className="align-content-center">
                <h1 className="text-center">Oh je!</h1>
                <p className="text-center">Da hat sich ein Spendenpaket verirrt.</p>
                <p className="text-center">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}