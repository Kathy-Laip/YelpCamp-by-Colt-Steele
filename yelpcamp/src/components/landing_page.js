import React from "react";
import MainTextLand from "./landing_main_text";
import HeadLand from "./landing_page_head";
import ImgLand from "./landing_page_img";

class Landing extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <div className="landPage">
                <HeadLand/>
                <ImgLand/>
                <MainTextLand/>
            </div>
        )
    }
}

export default Landing