import React from 'react';
import logo from '../asset/images/logo2.PNG'
const RoundImg = () => {
    return (  
        <React.Fragment>
            <img src={logo} className='rounded-circle mx-auto d-block' />
        </React.Fragment>
    );
}
 
export default RoundImg;