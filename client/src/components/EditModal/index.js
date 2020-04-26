import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default ({ setShow, show, project }) => {
  const [desc, setDesc] = useState("");
  const handleSave = () => {
    setShow(false);
  };
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header onClick={() => setShow(false)} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {project.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Update your project description</Form.Label>
          <Form.Control
            onChange={e => setDesc(e.target.value)}
            as="textarea"
            rows="3"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {desc ? <Button onClick={() => handleSave()}>Save Changes</Button> : ""}
        <Button onClick={() => setShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
