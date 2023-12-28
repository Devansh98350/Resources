import React, { useState, useEffect } from "react";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  TelegramIcon,
} from "react-share";

import "./Left.css";
// export default class App extends Component {
//   render() {
const SharePopup = ({ onClose, width, height, duration }) => {
  const shareUrl = "https://www.resources.iitacademy.in/";
  const quotes = "Best Website for all types of Educational resources.";
  const hshs = "#iitacademy";
  const [elapsedTime, setElapsedTime] = useState(0);

  // Close the popup after the specified duration
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1);

    return () => clearInterval(timer);
  }, []);

  // Close the popup when the duration is reached
  useEffect(() => {
    if (elapsedTime >= duration) {
      onClose();
    }
  }, [elapsedTime, duration, onClose]);
  return (
    // <div className="share-popup-overlay">

    <div
      className="share-popup"
      style={{
        background: "#0000",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1>Share our page on:</h1>

      <FacebookShareButton url={shareUrl} quote={quotes} hashtag={hshs}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <WhatsappShareButton url={shareUrl} quote={quotes} hashtag={hshs}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>

      <TwitterShareButton url={shareUrl} quote={quotes} hashtag={hshs}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={shareUrl} quote={quotes} hashtag={hshs}>
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>

      <EmailShareButton url={shareUrl} quote={quotes} hashtag={hshs}>
        <EmailIcon size={40} round={true} />
      </EmailShareButton>

      <TelegramShareButton url={shareUrl} quote={quotes} hashtag={hshs}>
        <TelegramIcon size={40} round={true} />
      </TelegramShareButton>
      <button onClick={onClose}>Close</button>
    </div>
    // </div>
  );
};

export default SharePopup;
