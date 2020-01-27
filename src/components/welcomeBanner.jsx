import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.css'

const WelcomeBanner = () => {
    return ( 
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Welcome To My Page</h1>
                    <h1 className="text-center"> *****</h1>
                    <div className="text-center">
                    <a className="btn-light" role="button" href="https://www.linkedin.com/in/subhamkc/" target="_blank" >
                        <i class="fa fa-linkedin-square fa-5x"/>
                    </a> {   }
                    <a href="https://github.com/sovanator/" className="btn-light" target="_blank">
                        <i class="fa fa-git-square fa-5x"/>
                    </a>
                 
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default WelcomeBanner;