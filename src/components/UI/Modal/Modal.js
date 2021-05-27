import ReactDOM from 'react-dom';
import './Modal.css';
import Button from '../Button/Button';
import React from 'react';

const Backdrop = props => {
    return <div className="backdrop" onClick={props.onClick} />
}

const ModalOverlay = props => {
    return (
        <div className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button type="button" onClick={props.onClick}>Okay</Button>
            </footer>
        </div>
    )
}

const Modal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.click} />, document.getElementById('backbrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.click} />,document.getElementById('modal-root'))}
        </React.Fragment>
    )
}

export default Modal;