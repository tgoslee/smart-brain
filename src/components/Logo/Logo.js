import React from "react";
import Tilt from "react-tilt/dist/tilt";
import logo from './AwakeningSTEMLogo.png'
import './Logo.css'

const Logo = () => {
    return(
        <div className="ma4 mt0 ">
            <Tilt className="Tilt br2 shadow-2 " options={{ max : 45 }} style={{ height: 200, width: 200 }} >
             <div className="Tilt-inner pa3">
                <img alt="logo" src={logo}/> </div>
            </Tilt>
        </div>
    );
}

export default Logo;
