import React from "react";
import './CreateComp.css';
import CompOne from "../CompOne/CompOne";
import { FaChevronDown } from "react-icons/fa";

const CreateComp = ({navigate}) => {

    return(
        <>
        <CompOne />
        <div className="create">
            <div className="title">
                <p>Challenge Details</p>
            </div>
            <div className="form">
                <label>Challenge Name</label>
                <div className="bOne"></div>
                <label>Start Date</label>
                <div className="bOne">
                    <p>Start Date</p>
                    <img src={'/icons/calender.png'} alt="cal"/>
                </div>
                <label>End Date</label>
                <div className="bOne">
                <p>End Date</p>
                <img src={'/icons/calender.png'} alt="cal"/>
                </div>
                <label>Description</label>
                <div className="bTwo"></div>
                <label>Image</label>
                <div className="bThree">
                    <p>Upload</p>
                    <img src={'/icons/upload.png'} alt="upload"/>
                </div>
                <label>Level Type</label>
                <div className="bFour">
                    <p>Easy</p>
                    <FaChevronDown />
                </div>
                <button onClick={() => navigate('/')}>Create Challenge</button>
            </div>
        </div>
        </>
    )
}

export default CreateComp;