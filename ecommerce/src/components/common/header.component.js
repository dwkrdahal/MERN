import { Navbar, Container, NavDropdown,Nav, Form,FormControl, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export function HeaderComponent(){
    

    return ( <>
        {/* <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="contact-us">Contact US</NavLink>
                    <NavLink className="nav-link" to="login">Login</NavLink>
                    <NavLink className="nav-link" to="register">Register</NavLink>

                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar> */}

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="">EcOmMeRcE</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="users">Users</NavLink>
                    <NavLink className="nav-link" to="contact-us">Contact Us</NavLink>
                    <NavLink className="nav-link" to="login">Login</NavLink>
                    <NavLink className="nav-link" to="register">Register</NavLink>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}