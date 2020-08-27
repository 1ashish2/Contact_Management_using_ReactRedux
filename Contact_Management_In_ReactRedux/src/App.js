import React from 'react';
import './style/App.scss';
import { Navbar } from './contactbook/elements/Navbar';
import {Provider} from 'react-redux';
import store from './store'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Contacts from './contactbook/contact/Contacts';
import Addcontact from './contactbook/contact/Addcontact';
import Editcontact from './contactbook/contact/Editcontact';
function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
      <Navbar/>
      <div className="container">
        <div className="py-3">
        <Switch>
          <Route exact  path="/" component={Contacts} />
          <Route exact   path="/contact/add" component={Addcontact} />
          <Route exact   path="/contact/edit/:id" component={Editcontact} />
        </Switch>
        </div>
      </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
