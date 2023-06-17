import { Button, Stack } from "react-bootstrap";
import "../css/changepage.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ChangePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialPage = determineInitialPage(location.pathname);
  const [page, setPage] = useState(initialPage);
  const [btnName, setBtnName] = {""};

  const

  const handleClickNext = () => {
    if (page >= 4) {
      return;
    }
    switch (page + 1) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/select-plan");
        break;
      case 3:
        navigate("/addons");
        break;
      case 4:
        navigate("/finishing-up");
        break;
      default:
        navigate("/");
        break;
    }
    setPage(page + 1);
  };
  const handleClickPrevious = () => {
    if (page <= 1) {
      return;
    }
    switch (page - 1) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/select-plan");
        break;
      case 3:
        navigate("/addons");
        break;
      case 4:
        navigate("/finishing-up");
        break;
      default:
        navigate("/");
        break;
    }
    setPage(page - 1);
  };

  return (
    <>
      <Stack className="container-fluid" direction="horizontal">
        <Button
          id="prev-btn"
          variant="outline-secondary"
          onClick={handleClickPrevious}
        >
          Previous Step
        </Button>
        <Button id="next-btn" variant="primary" onClick={handleClickNext}>
          {btnName}
        </Button>
      </Stack>
    </>
  );

  function determineInitialPage(pathname) {
    switch (pathname) {
      case "/":
        return 1;
      case "/select-plan":
        return 2;
      case "/addons":
        return 3;
      case "/finishing-up":
        return 4;
      default:
        return 1;
    }
  }
}

export default ChangePage;
