import { Button, Form, FormControl, Navbar, NavDropdown, Nav} from "react-bootstrap";
import {Wrapper} from './style';
export default function TopNav() {
    return (
        <Wrapper>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">JIHA SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">cart</Nav.Link>
                        <Nav.Link href="#action3">login</Nav.Link>
                        <NavDropdown title="마이 페이지" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">my info</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Wrapper>
    )
}