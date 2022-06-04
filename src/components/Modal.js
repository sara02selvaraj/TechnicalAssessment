import {useState} from 'react'
import './Modal.css'


function Modal(props) {
 const [depart, setDepart] = useState('')
    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">{props.selectedUser.name}</h4>
                </div>
                <div className="modal-body">
                    <p>{props.selectedUser.email}</p>
                    <p>{props.selectedUser.department}</p>
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="btn">Close</button>
                </div>
                <input type="text" onChange={(e) => setDepart(e.target.value)} 
                value={depart} name={depart} placeholder='enter the department' />
                <button onClick={() => props.handleSave(depart)} >Save</button>
            </div>
        </div>
    )
}

export default Modal