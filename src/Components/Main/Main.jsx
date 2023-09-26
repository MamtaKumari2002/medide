import React, { useEffect } from "react";
import "./main.css";
import "./main.scss";

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

// let me import the images so we dont have this error on the browser.
import img from "../../Assets/AppolloHostChennai.jpg";
import img2 from "../../Assets/MIOTHostChennai.jpg";
import img3 from "../../Assets/KauveryHostChennai.jpg";
import img4 from "../../Assets/CMCHostVellore.jpg";
import img5 from "../../Assets/SevenhillsHostMumbai.jpg";
import img6 from "../../Assets/HiranandaniHostMumbai.jpg";
import img7 from "../../Assets/KokilabenHostMumbai.jpg";
import img8 from "../../Assets/BLKmaxHostDelhi.jpg";
import img9 from "../../Assets/FortisHostDelhi.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

//Let me paste the array named data
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Appollo Hospital",
    location: "Chennai India",
    grade: "NABH",
    fees: "$700",
    description:
      "Apollo Hospitals offers treatment for heart diseases, orthopedic diseases, diseases of spinal cord, cancer, gastroenterological diseases, neurological diseases, and urological diseases, kidney diseases, and critical care and preventive health care.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "MIOT Hospital",
    location: "Chennai India",
    grade: "A++",
    fees: "$600",
    description:
      "The Madras Institute of Orthopaedics and Traumatology, known in short as the MIOT International Hospital, is a multi-specialty hospital in Manapakkam, Chennai, India.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Kauvery Hospital",
    location: "Chennai India",
    grade: "A++",
    fees: "$700",
    description:
      "WELCOME. Kauvery Hospital is a leading, multi-speciality hospital offering best-in-class medical services for nearly 2 decades. With paramount focus on patient care, patient safety and patient satisfaction, we are committed to offer exemplary medical services going beyond the norm of healthcare.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "CMC Hospital",
    location: "Vellore India",
    grade: "A++",
    fees: "$500",
    description:
      "Christian Medical College, Vellore, widely known as CMC, Vellore, is a private, Christian community-run medical school, hospital and research institute. This Institute includes a network of primary, secondary and tertiary care hospitals in and around Vellore, Tamil Nadu, India.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Seven Hills Hospital",
    location: "Mumbai India",
    grade: "A++",
    fees: "$1100",
    description:
      "SevenHills Hospital offers Inpatient and Outpatient Services, focusing on the comfort and safety of our patients and their loved ones. Our modern infrastructure and facilities that match international standards make us one of the leading and biggest hospitals in Vizag.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Hiranandani Hospital",
    location: "Mumbai India",
    grade: "A++",
    fees: "$500",
    description:
      "Hiranandani Hospital is a leading healthcare institution that offers a wide range of medical services, including advanced diagnostic and treatment options.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Kokilaben Hospital",
    location: "Mumbai India",
    grade: "A++",
    fees: "$840",
    description:
      "Kokilaben Dhirubhai Ambani Hospital & Medical Research Institute is India’s one of the most advanced tertiary care facilities. As the flagship social initiative of the Reliance Group headed by Anil Dhirubhai Ambani, the hospital is designed to raise India global standing as a healthcare hub, with emphasis on excellence in clinical services, diagnostic facilities and research.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "BLK MAX Hospital",
    location: "Delhi India",
    grade: "A++",
    fees: "$600",
    description:
      "BLK-Max Super Speciality Hospital is part of the largest healthcare networks in India, offering a wide range of services, making it a force to reckon with in the field of Super Speciality Tertiary Healthcare.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Fortis Hospital",
    location: "Delhi India",
    grade: "A++",
    fees: "$500",
    description:
      "ortis Malar Hospital, Adyar, Chennai, was established in 1992 and became household name for tertiary care services in the city over the years. Fortis Malar Hospital has more than 145 consultants, 141 beds, five operation theatres and 400 employees to manage over 11,000 in-patients.",
  },
];

const Main = () => {
  // lets create a react hook to add a scroll animation....
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited hospitals
        </h3>
      </div>

      <div className="secContent grid">
        {/* So, here we are going to use high ordfer array method(map). To do that we shall use a list of object in one array. I'm going to create an array named data and from that we shall .map() array to fetch each destination at once.  */}
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => (
            <div key={id} data-aos="fade-up" className="singleDestination">
              {/* Here it will return single id from the map array */}
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS
                  <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Main;
