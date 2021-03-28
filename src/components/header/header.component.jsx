import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
//higher order component
import { connect } from 'react-redux'


const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to="/shop">
                <h1>SHOP</h1>
            </Link>

            <Link className='option' to="/contact">
                <h1>CONTACT</h1>
            </Link>
            {
                currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>
                            <h1>SIGN OUT</h1>
                        </div>
                    :
                    <Link className='option' to="/signin"><h1>SIGN IN</h1></Link>
            }
        </div>
    </div>
)

//State here is the top level root reducer that it will get.
const mapStatetToProps = state => ({
    //Gets the user value and then the currentUser value from the root reducer.
    currentUser : state.user.currentUser
})
// The flow will be root reducer (state) --> userReducer (switch statemnet) --> value for currentUser from the return object.

// And then connect it to the header component here:
export default connect(mapStatetToProps)(Header)