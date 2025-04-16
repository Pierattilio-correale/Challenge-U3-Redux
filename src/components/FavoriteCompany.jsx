import { Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const FavoriteCompany = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.company.content);

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {favorites.map((companyName, i) => (
            <li key={i} className="my-3 d-flex align-items-center ms-3">
              <Button
                variant="danger"
                className="me-3"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_FAVORITE",
                    payload: companyName,
                  })
                }
              >
                <i className="bi bi-trash-fill"></i>
              </Button>
              <span>
                <Link to={"/" + companyName}>{companyName}</Link>
              </span>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default FavoriteCompany;
