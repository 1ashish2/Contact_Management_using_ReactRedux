import {CREATE_CONTACT,GET_CONTACT,UPDATE_CONTACT,DELETE_CONTACT,SELECT_CONTACT,CLEAR_CONTACT,DELETEALL_CONTACT}  from '../constant/type'

export const addcontact=(contacts)=>({
  
        type:CREATE_CONTACT,
        payload:contacts,
    
})

// get contact
export const getcontact = (id) => ({
    type: GET_CONTACT,
    payload:id,
})

//updat contact

export const getupdate = (contacts) => ({
    type: UPDATE_CONTACT,
    payload:contacts,
})
//delete contact
export const getdelete = (id) => ({
    type: DELETE_CONTACT,
    payload:id,
})
//select contact all
export const getselectAll = (id) => ({
    type: SELECT_CONTACT,
    payload:id,
})

//clear contact
export const getclear = () => ({
    type: CLEAR_CONTACT,
   
})

//deleteAll
export const getdeleteAll = () => ({
    type: DELETEALL_CONTACT,
   
})
