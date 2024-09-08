import "../../scss/style.scss";
export default function Root() {
    return (
        <div className="d-flex flex-column h-100">

                <header className="align-items-start shadow border-1 border-bottom border-blue-400 bg-blue-300">
                    <h1 className="text-light text-center pb-5 pt-5 fw-light">Title</h1>

                </header>

                <main className="h-100 m-2 ms-5 me-5">

                </main>

                <footer className="align-items-end text-light text-center shadow border-1 border-top border-blue-400 bg-blue-300 p-3">
                Impressum Datenschutzerklärung
                </footer>


        </div>
    );
}