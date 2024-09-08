import React, { useState } from "react";
import './EnrollComp.css';
import participants from '../../jsons/participate.json';
import { TiDeleteOutline } from "react-icons/ti";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { BiCheckbox } from "react-icons/bi";
import { Modal, ModalBody, ModalHeader} from "react-bootstrap";

const EnrollComp = ({navigate}) => {

    const [filter, setFilter] = useState(false);
    const [show, setShow] = useState(false);

    const handleModal = () => {
        setShow(false)
    }

    return(
        <>
        <Modal show={show} onHide={handleModal}>
            <ModalHeader style={{justifyContent: "space-between", fontWeight: 500}}>
                <span>Filters</span>
                <FaAngleUp />
            </ModalHeader>
            <ModalBody>
                <span>Status</span>
                <div className="check">
                    <div className="sub-check">
                        <BiCheckbox />
                        <span>All</span>
                    </div>
                    <div className="sub-check">
                        <BiCheckbox />
                        <span>Active</span>
                    </div>
                    <div className="sub-check">
                        <BiCheckbox />
                        <span>Upcoming</span>
                    </div>
                    <div className="sub-check">
                        <BiCheckbox />
                        <span>Past</span>
                    </div>
                </div>
                <span>Level</span>
                <div className="check">
                    <div className="sub-check">
                        <BiCheckbox />
                        <span>Easy</span>
                    </div>
                    <div className="sub-check">
                        <BiCheckbox />
                        <span>Medium</span>
                    </div>
                    <div className="sub-check">
                        <BiCheckbox />
                        <span>Hard</span>
                    </div>
                </div>
            </ModalBody>
            <div className="sub-header">
                
            </div>
        </Modal>
        <div className="mySearch">
        <div className="search">
            <p>Explore Challenges</p>
            <div className="subSearch">
                <input className="bar" type="text" placeholder="Search" />
                    <div className="filters" onClick={() => {
                        if(!filter){setFilter(true)} else {setFilter(false)}
                        setShow(true)
                    }}>
                        <span>Filters</span>
                        <FaAngleDown />
                    </div> 
                

            </div>
        </div>
            {
                (filter === true) ? 
                <div className="forFilter">
                <div className="sub-filter">
                    <span>Upcoming</span>
                    <TiDeleteOutline />
                </div>
                <div className="sub-filter">
                    <span>Past</span>
                    <TiDeleteOutline />
                </div>
                <div className="sub-filter">
                    <span>Easy</span>
                    <TiDeleteOutline />
                </div>
            </div> : <></>
            }
           
        </div>
        <div className="block">
            {
                participants.map((info,index) => {
                    return(
                        <>
                        {
                            (filter === true && info.status === "Active") ? <></> :
                        
                        <div className="card" key={index} onClick={() => navigate('/data')}>
                            <img src={info.image} alt=""/>
                            <div className="sub-card">
                                <div className="status" style={{backgroundColor: info.color, color: info.textColor}}>{info.status}</div>
                                <div className="theTopic">{info.topic}</div>
                                <div className="theTopic des">{info.subTopic}</div>
                                <div className="myText">{info.text}</div>
                                <div className="time">{info.time}</div>
                                {
                                    (info.value !== "") ? 
                                    <div className="value">
                                        {info.value}
                                    </div> : <></>
                                }
                                <div className="participate">{info.button}</div>
                            </div>
                        </div>
                }
                        </>
                    )
                })
            }
        </div>
        </>
    )
}

export default EnrollComp