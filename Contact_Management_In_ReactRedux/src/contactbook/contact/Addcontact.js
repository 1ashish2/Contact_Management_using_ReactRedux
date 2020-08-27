import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addcontact} from '../../actions/ContactAction'
import shortid from 'shortid'
import {useHistory} from 'react-router-dom'
const Addcontact = () => {
    let history=useHistory()
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const dispatch=useDispatch()
    const onSubmitchange=(e)=>{ 
        e.preventDefault();
        const new_contact={
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addcontact(new_contact))
        history.push('/');
    }
   
    return (
        <div className="container">
           
        <div className="container w-75 mx-auto shadow p-5">
        <h1 className="text-center mb-4">Add contact</h1>
         <form onSubmit={e=>onSubmitchange(e)}>
         <div class="form-group">
               
               <input type="text" name="name" class="form-control form-control-lg" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name" />
              
           </div>
          
            <div class="form-group">
               
               <input type="email" name="email" class="form-control form-control-lg" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email" />
              
           </div>
            <div class="form-group">
               
                <input type="text" name="phone" class="form-control form-control-lg" value={phone} onChange={e=> setPhone(e.target.value)} placeholder="enter phone number" />
              
            </div>
            
            
            <button type="submit" class="btn btn-primary btn-block mb-4">Add user</button>
        </form>
    </div>
    </div>
    )
}

export default Addcontact
