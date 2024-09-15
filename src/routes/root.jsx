import "../../scss/style.scss";
import Nav from "./nav";
export default function Root() {
    

    return (    
        <div className="container d-flex flex-column h-100">

                <header className=" shadow-none border-1 border-bottom border-aqua-marine-blue bg-blue-400">
                    <div className="d-flex flex-row position-relative">
                        <div className="d-flex col justify-content-start">
                            <img src="../../logo/logo1.svg" alt="logo" id="logo" className="m-2 rounded-circle bg-bluegreen img-fluid"/>  
                        </div>
                        <div className="d-flex col align-items-center justify-content-center"> 
                        
                            <h1 className="display-4 text-center fw-light text-bluegreen"><em>KleiderHelden</em></h1>
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

                <footer className="align-items-end text-light text-center border-1 border-top border-aqua-marine-blue text-darkgrey p-3">
                    Impressum Datenschutzerklärung
                </footer>


        </div>
    );
}