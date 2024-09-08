import React from "react";
import './DataComp.css';
import CompOne from "../CompOne/CompOne";
import { CiClock2 } from "react-icons/ci";

const DataComp = ({navigate}) => {
    return(
        <>
        <CompOne />
        <div className="mainBlock">
            <div className="mainOne">
                <span><CiClock2 /></span>
                <p>Starts on 17th Jun'22 09:00 PM (Indian Standard Time)</p>
            </div>
            <p className="title">Data Sprint 72 - Butterfly Identification</p>
            <span className="subTitle">Identify the class to which each butterfly belongs to</span>
            <div className="mainTwo">
                <img src={'/icons/data.png'} alt="dataIcon"/>
                <p>Easy</p>
            </div>
        </div>
        <div className="shadow">
        <div className="overView">
            <p>Overview</p>
            <div className="subView">
                <button className="edit" onClick={() => navigate('/edit')}>Edit</button>
                <button className="delete">Delete</button>
            </div>
        </div>
        </div>
        <div className="info">
            <p>
                Butterflies are the adult flying state of certain 
                insects belonging to an order or group called 
                Lepidoptera. The word "Lepidoptera" means "scaly wings" 
                in Greek. This name perfectly suits the insects in this 
                group because their wings are covered with thousands 
                of tiny scales overlapping in rows.
            </p>
            <p>
                An agency of the Governmental Wildlife Conservation is planning 
                to implement an automated system based on computer vision so that 
                it can identify butterfliles based on captured images. As a consultant 
                for this project, you are responsible for developing an efficient model.
            </p>
            <p>
                Your Task is to build an Image Classification Model using CNN that classifies 
                to which class of weather eachimage belongs to.
            </p>
        </div>
        </>
    )
}

export default DataComp