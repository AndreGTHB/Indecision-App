import React from "react";
import ReactModal from "react-modal";

const OptionModal = (props) => (
  <ReactModal 
  isOpen={!!props.selectedOption}
  contentLabel="Selected Option"
  onRequestClose={props.handleModalState}
  closeTimeoutMS={200}
  className="modal"
  >

    <h3 className="modal__tittle">Selected option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleModalState}>Okay</button>

  </ReactModal>
);

export default OptionModal;
