import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ButtonClose } from './styles';
import Select from 'react-select';
import tutorsRepository from '../../repositories/tutors';

function ModalTutor(props) {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    tutorsRepository.getAllTutors().then((tutors) => {
      setTutors(tutors);
    });
  }, []);

  const objecTutors = tutors.map((element) => ({
    value: element.id,
    label: element.name,
  }));

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2>Selecione o Tutor</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Select
          defaultValue={props.labelSelected}
          onChange={props.setlabelselected}
          options={objecTutors}
          placeholder="Selecione o Tutor..."
        />
      </Modal.Body>
      <Modal.Footer>
        <ButtonClose onClick={props.onHide}>Close</ButtonClose>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalTutor;
