import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = props => (
  <Modal
    isOpen={props.isDialogOpen}
    className="modal"
    contentLabel="Sure to remove expense?"
    closeTimeoutMS={200}
    onRequestClose={props.handleClearSelectedOptions}
  >
    <h3 className="modal__title">Sure to remove expense?</h3>
    <div className="modal__body">
      <button
        className="button button--link button--modal"
        onClick={props.handleClearSelectedOptions}
      >
        No
      </button>
      <button
        className="button button--link button--modal"
        onClick={props.onRemove}
      >
        Yes
      </button>
    </div>
  </Modal>
);

export default RemoveExpenseModal;
