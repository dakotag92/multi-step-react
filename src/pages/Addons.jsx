import { Container, Stack } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import "../css/addons.css";

export default function Addons() {
  return (
    <Container>
      <div id="main-container">
        <div id="addons-container">
          <div id="margin-div">
            <h1>Pick addon-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
          </div>
          <div className="addons">
            <div>
              <Checkbox />
            </div>
            <div className="size-of-font">
              <h2>Online services</h2>
              <p>Access to multiplayer games</p>
            </div>
            <div className="price-element">
              <p>+$1/mo</p>
            </div>
          </div>

          <div className="addons">
            <div>
              <Checkbox />
            </div>
            <div className="size-of-font">
              <h2>Larger storage</h2>
              <p>Extra 1TB of cloud save</p>
            </div>
            <div className="price-element">
              <p>+$2/mo</p>
            </div>
          </div>
          <div className="addons">
            <div>
              <Checkbox />
            </div>
            <div className="size-of-font">
              <h2>Customizable profile</h2>
              <p>Custom theme on your profile</p>
            </div>
            <div className="price-element">
              <p>+$2/mo</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
