import './Modal.css';
import Button from '../Button/Button';

const Modal = props => {
    return (
        <div className="backdrop" onClick={props.click}>
            <div className="modal">
                <header className="header">
                    <h2>{props.title}</h2>
                </header>
                <div className="content">
                    <p>{props.message}</p>
                </div>
                <footer className="actions">
                    <Button type="button" onClick={props.click}>Okay</Button>
                </footer>
            </div>
        </div>
    )
}

export default Modal;