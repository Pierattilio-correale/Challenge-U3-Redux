import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { fetchArrayAction } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const myJobs = useSelector((state) => {
    return state.fetch.fetch;
  });
  const spinner = useSelector((state) => {
    return state.fetch.isLoading;
  });
  const error = useSelector((state) => {
    return state.fetch.isError;
  });

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchArrayAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {!spinner ? (
            myJobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          ) : (
            <div className="text-center my-5">
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {error && (
            <div className="my-5">
              <Alert variant="danger">Errore nella promis</Alert>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
