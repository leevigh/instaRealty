import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
import { login } from '../store/auth'
import '../styles/Login.css'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'

import Navigation from '../components/Navigation'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    // const {user, isLoggedIn} = useSelector(state => state.auth)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
        .then(response => {
            console.log(response.payload)
            console.log(response.payload.user.role)
            if(response.payload.user.role === "landlord") {
                navigate('../dashboard')
            } else {
                navigate('../')
            }
        })
        .catch(error => console.error(error))
        // setLoading(true)
        // const authUser = await JSON.parse(localStorage.getItem('user'))
        // console.log(user)
        // if(isLoggedIn) {
        //     if(user.role === 'landlord') {
        //         navigate('../dashboard', {replace: true})
        //     }
        // }

        // navigate('../', {replace: true})
        // setLoading(false)

    }

    return (
        <div className="body__layout">
            <Navigation />
            <Container>
            <Row className="mx-auto">
                <Col sm={4} md={12} className="mx-auto" >
                    <Form onSubmit={handleSubmit} className="card p-4">
                        <h4 style={{color: '#0d6efd'}}>Login</h4>
                        <Form.Control onChange={e => setEmail(e.target.value) } value={email} className="my-3" type="email" placeholder="Email" />

                        <Form.Control onChange={e => setPassword(e.target.value)} value={password} className="my-3" type="password" placeholder="Password" />
                        <Button className="form__submit-button" type="submit" disabled={loading}>Login</Button>
                        <p>Not registered? <Link to='/register'>Create an account</Link></p>
                    </Form>
                </Col>
                
            </Row>
            </Container>
        </div>
    )
}

export default Login
