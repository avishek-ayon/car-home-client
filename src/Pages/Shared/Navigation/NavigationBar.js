import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import { NavLink } from 'react-router-dom';
import useAuth from '../../../Components/hooks/useAuth';


const Header = () => {

    const { user, error, logout } = useAuth()

    const navStyle = {
        textDecoration: "none",
        margin: "0 8px",
        color: "white",
        fontSize: "17px",
        fontWeight: "bold",
        textTransform: "Uppercase",
    };

    const active = {
        color: "#ff136f",
        borderBottom: "2px solid #ff136f",
    };

    return (
        <div>

            <Navbar bg="primary" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <NavLink
                        className="hoverStyle text-decoration-none sm-mb-3"
                        to="/home"
                    >
                        <Navbar.Brand className="text-white fw-bold fs-1 text-success" href="#home">Car Home</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/home"
                            >
                                Home
                            </NavLink>


                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/dashboard"
                            >
                                Dashboard
                            </NavLink>

                            <NavLink
                                className="hoverStyle"
                                style={navStyle}
                                activeStyle={active}
                                to="/explore"
                            >
                                Explore
                            </NavLink>

                            {user.displayName ? (
                                <div>
                                    <NavDropdown
                                        title={
                                            <>
                                                <img
                                                    style={{ width: "45px", borderRadius: "50%" }}
                                                    src={user.photoURL}
                                                    alt="profile"
                                                />
                                            </>
                                        }
                                    >
                                        <div className="text-center">
                                            <p>{user.displayName}</p>
                                            <p>{user.email}</p>
                                            <div className="text-center">
                                                <button onClick={logout} className="btn btn-primary">
                                                    Log Out
                                                </button>
                                            </div>
                                        </div>
                                    </NavDropdown>
                                </div>
                            ) : (
                                <>
                                    <NavLink
                                        className="hoverStyle"
                                        style={navStyle}
                                        activeStyle={active}
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                    <NavLink
                                        className="hoverStyle"
                                        style={navStyle}
                                        activeStyle={active}
                                        to="/register"
                                    >
                                        Sign up
                                    </NavLink>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>
    );
};

export default Header;