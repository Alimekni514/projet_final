import React from "react";
import style from "./style.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import rateContext from "../../contexts/RateContext";
import { BsThreeDots } from "react-icons/bs";
import { useRef } from "react";
import { useContext } from "react";

export default function MediaContainer({ img, title, rate, desc, id }) {
  const { ratee, setRate } = useContext(rateContext);
  const inputrate = useRef();
  const mediaid = useRef();
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const HandleWatchList = async () => {
    const list = await fetch(
      `https://api.themoviedb.org/3/list/${localStorage.getItem(
        "Watchlistid"
      )}/add_item?api_key=b3ec5aad46e51258856256128c47b00c&session_id=7681eb6a4de93e5f987a99934963029a4166328d`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          media_id: mediaid.current.value,
        }),
      }
    );
    const listres = await list.json();
    console.log(listres.status_message);
  };
  const HandleRate = async () => {
    const list = await fetch(
      `https://api.themoviedb.org/3/list/${localStorage.getItem(
        "ratelistid"
      )}/add_item?api_key=b3ec5aad46e51258856256128c47b00c&session_id=7681eb6a4de93e5f987a99934963029a4166328d`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          media_id: mediaid.current.value,
        }),
      }
    );

    const listres = await list.json();
    console.log(listres.status_message);
    setRate([...ratee, inputrate.current.value]);
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
              <div>
                <button onClick={HandleWatchList}> Add To WatchList</button>
                {/* <button onClick={HandleFavourateList}> Add To FavourateList</button> */}
                <input type="text" placeholder="rate here" ref={inputrate} />
                <button onClick={HandleRate}> Rate</button>
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
