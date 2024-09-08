import React from "react";
import './EditComp.css';
import CompOne from "../CompOne/CompOne";
// import cal from './icons/calender.png';
// import butterfly from './images/butterfly.png';
// import gallery from './icons/gallery.png'
import { FaChevronDown } from "react-icons/fa";

const EditComp = ({navigate}) => {
    return(
        <>
        <CompOne />
        <div className="create">
            <div className="title">
                <p>Challenge Details</p>
            </div>
            <div className="form">
                <label>Challenge Name</label>
                <div className="bOne">
                    Data Sprint 72 - Butterfly Identification
                </div>
                <label>Start Date</label>
                <div className="bOne">
                    <p>17th Jun'2022 09:00 PM</p>
                    <img src={'./icons/calender.png'} alt="cal"/>
                </div>
                <label>End Date</label>
                <div className="boxOne">
                <p>21st Jun'2022 11:00 PM</p>
                <img src={'./icons/calender.png'} alt="cal"/>
                </div>
                <label>Description</label>
                <div className="boxTwo">
                    Identify the class to which each butterfly belongs to
                </div>
                <label>Image</label>
                <div className="boxThree">
                    <img className="butterfly" src={'./images/butterfly.png'} alt="butterfly"/>
                    <div className="sub">
                        <img src={'./icons/gallery.png'} alt="gallery"/>
                        <p>Change Image</p>
                    </div>
                    
                </div>
                <label>Level Type</label>
                <div className="boxFour">
                    <p>Easy</p>
                    <FaChevronDown />
                </div>
                <button onClick={() => navigate('/')}>Save Changes</button>
            </div>
        </div>
        </>
    )
}

export default EditComp;