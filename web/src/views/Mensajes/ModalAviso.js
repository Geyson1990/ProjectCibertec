import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const ModalAviso = (props) => {    
  return (
    <Modal 
      isOpen={props.isOpen} 
      toggle={props.toggle} 
      className={props.className}>
      
      <ModalHeader toggle={props.toggle}>{props.headerText}</ModalHeader>
      
      <ModalBody>{props.bodyText}</ModalBody>

      <ModalFooter>
      {
          (props.primary)
          ? <Button color="primary" onClick={props.primaryClick}>{props.primaryText}</Button>
          : null
        }
        {' '}
        {
          (props.secondary)
          ? <Button color="secondary" onClick={props.secondaryClick}>{props.secondaryText}</Button>
          : null
        }
       
      </ModalFooter>
    </Modal>
  );
}

export default ModalAviso;
