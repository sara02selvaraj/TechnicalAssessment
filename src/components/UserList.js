import React, {useState, useEffect} from 'react'
import './UserList.css'
import Axios from 'axios'
import Modal from './Modal'

function UserList() {
    const [username, setUsername] = useState('')
    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false)
    const [selectedUser, setSelectedUser] = useState({})
    useEffect(() => {
        let dataURL = `https://jsonplaceholder.typicode.com/users`
        Axios.get(dataURL).then((response) => {
            setUsers(response.data)
        }).catch((error) => {
            console.error(error.messaage)
        })
    },[])

    let handleClick = (user) => {
        setShow(true)
        setSelectedUser(user)
    }
   
console.log(username)
    return (
        <div>
            <pre>{JSON.stringify(users)}</pre>
            <input type="text" name="username" 
            placeholder="enter the name to filter" onChange={(e) => setUsername(e.target.value)} 
            value={username} className='input-field'/>
            {users ? <React.Fragment>
                <div className='container'>
                {
                    users.filter(user => user.name.includes(username) || username === '')
                    .map(user => {
                        return (
                            <>
                                <div key={user.id} className='card' onClick={() => handleClick(user)}>
                                    <div className='card-header'>
                                        <h1>{user.name}</h1>
                                        
                                    </div>  
                                </div>
                                
                            </>
                        )
                    })  
                }
            </div>
            </React.Fragment> : null}
            {
             show && <Modal selectedUser={selectedUser} onClose={() => setShow(false)} show={show}>
             <p>This is modal content</p>
             </Modal> 
            }
        </div>
    )
}
export default UserList