import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logo from '../../../assets/images/Logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Image style={{ height: '40px' }} src={Logo}></Image>
                    <b>  Bangladesh Travel</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/blog'>Blog</Nav.Link>
                    <Nav.Link href="/reviewPage">Review</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>
                    {
                        user?.uid ?
                            <>
                             <span>{user?.displayName}</span>
                              <Button variant="light">My Review</Button>
                              <Button variant="light">Add Service</Button>
                              <Button variant="light" onClick={handleLogOut}>Log out</Button>
                            </>
                             :
                              <>
                             <Link to='/login'>Login</Link>
                             </>
                        }
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;