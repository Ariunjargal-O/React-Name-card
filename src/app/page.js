import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div>

      <div className="card">
        <p className="name">Ariunjargal</p>
        <p className="job">Developer</p>
        <div className="address">
          <img src="phone.png"></img>
          <p>000-123-456-789</p>
          <p>email@yourdomain.com</p>
          <p>Your address goes here <br /> 123  strett, Usa</p>

          <div className="imgdev">

            <img className="logoback" src="Shape.png"></img>

            <img className="name-logo" src="name-logo.png"></img>
            <img className="qr" src="Qr-code.png"></img>
          </div>
        </div>
      </div>

    </div>
  );
}
