import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import Header from './components/header/header.component.jsx'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  // set unsubscribe property
  unsubscribeFromAuth = null;

  // Allows t=us to maintain user login state. User is set to the current user object.
  // and we can use it through out our app.
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {console.log(this.state)})
        });
      }
      this.setState({ currentUser: userAuth})
    })
  }
  // As soon as the component unmounts call the above function and refresh user state.
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}

export default App;
