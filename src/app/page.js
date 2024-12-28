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

      <div className="section-4">
        <Swiper
         pagination={{
          type: "fraction",
          renderFraction: (current, total) => (
            <div className="flex items-center gap-1 font-mono">
              <span className="text-3xl font-bold">
                {String(current).padStart(2, '0')}
              </span>
              <span className="text-base font-light opacity-80">/{total}</span>
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
            <div>
              <h1>What is Your Next Destinations</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan dignissim enim, ac rhoncus nisi sagittis euismod. Aenean maximus, metus nec ultricies tincidunt, enim lacus finibus turpis, sed tincidunt enim erat eget ligula. Nam malesuada, diam id dapibus eleifend, nunc sem vestibulum urna, et lobortis.</p>
            </div>
            <div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
