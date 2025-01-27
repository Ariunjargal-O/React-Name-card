import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
    <div>

      <div className="card">
        <p className="name">Ariunjargal</p>
        <p className="job">Coding</p>
        <div className="address">
          <p>000-123-456-789</p>
          <p>email@yourdomain.com</p>
          <p>Your address goes here <br /> 123  strett, Usa</p>

<div className="imgdev">

  <img src="Vector1png.png"></img>
  <img src="Vector2.png"></img>
  <img src="Vector3.png"></img>
  <img src="back.png"></img>
</div>
          <img src="Qr-code.png"></img>
        </div>
      </div>

    </div>
  );
}
