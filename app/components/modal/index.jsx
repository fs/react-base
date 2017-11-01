import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const ModalComponent = ({ title, isOpen, closeModal, children }) => (
  <Modal
    bsSize="small"
    show={ isOpen }
    onHide={ closeModal }
  >
    <Modal.Header closeButton>
      <h3 className="modal-title">
        { title }
      </h3>
    </Modal.Header>
    <Modal.Body>
      { children }
    </Modal.Body>
  </Modal>
);

ModalComponent.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default ModalComponent;
