import React from "react";
import style from "./style.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import rateContext from "../../contexts/RateContext";
import { BsThreeDots } from "react-icons/bs";
import { useRef } from "react";
import { useContext } from "react";

export default function Container({ img, title, rate, desc, id }) {
  
  const mediaid = useRef();
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  

  return (
    <div className="movie">
      <div className="img-containerr">
        <img src={img} alt="Movie/serie-pic" />
      </div>
      <div className="media-info">
        <h3> {title}</h3>
        <span> {rate} </span>
        {
          <input
            style={{ display: "none" }}
            type="text"
            defaultValue={id}
            ref={mediaid}
          />
        }
      </div>
      <div className="overview">
        <BsThreeDots style={{ fontSize: "50px" }} onClick={showModal} />
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>
              {" "}
              <h3> {title}</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="img-containerr">
              <img src={img} alt="Movie/serie-pic" />
            </div>
            <div className="media-info">
              <div>
                <h3> {title}</h3>
                <span> {rate} </span>
                <p> {desc}</p>
              </div>
             
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
          </Modal.Footer>
        </Modal>
        
      </div>
    </div>
  );
}