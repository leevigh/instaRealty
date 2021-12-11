import React from 'react'
import '../styles/Landlord.css'
import { Container, Row, Button, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/auth'
import Navigation from '../components/Navigation'

const Landlord = () => {

    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    // console.log(user)
    const handleLogout = () => {
        dispatch(logout());
        navigate('../login', {replace: true})
    }
    // console.log(user)
    // const [search, setSearch] = useState(false)

    // const toggleSearch = () => {
    //     setSearch(!search)
    // }

    return (
        <div className="body__layout">
            <Navigation />

            <Row>
                {/* <h2>{user && user.name}</h2>
                <Col>
                    <Button onClick={handleLogout} className="btn-danger">Logout</Button>
                </Col> */}
                <Container>
                    <div className="card">
                        <div className="card__body">
                            <h5>Rentals</h5>
                            <div className="card__body--row">
                                <h2>4</h2>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="card">
                        <div className="card__body">
                            <h5>Rentals</h5>
                            <div className="card__body--row">
                                <h2>4</h2>
                            </div>
                        </div>
                    </div>
                </Container>
            </Row>
            {/* <Container className="container" fluid>
                <Navbar className="container__nav" expand="false" variant="light" bg="light">
                    

                    

                    <Container>
                        <Form.Control className="container__form-control" type="text" placeholder="Search Rentals" />
                    
                        <Button className="container__button--green" variant="outline-success">+ Create Rental</Button>
                    </Container>
                </Navbar>
                <Container>
                        <Navbar.Toggle className="container__toggle-open" aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        />
                    </Container>

                <Container className="aside">
                        <Navbar.Offcanvas className="aside__offcanvas">
                        <Offcanvas.Header className="aside__toggle-close" closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Form className="d-flex">
                                <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
            </Container> */}
        </div>
    )
}

export default Landlord
