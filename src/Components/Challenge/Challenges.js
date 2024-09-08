import React from "react";
import challenges from '../../jsons/challenges.json';
import './Challenges.css';

const Challenges = () => {
    return(
        <>
        <div className="text">
            <p>Why Participate in</p>
            <span>AI Challenges ?</span>
        </div>
        <div className="cardsBlock">
        {
            challenges.map((info, index) => {
                return(
                        <div className="card" key={index}>
                        <img src={info.image} height="" width= "" alt=""/>
                        <p>{info.text}</p>
                        <span>{info.subText}</span>
                        </div>
                )
            })
        }
        </div>
        </>
    )
}

export default Challenges