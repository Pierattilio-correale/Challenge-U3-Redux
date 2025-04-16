import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StoreRemember = () => {
  const navigate = useNavigate();
  const listCompanyLength = useSelector((state) => {
    return state.company.content.length;
  });

  return (
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
  );
};

export default StoreRemember;
