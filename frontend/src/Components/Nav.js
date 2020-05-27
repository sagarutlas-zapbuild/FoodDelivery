import React from 'react'
import { NavItem, NavLink, NavbarToggler, Nav } from 'reactstrap';

const TopNav = () => {
    if (localStorage.getItem('token') ? true : false) {
        return (<>

            <NavbarToggler aria-controls="responsive-navbar-nav" />

            <Nav className="mr-auto">
                <NavItem>
                    <NavLink href="/Home" style={{ marginLeft: "750px", marginTop: "20px" }}
                        className="btn btn-primary">Home</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/me" style={{ marginLeft: "40px", marginTop: "20px" }}
                        className="btn btn-primary">Hello {localStorage.getItem('user_name')}</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/cart" style={{ marginLeft: "40px", marginTop: "20px" }}
                        className="btn btn-primary">Cart</NavLink>
                </NavItem>

            </Nav>

        </>);
    }
    else {
        return (<>

            <NavbarToggler aria-controls="responsive-navbar-nav" />
            <Nav className="mr-auto">
                <NavItem>
                    <NavLink href="/Signup" className="btn btn-primary"
                        style={{ marginLeft: "750px", marginTop: "20px" }}>Signup</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Login" className="btn btn-primary"
                        style={{ marginLeft: "40px", marginTop: "20px" }}>Login</NavLink>
                </NavItem>
            </Nav>

        </>);
    }

}

export default TopNav;