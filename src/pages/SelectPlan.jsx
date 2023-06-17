import { Stack, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import "../css/selectplan.css";

export default function SelectPlan() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const [arcadeIsSelected, setArcadeIsSelected] = useState(false);
  const handleSelect = () => {
    setArcadeIsSelected(!arcadeIsSelected);
  };
  const [advancedIsSelected, setAdvancedIsSelected] = useState(false);
  const handleSelectAdvanced = () => {
    setAdvancedIsSelected(!advancedIsSelected);
  };
  const [proIsSelected, setProIsSelected] = useState(false);
  const handleSelectPro = () => {
    setProIsSelected(!proIsSelected);
  };
  return (
    <Stack className="d-flex align-items-center">
      <div id="select-plan">
        <Container>
          <h1>Select your plan</h1>
          <p>You have the option of monthlyl or yearly billing.</p>
          <div>
            <div>
              <Button
                className={`button ${arcadeIsSelected ? "active" : ""}`}
                onClick={handleSelect}
                variant="outline-secondary"
              >
                <div id="arcade-btn">
                  <div>
                    <img
                      src="../assets/images/icon-arcade.svg"
                      alt="arcade-image"
                    />
                  </div>
                  <div id="arcade-div">
                    <h2>Arcade</h2>
                    <p>$9/mo</p>
                  </div>
                </div>
              </Button>
            </div>
            <div>
              <Button
                className={`button ${advancedIsSelected ? "active" : ""}`}
                onClick={handleSelectAdvanced}
                variant="outline-secondary"
              >
                <div id="advanced-btn">
                  <div>
                    <img
                      src="../assets/images/icon-advanced.svg"
                      alt="advanced-image"
                    />
                  </div>
                  <div>
                    <h2>Advanced</h2>
                    <p>$12/mo</p>
                  </div>
                </div>
              </Button>
            </div>
            <div>
              <Button
                className={`button ${proIsSelected ? "active" : ""}`}
                onClick={handleSelectPro}
                variant="outline-secondary"
              >
                <div id="pro-btn">
                  <div>
                    <img src="../assets/images/icon-pro.svg" alt="pro-image" />
                  </div>
                  <div>
                    <h2>Pro</h2>
                    <p>$15/mo</p>
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <div id="billing-select">
            <div>
              <h3>Monthly</h3>
              <Switch
                checked={isToggled}
                onChange={handleToggle}
                color="primary"
                inputProps={{ "aria-label": "toggle button" }}
              />
              <h3>Yearly</h3>
            </div>
          </div>
        </Container>
      </div>
    </Stack>
  );
}
