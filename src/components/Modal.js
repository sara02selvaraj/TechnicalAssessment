import userEvent from '@testing-library/user-event'
import './Modal.css'


function Modal(props) {
 
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.selectedUser.name}</h4>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="btn">Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal