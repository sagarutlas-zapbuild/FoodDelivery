import React from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Nav, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
    if (localStorage.getItem('token') ? true : false) {
        return (<>
            
                <NavbarBrand >Food Delivery</NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Collapse className="justify-content-end">

                    <Nav className="mr-auto">
                        <NavItem>
                            <NavLink as={Link} href="/ome">Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink as={Link} href="/me">Hello, {localStorage.getItem('user_name')}
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink as={Link} href="/cart">Cart
                            </NavLink>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            
        </>);
    }
    else {
        return (<>
            
                <NavbarBrand >Food Delivery</NavbarBrand>
                <NavbarToggler aria-controls="responsive-navbar-nav" />
                    <Nav className="mr-auto">
                        <NavItem>
                            <NavLink as={Link} href="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink as={Link} href="/login">Login</NavLink>
                        </NavItem>
                    </Nav>
            
        </>);
    }

}

export default TopNav;