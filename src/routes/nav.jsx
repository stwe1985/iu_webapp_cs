import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../scss/style.scss";


export default class Nav extends Component {  

    constructor(props) {
        super(props);
        console.log("Nav component instantiated");
        console.log(props);

    }
    static propTypes = {
        linkMap: PropTypes.object,
    }

    render() {
        let navMap = this.props.linkMap;
        let links = [];
        for (const [key, [name, path]] of Object.entries(navMap)) {
            console.log(key, path);
                links.push(
                    <li className="nav-item pe-2 ps-2 " key={key}>
                        <Link className="nav-link active text-bluegreen" to={path}>{name}</Link>
                    </li>
                    
                );


        }
        console.log(links);


        return (

                <nav className="d-flex justify-content-center navbar navbar-expand-sm position-relative bg-blue-100">
                    <ul className="navbar-nav">
                        {links}               
                    </ul>        
                </nav>

        );
    }
}