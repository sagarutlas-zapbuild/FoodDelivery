import React from 'react'
import { Navbar, NavItem, NavLink, NavbarToggler, Nav, Collapse } from 'reactstrap';

const TopNav = () => {
    if (localStorage.getItem('token') ? true : false) {
        return (<div>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Collapse className="justify-content-end">

                <Nav className="mr-auto">
                    <NavItem>
                        <NavLink href="/Home">Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/me">Hello, {localStorage.getItem('user_name')}</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/cart">Cart</NavLink>
                    </NavItem>

                </Nav>
            </Collapse>

        </div>);
    }
    else {
        return (<>

            <NavbarToggler aria-controls="responsive-navbar-nav" />
            <Nav className="mr-auto">
                <NavItem>
                    <NavLink href="/Signup" className="btn btn-primary"
                    style={{marginLeft: "750px",marginTop:"20px"}}>Signup</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Login" className="btn btn-primary"
                    style={{marginLeft: "40px",marginTop:"20px"}}>Login</NavLink>
                </NavItem>
            </Nav>

        </>);
    }

}

export default TopNav;