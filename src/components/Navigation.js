import React, { useState } from 'react'
import menu from '../icons/menu.svg'
import '../styles/Navigation.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { logout } from '../store/auth'
import { Container, Navbar, Offcanvas, Col, Row, Image } from 'react-bootstrap'
import styled from 'styled-components'

const Navigation = () => {
    const {user, isLoggedIn} = useSelector(state => state.auth)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        // <div style={{margin: '0', padding: '0'}}>
            // <Container>
                <Nav>
                    <div style={{  width: "2rem"}}>
                        <img onClick={handleShow} className="container__menu-icon" src={menu} alt="menu icon"/>
                    </div>

                    <div>
                        <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                        <span style={{color: 'green'}}>🏘 <strong>InstaRealty</strong></span>
                        </Link>
                    </div>

                    <div className="nav__container">

                        {!isLoggedIn ? 
                        <div className="nav__container-links">
                            <div className="nav__container-linkReg"><Link to="/register" style={{textDecoration: 'none', color: 'black', }}>Register</Link></div>
                            <div className="nav__container-linkLog"><Link to="/login" style={{textDecoration: 'none', color: 'black'}}>Login</Link></div>
                        </div> : <div></div>}

                        {/* {isLoggedIn && user.role === "landlord" ? 
                            <div>
                                <Link to="/create-rental">
                                    <Button>
                                        + Create Rental
                                    </Button>
                                </Link>
                            </div> 
                            
                            : 
                            <div></div>
                        } */}
                        
                    </div>
                    {/* </Col> */}

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title><span>🏘 InstaRealty</span></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Row>
                                <Col xs={3} md={3} sm={3}>
                                    <Image src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png" width="100px" height="100px" roundedCircle />
                                </Col>
                                <Col className="mx-5">
                                    <h3>{user && user.name}</h3>
                                    {isLoggedIn ? <Button className="btn btn-danger" onClick={handleLogout}>Logout</Button> : <Button className="" onClick={() => navigate('../login')}>Login</Button>}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {isLoggedIn && user.role === "landlord" ? 
                                        <div>
                                            <Link to="/create-rental">
                                                <Button>
                                                    + Create Rental
                                                </Button>
                                            </Link>
                                        </div> 
                                        
                                        : 
                                        <div></div>
                                    }
                                </Col>
                            </Row>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Nav>
            // </Container>
        // </div>
    )
}

const Nav = styled.nav`
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    padding: 2rem;
`

const Button = styled.button`
    padding: 0.3rem;
`

export default Navigation
