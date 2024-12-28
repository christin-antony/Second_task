import "../styles/Footer.css";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        

        <div className="top-section">
          <div className="newsletter">
            <Image
              src="/images/logoX.png"
              width={86.87}
              height={116.38}
              alt="Logo"
              className="orange-logo"
            />
            <div>
              <h3>Subscribe To Our Newsletter</h3>
              <div className="input-group">
                <input type="email" placeholder="Email Address" />
                <button><FaArrowRightLong className="input-btn" /></button>
              </div>
            </div>
          </div>

          <div className="contact">
            <div>
              <h2>Contact Us</h2>
              <p className="contact-p1">inquiry@cigisped-me.net</p>
            </div>

            <p className="contact-p2">+ (971) 4 323 2525</p>
          </div>
        </div>

        <div className="links-section">
          <div className="destinations-grid">
            <div>
              <h2>Destinations</h2>
              <p>Africa</p>
              <p>Caribbean</p>
              <p>Central America</p>
              <p>Europe</p>
              <p>Mexico</p>
            </div>
            <div className="middle-est">
              <p>Middle East</p>
              <p>North America</p>
              <p>East and India</p>
              <p>Pacific</p>
              <p>South America</p>
            </div>
          </div>

          <div className="quick-links">
            <div>
              <h2>Quick Links</h2>
              <Link href="/">About</Link>
              <Link href="/">Services</Link>
              <Link href="/">Company</Link>
              <Link href="/">News & Media</Link>
              <Link href="/">Contact Us</Link>
            </div>

            <div>
              <h2>Downloads</h2>
              <Link href="/" className="download-btn-1">
                Booking Note
              </Link>
              <Link href="/" className="download-btn-2">
                General Conditions
              </Link>
              <Link href="/" className="download-btn-3">
                Heavy-lift rider
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024. Cigisped middle east | All Rights Reserved | Terms and
            Conditions | Privacy Policy
          </p>
          <div className="social-icons">
            <Link href="/">
              <FaFacebookF />
            </Link>
            <Link href="/">
              <FaXTwitter />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaLinkedinIn />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    
    </footer>
  );
}
