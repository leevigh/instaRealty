import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/auth'
import { useNavigate, Link } from 'react-router-dom'
import { Row, Col, Container, Button} from 'react-bootstrap'
import Navigation from '../components/Navigation'

import '../Listings.css'

const Listings = () => {
    const {user, isLoggedIn } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="mx-auto">
            <Navigation />
            {/* <h3>{user && user.name}</h3>
            {isLoggedIn ? <Button className="btn btn-danger" onClick={handleLogout}>Logout</Button> : <Button className="" onClick={() => navigate('../login')}>Login</Button>} */}

                {/* <Row> */}
            <Container >
                <div class="row my-5">
                    <div className="card col-lg-3 col-md-4 col-sm col-xs-12">
                    {/* <Link to="/:id"> */}
                        <img className="card__image" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="house 1" />
                    {/* </Link> */}
                        {/* <hr /> */}
                        <div className="my-3">
                            <h5>2 Bedroom flat</h5>
                            <span className="price">N100,000</span>
                            
                            <div>
                                <span>🌟 🌟 🌟 🌟 </span>
                            </div>
                            <div>
                                <Button className="btn btn-success">Details</Button>
                            </div>
                        </div>
                    </div>

                    <div className="card col-lg-3 col-md-4 col-sm col-xs-12">
                        <img className="card__image" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="house 1" />
                        {/* <hr /> */}
                        <div className="my-3">
                            <h5>2 Bedroom flat</h5>
                            <span className="price">N100,000</span>
                            
                            <div>
                                <span>🌟 🌟 🌟 🌟 </span>
                            </div>
                            <div>
                                <Button className="btn btn-success">Details</Button>
                            </div>
                        </div>
                    </div>

                    <div className="card col-lg-3 col-md-4 col-sm col-xs-12">
                        <img className="card__image" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="house 1" />
                        {/* <hr /> */}
                        <div className="my-3">
                            <h5>2 Bedroom flat</h5>
                            <span className="price">N100,000</span>
                            
                            <div>
                                <span>🌟 🌟 🌟 🌟 </span>
                            </div>
                            <div>
                                <Button className="btn btn-success">Details</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
                {/* </Row> */}
            
            {/* <Row>
                <Col className="listing__column" sm={4} xs={12} md={6} lg={4}>
                    <Container>
                        <div className="card">
                            <img className="card__image" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="house 1" />
                        </div>
                    </Container>
                </Col>

                <Col className="listing__column" sm={4} xs={12} md={6} lg={4}>
                    <Container>
                        <div className="card">
                            <img className="card__image" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="house 1" />
                        </div>
                        <div className="card__body">
                            <h4>2 Bedroom apartment</h4>
                            <span>$200</span><br/>
                            <span>🏠 </span>
                        </div>
                    </Container>
                </Col>

                <Col className="listing__column" sm={4} xs={12} md={6} lg={4}>
                    <Container>
                        <div className="card">
                            <img className="card__image" className="card__image" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="house 1" />
                        </div>
                    </Container>
                </Col>
            </Row> */}
        </div>
    )
}

export default Listings
