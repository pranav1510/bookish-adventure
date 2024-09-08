import React from "react";
import './MainComp.css'

const MainComp = ({navigate}) => {
    let details = {
        mainTitle: "Accelerate Innovation with Global AI Challanges",
        subTitle: "AI Challanges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions."
    }
    return(
        <div className="titleBlock">
            <div className="title">
                <p>{details.mainTitle}</p>
                <div className="subTitle">{details.subTitle}</div>
                <div className="create">
                    {/* <button onClick={() => navigate('/create')}>Create Challange</button> */}
                    <input type="submit" className="submit" value="Create Challenge"  onClick={() => navigate('/create')} />
                </div>
            </div>
            <div className="rocket"><img src={'/icons/rocket.png'} alt="rocket"/></div>

        </div>
    )
}

export default MainComp