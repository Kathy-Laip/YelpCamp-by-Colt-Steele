import React from "react";
import logo from "../Assets/Logo.svg"

class HeadLand extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return (
            <header>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
            </header>
        )
    }
}

export default HeadLand