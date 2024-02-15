import React from "react";

function Experience(props){
    return(
        <div key={props.id} className="singleExperience">
            <div className="imageDiv">
            <img  src={props.imgSrc} alt="experience_img"/>
        </div>
        <div className="cardInfo">
            <h4 className="mainTitle">
                {props.mainTitle}
            </h4>
    
        <div className="desc">
            <p> {props.description}</p>
        </div>
        <div className="offer">
            <p>{props.offer}</p>
        </div>
        <button className="btn">BOOK NOW</button>
    </div>
    </div>

    )
}

export default Experience;