import React,{useState} from 'react'
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom'
import {getdelete} from'../../actions/ContactAction'
import {useDispatch} from 'react-redux'
const Contact = ({contact,selectAll}) => {
   // destructuring 
   const dispatch=useDispatch()
   //const[selectAll,setSelectAll]=useState(false);
  const{id,name,phone,email}= contact;
 
    return (
       
                            <tr>
                            <th scope="row">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox"  checked={selectAll} className="custom-control-input"  />
                                <label  className="custom-control-label" />
                            </div>
                            </th>
                           <td><Avatar className="mr-2" name={name} size="45" round={true}/>{name}</td>
                           <td>{phone}</td>
                           <td>{email}</td>
                           <td className="actions">
                               <Link to={`/contact/edit/${id}`}>
                                   <span className="material-icons mr-2 ">edit</span>
                               </Link>
                               <Link to="/">
                                   <span className="material-icons text-danger" onClick={()=>dispatch(getdelete(id))}>delete</span>
                               </Link>
                           </td>
                           </tr>
                        
                           
    )
}

export default Contact
