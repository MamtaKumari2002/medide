import React, { useEffect } from "react";
import "./footer.css";
import "./footer.scss";
import { FiSend } from "react-icons/fi";
import { FaBriefcaseMedical } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

import video2 from "../../Assets/video2.mp4";
const Footer = () => {
  // lets create a react hook to add a scroll animation....
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Medical Care with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" classname="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <FaBriefcaseMedical className="icon" />
                Medical Care
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Experience our commitment to exceptional medical care, where your
              well-being is our priority. Our dedicated team of professionals is
              here to provide you with the highest quality healthcare services,
              ensuring your peace of mind and a healthier future.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                MedTurism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                MedTripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Chennai
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Mumbai
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Delhi
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Banglore
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Vellore
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST MEDICAL TOURISM WEBSITE FOR INDIA</small>
            <small>COPYRIGHTS RESERVED - MEDTECH 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
