import React from "react";
import airbnb from "../Assets/Airbnb.svg"
import booking from "../Assets/Booking.svg"
import plumguide from "../Assets/Plum\ Guide.svg"

class MainTextLand extends React.Component{
    constructor(options){
        super(options)
    }

    render(){
        return(
            <main>
                <h1>Explore the best camps on Earth.</h1>
                <p>YelpCamp is a curated list of the best camping spots on Earth. 
                Unfiltered and unbiased reviews.</p>
                <ul>
                    <li>Add your own camp suggestions.</li>
                    <li>Leave reviews and experiences.</li>
                    <li>See locations for all camps.</li>
                </ul>
                <button>
                    View Campgrounds
                </button>
                <p>Partnered with:</p>
                <div>
                    <img scr={airbnb} alt=""/>
                    <img scr={booking} alt=""/>
                    <img scr={plumguide} alt=""/>
                </div>
            </main>
        )
    }
}

export default MainTextLand