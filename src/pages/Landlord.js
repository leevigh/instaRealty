import React from 'react'
import '../styles/Landlord.css'
import { Row, Button, Col } from 'react-bootstrap'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/auth'
import Navigation from '../components/Navigation'

const Landlord = () => {

    let navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)

    const [subAccount, setSubAccount] = React.useState({
        businessName: '',
        settlementBank: '',
        accountNumber: '',
        percentage_charge: 0.1
    }) 
    // console.log(user)
    const handleLogout = () => {
        dispatch(logout());
        navigate('../login', {replace: true})
    }

    const handleSubmit = () => {
        // const details
    }
    // console.log(user)
    // const [search, setSearch] = useState(false)

    // const toggleSearch = () => {
    //     setSearch(!search)
    // }

    return (
        <Wrapper>
            <Navigation />

            <h2>My rentals</h2>
            <Container>
                <Card>
                    {/* <CardTitle>My proper</CardTitle> */}
                    <CardBody>
                        <h3>Location</h3>
                        <h3>Occupied</h3>
                        <h3>Price</h3>
                        <h3>Tenant</h3>
                        <h3>Tenancy Expiration Date</h3>
                    </CardBody>
                </Card>

                <form onSubmit={handleSubmit}>
                    <label>business name</label>
                    <input type="text" value={subAccount.businessName} onChange={e => setSubAccount(e.target.value)} />
                    <label>settlement bank</label>
                    <input type="text" value={subAccount.settlementBank} onChange={e => setSubAccount(e.target.value)} />
                    <label>account number</label>
                    <input type="text" value={subAccount.accountNumber} onChange={e => setSubAccount(e.target.value)} />
                    <button type="submit">Send</button>
                </form>

            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 600px;
    width: 100%
    border: 1px solid black
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    padding: 2rem;

`
const Card = styled.div`
    width: 100%;
    border: 1px solid black;
`
const CardTitle = styled.div`

`
const CardBody = styled.div`
    h3 {

        font-size: 14px;
    }
`

export default Landlord
