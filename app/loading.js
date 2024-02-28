//최상위 폴더에 만드는게 좋음 왜냐하면  옆에 loading.js없으면 상위폴더뒤짐
"use client";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Loading() {
  return (
    <div className="loading_container">
      <Spinner className="loading_content" animation="border" variant="primary" />
    </div>
    // <div className="modal show" style={{ display: "block", position: "initial" }}>
    //   <Modal.Dialog>
    //     <Modal.Header>
    //       <Modal.Title>
    //         <p>Loading...</p>
    //       </Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <p>Please Wait.</p>
    //     </Modal.Body>
    //   </Modal.Dialog>
    // </div>
  );
}
