"use client";

import "../styles/Home.css";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { LuMouse } from "react-icons/lu";
import "swiper/swiper-bundle.css";
import { CiCalendar } from "react-icons/ci";

const destinations = [
  {
    id: 1,
    name: "Africa",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
    image: "/images/transport-concept-with-boats-harbor.jpg",
    png_image: "/images/africa.png",
    mapBackground: "/images/african-curve.png",
  },
  {
    id: 2,
    name: "caribbean",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
    image: "/images/transport-concept-with-boats-harbor.jpg",
    png_image: "/images/africa.png",
    mapBackground: "/images/african-curve.png",
  },
  {
    id: 3,
    name: "Africa",
    description:
      "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.",
    image: "/images/transport-concept-with-boats-harbor.jpg",
    png_image: "/images/africa.png",
    mapBackground: "/images/african-curve.png",
  },
];

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="background-overlay"></div>
        <div className="div-1">
          <div className="div-top-h">
            <h1 className="div-top-h-1">Leaders in</h1>
            <h1 className="div-top-h-2">Yacht</h1>
            <h1 className="div-top-h-1">Shipping</h1>
          </div>
          <div className="div-top-h2">
            <h3 className="div-top-h2-1">Get carried away by</h3>
            <h3 className="div-top-h2-2">experience</h3>
          </div>
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
        <marquee direction="left" scrollamount="12">
          WORLD CLASS-YACHT <span></span> WORLD CLASS-YACHT
        </marquee>
      </div>
      <div className="home-2"></div>

      <div className="section-3">
        <div className="container-3">
          <div className="container-3-flex">
            <div className="animated-image">
              <div className="image-container-1">
                <Image
                  src="/images/shipe1.jpg"
                  width={500}
                  height={500}
                  alt="Cargo ship bow view"
                  className="animated-img-1"
                />
              </div>
              <div className="image-container-2">
                <Image
                  src="/images/shipe2.jpg"
                  width={500}
                  height={500}
                  alt="Aerial view of cargo ship"
                  className="animated-img-2"
                />
              </div>
              <div className="image-container-3">
                <Image
                  src="/images/shipe3.jpg"
                  width={500}
                  height={500}
                  alt="Cargo ship with yachts"
                  className="animated-img-3"
                />
              </div>
            </div>
            <div className="Experience-div">
              <h1>Get Carried Away By Experience</h1>
              <p className="Experience-div-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                accumsan dignissim enim, ac rhoncus nisi sagittis euismod.
                Aenean maximus, metus nec ultricies tincidunt, enim lacus
                finibus turpis, sed tincidunt enim erat eget ligula. Nam
                malesuada, diam id dapibus eleifend, nunc sem vestibulum urna,
                et lobortis quam libero vel diam.
              </p>
              <p className="Experience-div-p2">
                Donec dapibus volutpat leo sed imperdiet. Donec in volutpat
                augue. Aliquam nec libero et felis luctus tincidunt. Praesent et
                eros et neque facilisis viverra. Quisque elementum nunc sed
                suscipit lacinia. Etiam ac egestas quam. Donec dapibus aliquam
                enim.
              </p>
              <Link href="/">Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section-3-next">
        <h1 className="section-3-next-h">Our Services</h1>
        <div className="Our-Services">
          <div className="card-our-section">
            <div>
              <Image
                src="/images/shipe1.jpg"
                width={500}
                height={500}
                alt="Cargo ship bow view"
                className="card-1-image"
              />
            </div>
            <div className="card-dec">
              <p className="card-dec-p1">01</p>
              <h1 className="card-dec-h">yacht transport</h1>
              <p className="card-dec-p2">
                Efficient, secure, and reliable yacht shipping services,
                connecting ports across the globe. Whether it’s a private vessel
                or a mega yacht, we ensure safe transport tailored to your
                needs.
              </p>
              <Link href="/">Learn More</Link>
            </div>
          </div>

          {/* <div className="card-set">
            <div className="service-card">
              <div className="image-container">
                <Image
                  src="/images/yacht-transport-in-dubai.jpg"
                  width={500}
                  height={500}
                  alt="Cargo ship bow view"
                  className="set-image"
                />
              </div>
              <div className="content-overlay">
                <div className="service-number">02</div>
                <h2 className="service-title">Transport insurance</h2>
              </div>
            </div>
            <div className="service-card">
              <div className="image-container">
                <Image
                  src="/images/yacht-transport-in-dubai.jpg"
                  width={500}
                  height={500}
                  alt="Cargo ship bow view"
                  className="set-image"
                />
              </div>
              <div className="content-overlay">
                <div className="service-number">02</div>
                <h2 className="service-title">Transport insurance</h2>
              </div>
            </div>
            <div className="service-card">
              <div className="image-container">
                <Image
                  src="/images/yacht-transport-in-dubai.jpg"
                  width={500}
                  height={500}
                  alt="Cargo ship bow view"
                  className="set-image"
                />
              </div>
              <div className="content-overlay">
                <div className="service-number">02</div>
                <h2 className="service-title">Transport insurance</h2>
              </div>
            </div>
          </div> */}

          <div className="animated-image-1">
            <div className="image-container-1-1">
              <div>
                {" "}
                <Image
                  src="/images/shadow-1.jpg"
                  width={500}
                  height={500}
                  alt="Cargo ship bow view"
                  className="animated-img-1-1"
                />
              </div>

              <div className="content-overlay">
                <div className="service-number">02</div>
                <h2 className="service-title">Transport insurance</h2>
              </div>
            </div>
            <div className="image-container-2-1">
              <div>
                <Image
                  src="/images/shadow-2.jpg"
                  width={500}
                  height={500}
                  alt="Aerial view of cargo ship"
                  className="animated-img-2-1"
                />
              </div>

              <div className="content-overlay">
                <div className="service-number">02</div>
                <h2 className="service-title">Transport insurance</h2>
              </div>
            </div>
            <div className="image-container-3-1">
              <div>
                <Image
                  src="/images/shadow-3.jpg"
                  width={500}
                  height={500}
                  alt="Cargo ship with yachts"
                  className="animated-img-3-1"
                />
              </div>

              <div className="content-overlay">
                <div className="service-number">02</div>
                <h2 className="service-title">Transport insurance</h2>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", placeItems: "center" }}>
            <Link href="/" className="our-link">
              View All Services
            </Link>
          </div>
        </div>
      </div>

      <div className="section-4">
        <Swiper
          pagination={{
            type: "fraction",
            renderFraction: (current, total) => (
              <div className="flex items-center gap-1 font-mono">
                <span className="text-3xl font-bold">
                  {String(current).padStart(2, "0")}
                </span>
                <span className="text-base font-light opacity-80">
                  /{total}
                </span>
              </div>
            ),
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {destinations.map((destination, index) => (
            <SwiperSlide key={`destination-${destination.id}`}>
              <div className="slider-container">
                <div className="image-wrapper">
                  <Image
                    src={destination.image}
                    alt={`${destination.name} - Slide ${index + 1}`}
                    fill
                    priority
                    className="slider-image"
                  />
                </div>

                <div className="map-container">
                  <Image
                    src={destination.mapBackground}
                    alt="Map Background"
                    fill
                    className="map-background"
                  />
                  <Image
                    src={destination.png_image}
                    alt="Africa Map"
                    width={300}
                    height={300}
                    className="africa-map"
                  />
                </div>

                <div className="content-wrapper">
                  <h1>{destination.name}</h1>
                  <p>{destination.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="header-content">
          <h1>Destinations</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            accumsan dignissim enim, ac rhoncus nisi sagittis euismod. Aenean
            maximus, metus nec
          </p>
        </div>

        <button className="view-all-btn">View All Destinations</button>

        <div className="scroll-indicator">
          <span>Scroll down to view more</span>
          <LuMouse />
        </div>
      </div>

      <div className="section-5">
        <div className="container-5">
          <div className="container-flex-section">
            <div className="dec-div">
              <div>
                <Image
                  src="/images/Compass.png"
                  alt="Compass"
                  width={500}
                  height={500}
                  className="compass"
                />
              </div>

              <h1>What is Your Next Destinations</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                accumsan dignissim enim, ac rhoncus nisi sagittis euismod.
                Aenean maximus, metus nec ultricies tincidunt, enim lacus
                finibus turpis, sed tincidunt enim erat eget ligula. Nam
                malesuada, diam id dapibus eleifend, nunc sem vestibulum urna,
                et lobortis.
              </p>
            </div>
            <div className="key-div">
              <div className="key-div-shipe">
                <Image
                  src="/images/key-shipe.png"
                  alt="Compass"
                  width={500}
                  height={500}
                  className="key-shipe"
                />
              </div>
              <div className="input-date">
                <form>
                  <label htmlFor="dateFrom" className="label-date">
                    Departure
                  </label>
                  <input
                    type="date"
                    id="dateFrom"
                    name="dateFrom"
                    placeholder="Frome:"
                    required
                  />

                  <label htmlFor="dateTo" className="label-date">
                    Destination
                  </label>
                  <input
                    type="date"
                    id="dateTo"
                    name="dateTo"
                    placeholder="To:"
                    required
                  />

                  <button type="submit" className="input-date-btn">
                    Get a Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-6">
        <div className="container-6">
          <h1 className="container-6-h">What our clients have to say</h1>
          <p className="container-6-p">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>

          <div style={{ overflow: "visible" }}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={2.3}
              navigation={{
                enabled: true,
              }}
              pagination={{
                type: "progressbar",
                enabled: true,
              }}
              scrollbar={{
                hide: true,
              }}
              loop={true}
              initialSlide={0}
              watchOverflow={true}
              observer={true}
              observeParents={true}
              className="custom-swiper"
            >
              <SwiperSlide className="slider">
                <div className="slider-container-dec">
                  <div className="slider-logo-div">
                    <Image
                      src="/images/slider-logo.jpg"
                      width={1000}
                      height={1000}
                      alt=""
                      className="slider-logo"
                    />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, constetur adipiscing elit.
                    Suspendisse pharetra neque et mauris porta varius. Curabitur
                    quis maximus dui, et sodales est. Quis gravida dolor.
                    Pellentesque mollis ligula leo, a vehicula nisl iaculis id.
                    Vivamus mollis eros blandit dolor iaculis, sagittis enim
                    rhoncus. Donec lacinia eget lacus id laoreet. Suspendisse
                    porta.”
                  </p>
                  <div className="slider-per-name">
                    <h3>Anne Rivers</h3>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider">
                <div className="slider-container-dec">
                  <div className="slider-logo-div">
                    <Image
                      src="/images/slider-logo.jpg"
                      width={1000}
                      height={1000}
                      alt=""
                      className="slider-logo"
                    />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, constetur adipiscing elit.
                    Suspendisse pharetra neque et mauris porta varius. Curabitur
                    quis maximus dui, et sodales est. Quis gravida dolor.
                    Pellentesque mollis ligula leo, a vehicula nisl iaculis id.
                    Vivamus mollis eros blandit dolor iaculis, sagittis enim
                    rhoncus. Donec lacinia eget lacus id laoreet. Suspendisse
                    porta.”
                  </p>
                  <div className="slider-per-name">
                    <h3>Anne Rivers</h3>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider">
                <div className="slider-container-dec">
                  <div className="slider-logo-div">
                    <Image
                      src="/images/slider-logo.jpg"
                      width={1000}
                      height={1000}
                      alt=""
                      className="slider-logo"
                    />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, constetur adipiscing elit.
                    Suspendisse pharetra neque et mauris porta varius. Curabitur
                    quis maximus dui, et sodales est. Quis gravida dolor.
                    Pellentesque mollis ligula leo, a vehicula nisl iaculis id.
                    Vivamus mollis eros blandit dolor iaculis, sagittis enim
                    rhoncus. Donec lacinia eget lacus id laoreet. Suspendisse
                    porta.”
                  </p>
                  <div className="slider-per-name">
                    <h3>Anne Rivers</h3>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slider">
                <div className="slider-container-dec">
                  <div className="slider-logo-div">
                    <Image
                      src="/images/slider-logo.jpg"
                      width={1000}
                      height={1000}
                      alt=""
                      className="slider-logo"
                    />
                  </div>
                  <p>
                    “Lorem ipsum dolor sit amet, constetur adipiscing elit.
                    Suspendisse pharetra neque et mauris porta varius. Curabitur
                    quis maximus dui, et sodales est. Quis gravida dolor.
                    Pellentesque mollis ligula leo, a vehicula nisl iaculis id.
                    Vivamus mollis eros blandit dolor iaculis, sagittis enim
                    rhoncus. Donec lacinia eget lacus id laoreet. Suspendisse
                    porta.”
                  </p>
                  <div className="slider-per-name">
                    <h3>Anne Rivers</h3>
                    <p>Co-Founder</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="section-7">
        <div className="container-7">
          <h1 className="container-7h">Latest updates</h1>
          <div className="div-updates">
            <div className="update-big-card">
              <div>
                <Image
                  src="/images/update-1.jpg"
                  alt="Compass"
                  width={500}
                  height={500}
                  className="big-card-image"
                />
              </div>
              <div className="update-dec">
                <Link href="/">Learn More</Link>
                <h3>Fort Lauderdale International Boat Show</h3>
                <span>
                  <CiCalendar /> Jan 24, 2024
                </span>
              </div>
            </div>

            <div>
              <div className="update-small-cards">
                <div>
                  <Image
                    src="/images/update-2.jpg"
                    alt="Compass"
                    width={500}
                    height={500}
                    className="sub-image"
                  />
                </div>

                <div className="update-decX">
                  <Link href="/">Learn More</Link>
                  <h3>Monaco Yacht Show</h3>
                  <span>
                    <CiCalendar /> Jan 24, 2024
                  </span>
                </div>
              </div>
              <div className="update-small-cards">
                <div>
                  <Image
                    src="/images/update-3.jpg"
                    alt="Compass"
                    width={500}
                    height={500}
                    className="sub-image"
                  />
                </div>

                <div className="update-decX">
                  <Link href="/">Learn More</Link>
                  <h3>Helsinki International Boat Show</h3>
                  <span>
                    <CiCalendar /> Jan 24, 2024
                  </span>
                </div>
              </div>
              <div className="update-small-cards-X">
                <div>
                  <Image
                    src="/images/update-4.jpg"
                    alt="Compass"
                    width={500}
                    height={500}
                    className="sub-image"
                  />
                </div>

                <div className="update-decX">
                  <Link href="/">Learn More</Link>
                  <h3>International Sailors Affairs Flensburg</h3>
                  <span>
                    <CiCalendar /> Jan 24, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
