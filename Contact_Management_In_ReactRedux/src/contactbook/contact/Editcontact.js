import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getcontact,getupdate} from '../../actions/ContactAction'
//import shortid from 'shortid'
import {useHistory,useParams} from 'react-router-dom'
const Editcontact = () => {
    let history=useHistory()
    let {id}= useParams();
    const dispatch=useDispatch()
    const contact = useSelector((state) => state.contactDetail.contactedit);//because of combine reducer we aasign contact reducer in contact
    // alert(contact)
    //alert(id)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    
    
   useEffect(()=>{
       if(contact != null)
       {
           setName(contact.name);
           setEmail(contact.email);
           setPhone(contact.phone);
       }
       dispatch(getcontact(id));
      
   },[contact]);//puttting here dependency becuse first contact is null then after it update and action perform so we need to update 
    const onUpdateContact=(e)=>{
        e.preventDefault();

        const update_contact=Object.assign(contact,{
            name:name,
            email:email,
            phone:phone
        })//making clone of prvious data and assign new data into it by matching name,email,phone
        dispatch(getupdate(update_contact))
       history.push('/')
    }
   
   return (
        <div className="container">
           
        <div className="container w-75 mx-auto shadow p-5">
        <h1 className="text-center mb-4">Edit contact</h1>
         <form onSubmit={(e)=>onUpdateContact(e)}>
         <div class="form-group">
               
               <input type="text" name="name" class="form-control form-control-lg" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name" />
              
           </div>
          
            <div class="form-group">
               
               <input type="email" name="email" class="form-control form-control-lg" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email" />
              
           </div>
            <div class="form-group">
               
                <input type="text" name="phone" class="form-control form-control-lg" value={phone} onChange={e=> setPhone(e.target.value)} placeholder="enter phone number" />
              
            </div>
            
            
            <button type="submit" class="btn btn-primary btn-block mb-4">Update user</button>
        </form>
    </div>
    </div>
    )
}

export default Editcontact
