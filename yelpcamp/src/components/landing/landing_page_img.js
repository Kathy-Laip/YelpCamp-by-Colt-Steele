import React from "react";
import peopleImg from "../../Assets/Hero\ Image.jpg"

class ImgLand extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <div className="imgLandDiv">
                <img alt="" src={peopleImg}/>
            </div>
        )
    }
}

export default ImgLand

