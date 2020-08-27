import {combineReducers} from 'redux'
import {Contactreducer} from './ContactReducer'


export default combineReducers({
    contactDetail:Contactreducer,
});