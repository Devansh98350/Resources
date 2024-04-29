import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "./../Layout";
import "./Homepage.css";
import { Query } from "../Forms/Query_Form/Query";
import dev1 from "../../assests/home_page/dev1.png";
import dev2 from "../../assests/home_page/dev2.png";
import dev3 from "../../assests/home_page/dev3.png";
import dev4 from "../../assests/home_page/dev4.png";
import dsa1 from "../../assests/home_page/dsa1.png";
import dsa2 from "../../assests/home_page/dsa2.png";
import dsa3 from "../../assests/home_page/dsa3.png";
import dsa4 from "../../assests/home_page/dsa4.png";
import ml1 from "../../assests/home_page/ML-DS1-min.png";
import ml2 from "../../assests/home_page/ML-DS2-min.png";
import ml3 from "../../assests/home_page/ML-DS3-min.png";
import ml4 from "../../assests/home_page/ML-DS4-min.png";
import l1 from "../../assests/home_page/learn1.png";
import l2 from "../../assests/home_page/learn4.png";
import leftArrowIcon from "../../assests/home_page/left-arrow.svg";
import rightArrowIcon from "../../assests/home_page/right-arrow.svg";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollRef = useRef(null);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };
  const scrollLeft1 = () => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollLeft -= 200;
    }
  };
  const scrollLeft2 = () => {
    if (scrollRef2.current) {
      scrollRef2.current.scrollLeft -= 200;
    }
  };
  const scrollLeft3 = () => {
    if (scrollRef3.current) {
      scrollRef3.current.scrollLeft -= 200;
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };
  const scrollRight1 = () => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollLeft += 200;
    }
  };
  const scrollRight2 = () => {
    if (scrollRef2.current) {
      scrollRef2.current.scrollLeft += 200;
    }
  };
  const scrollRight3 = () => {
    if (scrollRef3.current) {
      scrollRef3.current.scrollLeft += 200;
    }
  };
  return (
    <Layout title="Resources - IIT Academy">
      <div className="resources-container">
        <div className="Innerbody">
          <div className="Innercontent">
            <p>About Exams</p>
            <Link to=" ">
              <button className="button_nxt">View All</button>
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src={leftArrowIcon}
              alt="Left Arrow"
              className="scroll-arrow left-arrow"
              onClick={scrollLeft}
              style={{
                position: "absolute",
                left: "0px",
                zIndex: 1,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <div className="horizontal-scroll-container" ref={scrollRef}>
              <div className="imagescontainer">
                <img src={dsa1} alt="" className="dsa-image" />
                <div className="text-overlay image1">JEE Mains</div>
                <img src={dsa2} alt="" className="dsa-image" />
                <div className="text-overlay image2">JEE Advanced</div>
                <img src={dsa3} alt="" className="dsa-image" />
                <div className="text-overlay image3">NEET</div>
                <img src={dsa4} alt="" className="dsa-image" />
                <div className="text-overlay image4">Boards</div>
                <img src={dsa1} alt="" className="dsa-image" />
                <div className="text-overlay image5">NTSE</div>
                <img src={dsa2} alt="" className="dsa-image" />
                <div className="text-overlay image6">Olympiads</div>
              </div>
            </div>
            <img
              src={rightArrowIcon}
              alt="Right Arrow"
              className="scroll-arrow right-arrow"
              onClick={scrollRight}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
          <br />
          <div className="Innercontent">
            <p>Previous Year Question</p>
            <Link to=" ">
              <button className="button_nxt">View All</button>
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src={leftArrowIcon}
              alt="Left Arrow"
              className="scroll-arrow left-arrow"
              onClick={scrollLeft1}
              style={{
                position: "absolute",
                left: "0px",
                zIndex: 1,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <div className="horizontal-scroll-container" ref={scrollRef1}>
              <div className="imagescontainer">
                <img src={dev1} alt="" className="webdev-image" />
                <div className="text-overlay image1">JEE Mains</div>
                <img src={dev2} alt="" className="webdev-image" />
                <div className="text-overlay image2">JEE Advanced</div>
                <img src={dev3} alt="" className="webdev-image" />
                <div className="text-overlay image3">NEET</div>
                <img src={dev4} alt="" className="webdev-image" />
                <div className="text-overlay image4">CBSE Board</div>
                <img src={dev1} alt="" className="webdev-image" />
                <div className="text-overlay image5">KVPY</div>
                <img src={dev2} alt="" className="webdev-image" />
                <div className="text-overlay image6">NTSE</div>
              </div>
            </div>
            <img
              src={rightArrowIcon}
              alt="Right Arrow"
              className="scroll-arrow right-arrow"
              onClick={scrollRight1}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
          <br />
          <div className="Innercontent">
            <p>Syllabus</p>
            <Link to=" ">
              <button className="button_nxt btn-ml">View All</button>
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src={leftArrowIcon}
              alt="Left Arrow"
              className="scroll-arrow left-arrow"
              onClick={scrollLeft2}
              style={{
                position: "absolute",
                left: "0px",
                zIndex: 1,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <div className="horizontal-scroll-container" ref={scrollRef2}>
              <div className="imagescontainer">
                <img src={ml1} alt="" className="ml-image" />
                <div className="text-overlay image1">JEE Mains</div>
                <img src={ml2} alt="" className="ml-image" />
                <div className="text-overlay image2">JEE Advanced</div>
                <img src={ml3} alt="" className="ml-image" />
                <div className="text-overlay image3">NEET</div>
                <img src={ml4} alt="" className="ml-image" />
                <div className="text-overlay image4">CBSE Board</div>
                <img src={ml1} alt="" className="ml-image" />
                <div className="text-overlay image5">NTSE</div>
                <img src={ml2} alt="" className="ml-image" />
                <div className="text-overlay image6">Olympiads</div>
              </div>
            </div>
            <img
              src={rightArrowIcon}
              alt="Right Arrow"
              className="scroll-arrow right-arrow"
              onClick={scrollRight2}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
          <br />
          <div className="Innercontent">
            <p>Books</p>
            <Link to=" ">
              <button className="button_nxt">View All</button>
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src={leftArrowIcon}
              alt="Left Arrow"
              className="scroll-arrow left-arrow "
              onClick={scrollLeft3}
              style={{
                position: "absolute",
                left: "0px",
                zIndex: 1,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            <div className="horizontal-scroll-container" ref={scrollRef3}>
              <div className="imagescontainer">
                <img src={l1} alt="" className="tuto-image" />
                <div className="text-overlay image1">NCERT</div>
                <img src={l2} alt="" className="tuto-image" />
                <div className="text-overlay image2">JEE (Mains + Adv.)</div>
                <img src={l1} alt="" className="tuto-image" />
                <div className="text-overlay image3">NEET</div>
                <img src={l2} alt="" className="tuto-image" />
                <div className="text-overlay image4">CBSE Textbooks</div>
                <img src={l1} alt="" className="tuto-image" />
                <div className="text-overlay image5">Foundation</div>
              </div>
            </div>
            <img
              src={rightArrowIcon}
              alt="Right Arrow"
              className="scroll-arrow right-arrow"
              onClick={scrollRight3}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
          <br />
          <br />
        </div>
      </div>
      <Query />
    </Layout>
  );
};

export default Homepage;
