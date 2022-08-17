import React, { useState } from 'react'
import '../styles/Navigation.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { logout } from '../store/auth'
// import { Container, Navbar, Offcanvas, Col, Row, Image } from 'react-bootstrap'
// import styled from 'styled-components'

const Navigation = () => {
    const {user, isLoggedIn} = useSelector(state => state.auth)

    const [show, setShow] = useState('hidden');

    // const handleClose = () => setShow(false);
    const handleShow = () => show === 'hidden' ? setShow('') : setShow('hidden');

    // const dispatch = useDispatch()
    // const navigate = useNavigate();

    // const handleLogout = () => {
    //     dispatch(logout())
    // }

    // const changeBackground = () => {
    //     if(window.scrollY >= 80) {
    //         setShow('hidden')
    //     }
    // }

    // window.addEventListener('scroll', changeBackground)

    return (
        <>
            <nav className='flex justify-between items-center p-6 z-20 bg-white sticky top-0'>
                <div>
                    <Link to="/">Instarealty</Link>
                </div>

                <div className='flex items-center'>
                    <button className='border-2 border-green-500 rounded-md w-24 p-2 mr-4 bg-green-500 text-white'>
                        <Link to="/register">Sign up</Link>
                    </button>
                    <div className='flex flex-col w-8' onClick={() => handleShow()}>
                        {show === 'hidden' ?
                            <>
                                <div className='border-solid border-2 border-stone-900 mb-1'></div>
                                <div className='border-solid border-2 border-stone-900 mb-1'></div>
                                <div className='border-solid border-2 border-stone-900 mb-1'></div>
                            </>
                        :
                            <>
                                <div className='border-solid border-2 border-stone-900 -mt-2 close-top'></div>
                                <div className='border-solid border-2 border-stone-900 -mb-5 close-bottom'></div>
                            </>
                        }
                    </div>
                </div>
            </nav>
            <div className={`p-6 flush ${show} z-20 fixed top-18 bg-white w-full md:hidden`}>
                <ul>
                    <li className='pb-4'><Link to='/'>Home</Link></li>
                    <li className='pb-4'><Link to='/rentals'>Listings</Link></li>
                    <li className='pb-4'><Link to='/about'>About us</Link></li>
                    <li className='pb-4'><Link to='/profile'>Profile</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navigation
