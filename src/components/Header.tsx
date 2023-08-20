import { useQuery } from '@tanstack/react-query';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { fetchCategories } from '../utils/fetchers';

const Header: React.FC = () => {
    const { data } = useQuery<string[]>({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    });

    return (
        <header>
            <Container>
                <Navbar expand='md'>
                    <div className='d-flex justify-content-between w-100'>
                        <Navbar.Brand>My Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    </div>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <LinkContainer to='/'>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/products'>
                                <Nav.Link>Products</Nav.Link>
                            </LinkContainer>
                            <NavDropdown
                                title='Categories'
                                id='basic-nav-dropdown'
                            >
                                {data?.map((category) => (
                                    <LinkContainer
                                        to={`/products/${category}`}
                                        key={category}
                                    >
                                        <NavDropdown.Item>
                                            {category}
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                ))}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
