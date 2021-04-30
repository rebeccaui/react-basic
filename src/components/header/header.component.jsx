import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';

import { ReactComponent as Logo } from '../../assets/kakashi.svg';

import './header.styles.scss';

const Header = ({ currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? (// if operator is false, render link. if true, render div
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                    <Link className='option' to='/signin'>SIGN IN</Link>
                )
            }
            <CartIcon />
            
            {/* <Link className='options' to='/'>
                <Logo className='logo' />
            </Link> */}
        </div>
    </div>
)

// function to pull state from rootreducer to set current user
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);