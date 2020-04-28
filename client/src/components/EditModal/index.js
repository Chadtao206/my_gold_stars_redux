import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default ({ setShow, show, project, update, edit }) => {
  const [desc, setDesc] = useState("");
  const handleSave = () => {
    update(project._id, desc);
    setShow(false);
  };
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setShow(false)}
    >
      <Modal.Header onClick={() => setShow(false)} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {project.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            {edit === "desc"
              ? "Update your project description"
              : "Enter an image url to display on your project"}
          </Form.Label>
          <Form.Control
            onChange={e => setDesc(e.target.value)}
            as="textarea"
            rows={edit === "desc" ? "4" : "1"}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {desc ? <Button onClick={() => handleSave()}>Update</Button> : ""}
        <Button onClick={() => setShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
