import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Container, Form, Button, Col, Row} from 'react-bootstrap'

const Register = () => {

    let navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpass, setConfirmpass] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password
        }

        if(password !== confirmpass) {
            throw Error("Password is not the same")
        }

        const { data } = await axios.post('users/register', newUser)

        navigate('../login', {replace: true})
        console.log(data)
    }

    return (
        <div className="body__layout">
            <Navigation />
            <Container>
            <Row className="mx-auto">
                <Col sm={4} md={12} className="mx-auto" >
                    <Form onSubmit={handleSubmit} className="card p-4">
                        <h4 style={{color: '#0d6efd'}}>Register</h4>
                        <Form.Control onChange={e => setName(e.target.value) } value={name} className="my-3" type="text" placeholder="Full name" />
                    
                        <Form.Control onChange={e => setEmail(e.target.value) } value={email} className="my-3" type="email" placeholder="Email" />

                        <Form.Control onChange={e => setPassword(e.target.value)} value={password} className="my-3" type="password" placeholder="Password" />

                        <Form.Control onChange={e => setConfirmpass(e.target.value)} value={confirmpass} className="my-3" type="password" placeholder="Confirm Password" />

                        <Button className="form__submit-button" type="submit">Register</Button>
                    </Form>
                </Col>
                
            </Row>
            </Container>
        </div>
    )
}

export default Register
