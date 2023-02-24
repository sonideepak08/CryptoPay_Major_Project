import React from 'react'
import appStore from "../../../images/Appstore.png";
import playStore from "../../../images/playstore.png";
import "./Footer.css"
const Footer = () => {
  return (
    <footer id="footer" >
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>
      <div className="midFooter">
        <h1>CryptoPay</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 &copy; CryptoPay</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/..."> Instagram </a>
        <a href="http://facebook.com/..."> Facebook </a>
        <a href="http://twitter.com/..."> Twitter </a>
        
      </div>
    </footer >
  )
}

export default Footer