import "../styles/Home.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="background-overlay"></div>
        <div className="div-1">
          <h1>
            Leaders in <span className="div-1-span-1">Yacht</span> Shipping
          </h1>
          <h3>
            Get carried away by <span className="div1-span-2">experience</span>
          </h3>
          
        </div>
        <div className="ship-container">
          <Image
            src="/images/half-shipe.png"
            width={560}
            height={300}
            alt="half-ship"
            className="ship-image"
          />
        </div>
        <marquee direction="left" scrollamount="12">WORLD CLASS-YACHT <span></span> WORLD CLASS-YACHT</marquee>
      </div>
      <div className="home-2"></div>
    </div>
  );
}
