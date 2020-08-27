import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Contact from './Contact';
import {getselectAll,getclear,getdeleteAll} from '../../actions/ContactAction'
const Contacts = () => {
    const contact = useSelector(state => state.contactDetail.contact);//because of combine reducer we aasign contact reducer in contact
    const[selectAll,setSelectAll]=useState(false);
    const dispatch=useDispatch()
    const seletedContact=useSelector(state => state.contactDetail.selectedContact);
    useEffect(()=>{
       if(selectAll)
       {
         dispatch(getselectAll(contact.map(contact=>contact.id)))
       }else{
             dispatch(getclear());
       }
    },[selectAll])
   // console.log(contact)
    return (
        <div>
            {
                seletedContact.length >0 ? <button className="btn btn-danger mb-3" onClick={()=>dispatch(getdeleteAll())}>Delete All</button>:null
            }
            <table className="table shadow ">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" id="selectAll" className="custom-control-input" onClick={()=>setSelectAll(!selectAll)} value={selectAll} />
                                <label htmlFor="selectAll" className="custom-control-label" />
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map((contact)=>(
                             <Contact  contact={contact} key={contact.id} selectAll={selectAll} />
                             ))
                    }
                 
                </tbody>
            </table>
           
        </div>
    )
}

export default Contacts
