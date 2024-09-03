import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./imageViewer.css"; 

const ImageViewer = ({ src, alt }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="picture-image thumbnail"
        onClick={handleShow}
      />

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Body>
          <img src={src} alt={alt} className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
          <i className="bi bi-x-lg"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageViewer;
