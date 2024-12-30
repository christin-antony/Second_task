import "../styles/Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="container-1">
          <div className="left-section">
            <Link href="/">
              <Image
                src="/images/Vector.png"
                width={182}
                height={66.51}
                alt="Logo"
                className="nav-logo"
              />
            </Link>
          </div>

          <div className="right-section">
            <ul className="nav-links">
              <li>
                <Link href="/#" className="nav-t">
                  About
                </Link>
              </li>
              <li>
                <div className="dropdown">
                  <Link href="/#" className="nav-t">
                    Services <RiArrowDropDownLine className="drop-icon" />
                  </Link>
                  <div className="dropdown-content">
                    <Link href="/#" className="nav-t">
                      Services
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                
                <Link href="/#" className="nav-t">
                  Company
                </Link>
              </li>
              <li>
                <div className="dropdown">
                  <Link href="/#" className="nav-t">
                    Destinations <RiArrowDropDownLine className="drop-icon" />
                  </Link>
                  <div className="dropdown-content">
                    <Link href="/#" className="nav-t">
                      Destinations
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <Link href="/#" className="nav-t">
                    News & Media <RiArrowDropDownLine className="drop-icon" />
                  </Link>
                  <div className="dropdown-content">
                    <Link href="/#" className="nav-t">
                      News & Media
                    </Link>
                  </div>
                </div>
              </li>
            </ul>

            <Link href="/#" className="nav-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
