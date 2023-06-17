import { Container, Stack } from "react-bootstrap";
import "../css/finishingup.css";

export default function FinishingUp() {
  return (
    <Container>
      <div id="finishingup-container">
        <div id="heading-finishingup">
          <div>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming</p>
          </div>
          <div id="other-container">
            <div id="container-within">
              <div className="main-sections">
                <div id="arcade">
                  <h2>Arcade (Monthly)</h2>
                  <a href="#">Change</a>
                </div>
                <div>
                  <p className="price-fonts">$9/mo</p>
                </div>
              </div>
              <div className="main-sections">
                <div>
                  <p>Online service</p>
                </div>
                <div>
                  <p className="price-fonts">+$1/mo</p>
                </div>
              </div>
              <div className="main-sections">
                <div>
                  <p>Larger storage</p>
                </div>
                <div>
                  <p className="price-fonts">+$2/mo</p>
                </div>
              </div>
            </div>
          </div>
          <div id="total" className="main-sections">
            <p>Total (per month)</p>
            <p className="price-fonts">+$12/mo</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
