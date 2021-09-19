import React, { useState } from "react";
import { CIcon } from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import { Image } from "../Images/Basic";
import Modal from "react-bootstrap/Modal";
import Draggable from "react-draggable";
import ModalDialog from "react-bootstrap/ModalDialog";
import "./styles/EventItem.scss";
class DraggableModalDialog extends React.Component {
  render() {
    return (
      <Draggable handle=".modal-title">
        <ModalDialog {...this.props} />
      </Draggable>
    );
  }
}

const EventItem = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="event-item__container">
      <div className="event-item__favorite-edit">
        <div className="event-item__favorite">
          <CIcon name={"cilStar"} size="sm" />
          <CIcon name={"cilPencil"} size="sm" onClick={() => setModal(true)} />
        </div>
        <div className="event-item__edit"></div>
      </div>
      <div className="event-item__image">
        <Image />
      </div>
      <div className="event-item__desc">
        <p>Round Table</p>
        <p>63" round</p>
        <p>10 seats</p>
      </div>
      <div className="event-item__count-drag">
        <div className="event-item__count">3</div>
        <div className="event-item__drag"></div>
      </div>
      <Modal dialogAs={DraggableModalDialog} color="danger" size="sm" show={modal} onHide={setModal}>
        <Modal.Header>
          <Modal.Title>Setting <CIcon name={"cilSettings"} size="xl" /></Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <CButton color="danger">Save</CButton>
          <CButton color="secondary" onClick={() => setModal(false)}>
            Cancel
          </CButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EventItem;
