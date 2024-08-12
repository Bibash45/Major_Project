import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const NoticeModal = ({ show, handleClose, handleAgree }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>Important Notice</Modal.Title>
        <Button
          variant="close"
          onClick={handleClose}
          aria-label="Close"
          className="close-btn"
        />
      </Modal.Header>
      <Modal.Body>
        <p>Please ensure the food you donate meets the following criteria:</p>
        <ul>
          <li>Food must be fresh and not expired.</li>
          <li>No damaged or opened packages.</li>
          <li>Perishable items should be properly stored and transported.</li>
          <li>Allergens must be clearly labeled if present.</li>
          <li>Consider the nutritional value of the food being donated.</li>
        </ul>
        <p>
          By proceeding, you confirm that you have read and understood these guidelines and that the food you are donating complies with them.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleAgree}>
          I Agree
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoticeModal;
