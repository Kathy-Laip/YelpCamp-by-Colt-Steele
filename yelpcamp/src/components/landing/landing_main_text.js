import React from "react";
import { Link } from "react-router-dom";
import airbnb from "../../Assets/Airbnb.svg"
import booking from "../../Assets/Booking.svg"
import plumguide from "../../Assets/Plum\ Guide.svg"

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
                {/* <button className="btn">
                    View Campgrounds
                </button> */}
                <div className="btn" style={{width: '50%', margin: '2rem 0',padding: '1.5rem 0.5rem'}}>
                    <Link to='/searchCamp'>View Campgrounds</Link>
                </div>
                <p>Partnered with:</p>
                <div className="logos">
                    <img src={airbnb} alt=""/>
                    <img src={booking} alt=""/>
                    <img src={plumguide} alt=""/>
                </div>
            </main>
        )
    }
}

export default MainTextLand