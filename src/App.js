import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './page/homepage/homepage.component';
import SignIn from './components/sign-in/sign-in.components';
import SignUp from './components/sign-up/sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
