import React from 'react';

const NavBar = () => {
    return ( 
        <React.Fragment>
            
                <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
                    <a className="navbar-brand" href="#">subhamkc.com</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-right">   
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Me</a>
                            </li>
                        
                        </ul>
                    </div>
                </nav>
            
        </React.Fragment>
     );
}
 
export default NavBar;