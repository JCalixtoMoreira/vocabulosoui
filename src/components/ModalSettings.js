import React from "react";
import { SketchPicker } from 'react-color';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function ModalSettings({setColor, setIsOpen, modalIsOpen, cor, text}) {

    const handleChangeComplete = (color) => {
        setColor(color);
    };

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    /* Modal.setAppElement(".cores"); */
    return (
        <div className="cores">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <SketchPicker color={cor} onChangeComplete={handleChangeComplete} />
            </Modal>
            <div className="button"><button onClick={openModal} style={{ backgroundColor: cor.hex }} /> <p> {text} </p></div>
        </div>
    )
}

export default ModalSettings