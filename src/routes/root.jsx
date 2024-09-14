import "../../scss/style.scss";
import Nav from "./nav";
export default function Root() {
    

    return (    
        <div className="d-flex flex-column h-100">

                <header className="shadow border-1 border-bottom border-blue-200 bg-blue-400">
                    <div className="d-flex flex-row position-relative">
                        <div className="d-flex col justify-content-start">
                            <img src="../../logo/logo1.svg" width="80px" height="80px" alt="logo" />  
                        </div>
                        <div className="d-flex col align-items-center justify-content-center"> 
                        
                            <h1 className="display-4 text-center text-light fw-light"><em>KleiderHelden</em></h1>
                            <h3 className="text-center"><em></em></h3>
                        </div>
                        
                        <div className="col">

                        </div>
                    </div>
                    
                    <Nav linkMap={
                        // set navigation values with corresponding route paths
                        {
                            home: ['home', '/'],
                            spende: ['spenden', 'spenden'],
                            about: ["über uns", "about"],
                        }
                    } />

                </header>

                <main className="h-100 m-2 ms-5 me-5">

                </main>

                <footer className="align-items-end text-light text-center shadow border-1 border-top border-blue-400 bg-blue-300 p-3">
                    Impressum Datenschutzerklärung
                </footer>


        </div>
    );
}