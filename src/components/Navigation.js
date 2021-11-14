import React, { useState } from 'react'
import menu from '../icons/menu.svg'
import '../Navigation.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { logout } from '../store/auth'
import { Container, Button, Navbar, Offcanvas, Col, Row, Image } from 'react-bootstrap'

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
            <Container fluid>
                <Navbar className="container__nav" expand="false" variant="light" bg="light">
                    <Col>
                    <Container style={{  width: "2rem", margin: "0 1.5rem"}}>
                        <img onClick={handleShow} className="container__menu-icon" src={menu} alt="menu icon"/>
                    </Container>
                    </Col>

                    <Col>
                    <Container>
                        <span>🏘 InstaRealty</span>
                    </Container>
                    </Col>

                    <Col>
                    <Container className="nav__container">
                        {/* {search ? 
                        <Form className="form" onSubmit={toggleSearch}>
                            <Form.Control className="container__form-control" type="text" placeholder="Search Rentals" />
                        </Form> : 
                        <span onClick={toggleSearch}>Search Icon</span>} */}

                        {isLoggedIn && user.role === "landlord" ? <Link to="/create-rental"><Button className="container__button--green" variant="outline-success">+ Create Rental</Button></Link> : <div></div>}
                        
                    </Container>
                    </Col>

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
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar>
            </Container>
        // </div>
    )
}

export default Navigation
