import React from "react";
import { Button, Typography } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import Products from "../product";
import "./style.css";
import offer from "../../../asset/img/offer.jpeg";
import navvarsh from "../../../asset/img/navvarsh.jpeg";
import hmareyha from "../../../asset/img/hmareyha.jpeg";

const Home = () => {
  const carouselItem = [
    {
      name: "newYearOffer",
      link: "https://www.kent.co.in/images/banner/banner-bg.jpg",
    },
    { name: "newYearOffer", link: offer },
    { name: "newYearOffer", link: navvarsh },
  ];
  return (
    <>
      <div
        style={{
          minHeight: "calc(100vh - 128px)",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
          background: "#f8f9fa",
        }}
      >
        <Carousel className="carousel">
          {carouselItem.map((item, index) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.link}
                  alt="First slide"
                  width="100%"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div className="mobie-banner">
          <h2>
            Buy Water Purifiers <br /> At Lowest Price
          </h2>
          <img
            src="https://www.kent.co.in/images/banner/mobile-banner-product.webp"
            width="80%"
          />
          <p>Best Place to Buy</p>
          <div className="contact-banner">
            <Button
              href="tel:8920310622"
              variant="contained"
              color="secondary"
              startIcon={<CallIcon />}
            >
              8920310622
            </Button>
            <Button
              href="https://wa.me/918920310622?text=I'm%20interested"
              variant="contained"
              color="success"
              startIcon={<WhatsAppIcon />}
              // style={{ marginTop: "5px" }}
            >
              Whatsapp
            </Button>
          </div>
        </div>

        {/* <Carousel>
        {carouselItem.map((item, index) => {
          return (
            <div>
              <h1>hello</h1>
              <img src={item.link} key={index} />
            </div>
          );
        })}
      </Carousel> */}
        <div className="product-intro">
          <h2>RO Water Purifiers</h2>
          <div className="product-intro-left">
            <p>
              Trusted by Millions, India’s highest selling and most awarded KENT
              RO Water Purifiers make your water 100% pure. With its
              revolutionary Mineral ROTM technology and multiple purification
              process of RO+UV+UF, KENT ensures 100% pure & healthier drinking
              water.
            </p>
            {/* <button className="view-more">see more</button> */}
            <Link to="/products">
              <Button variant="contained">View More</Button>
            </Link>
          </div>
          <div className="product-intro-right">
            <img
              src="https://www.kent.co.in/images/ro/water-purifiers.png"
              alt="RO purifiers"
              width="300px"
            ></img>
          </div>
        </div>
        <div className="product-intro">
          <h2>UV Water Purifiers</h2>
          <div className="product-intro-left">
            <p>
              Pragya RO System offers innovative UV Water Purifiers that are
              easy to use and disinfect water without altering its taste and
              odour. These purifiers are equipped with UV followed by UF
              membrane to disinfect water, making it free from deadly bacteria,
              viruses and cysts.
            </p>
            {/* <button className="view-more">see more</button> */}
            <Link to="/products">
              <Button variant="contained">View More</Button>
            </Link>
          </div>
          <div className="product-intro-right">
            <img
              src="https://www.kent.co.in/images/water-purifiers/uv/uv-water-purifiers-main-banner.png"
              alt="RO purifiers"
              width="300px"
            ></img>
          </div>
        </div>
        <div className="filterdProduct">
          <Typography
            component={"h6"}
            variant="h5"
            p={"20px 20px 0px 20px"}
            mx={2}
            sx={{
              fontWeight: "bold",
              borderBottom: "2px solid black",
              // fontSize: "1.5em",
            }}
          >
            Aquaguard
          </Typography>
          <Products filterData="Aqua" />
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <Link
              to={"/pragyarosystem/products"}
              style={{
                padding: "8px",
                border: "1px solid black",
                borderRadius: "25px",
                textDecoration: "none",
              }}
            >
              see all
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
