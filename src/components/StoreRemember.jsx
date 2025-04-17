import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const StoreRemember = () => {
  const navigate = useNavigate();
  const listCompanyLength = useSelector((state) => {
    return state.company.content.length;
  });

  return (
    <>
      <Navbar expand="lg" className="bg-tertiary">
        <Container>
          <Link className="navbar-brand" to="/">
            Redux-Jobs
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-flex justify-content-end my-4 me-4">
        <Button
          variant="success"
          onClick={() => navigate("/favourites")}
          className="d-flex align-items-center"
        >
          <span className="me-2 ">
            <i className="bi bi-heart-fill"></i> {listCompanyLength}
          </span>
        </Button>
      </div>
    </>
  );
};

export default StoreRemember;
