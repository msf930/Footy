"use client";

import { useRef } from "react";
import Image from "next/image";
import hero from "@/public/hero.png";
import logo from "@/public/Logo.png";
import edgar from "@/public/edgar.png";
import alejandro from "@/public/alejandro.png";
import bookNow from "@/public/bookNow.png";
import Script from "next/script";
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Home() {
  const scheduleMobileRef = useRef(null);
  const scheduleRef = useRef(null);
  const scrollToScheduleMobile = () => {
    scheduleMobileRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSchedule = () => {
    scheduleRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };
  return (
    <div className="mainCont">
      <div className="heroCont">
        <div className="heroLogo">
          <Image src={logo} alt="logo" fill objectFit="cover" />
        </div>
        <Image src={hero} alt="hero" fill objectFit="cover" />
        <div className="heroText">
          <h1>Where Dedication Meets Mastery</h1>
          <p>Developing skilled, confident, and high-performing youth players.</p>
          <div className="heroButtons">
            <button onClick={scrollToSchedule}>Book Now</button>
          </div>
          <div className="heroButtonsMobile">
            <button onClick={scrollToScheduleMobile}>Book Now</button>
          </div>
        </div>
      </div>
      <div className="quoteCont">
        <div className="quoteText">
          <p>"Champions aren&apos;t born— they&apos;re built through moments when everyone else would quit."</p>

        </div>
      </div>
      <div className="scheduleContMobile" ref={scheduleMobileRef}>
        <div className="scheduleImage">
          <Image src={bookNow} alt="edgar" fill objectFit="cover" />
          <h2 className="scheduleTextMobile">BOOK NOW</h2>
        </div>
        <div className="scheduleText">
          <h1>One-on-one training that transforms your game—book now.</h1>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/edgarcastaneda1024/30min"
            style={{ minWidth: '400px', height: '1000px' }}
          ></div>
          <Script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
      <div className="bioCont">
        <div className="bioImage">
          <Image src={edgar} alt="edgar" fill objectFit="cover" />
        </div>
        <div className="bioText">
          <h2>MEET THE TEAM</h2>
          <h1>Edgar Castaneda</h1>
          <p>Edgar is a former collegiate soccer player with 18 years of playing experience and over two years of training young athletes. He is committed to helping players build strong fundamentals, confidence, and a genuine love for the game as they work toward reaching their full potential.</p>
        </div>
      </div>
      <div className="bioCont2">
        <div className="bioText">
          <h2>MEET THE TEAM</h2>
          <h1>Alejandro Lopez</h1>
          <p> Alejandro is a former collegiate soccer player and currently serve as a head coach at a youth club. With over three years of experience training young athletes, he focus on developing well-rounded players through strong fundamentals, confidence, and a deep understanding of the game.</p>
        </div>
        <div className="bioImage">
          <Image src={alejandro} alt="alejandro" fill objectFit="cover" />
        </div>
      </div>
      <div className="bioContTitleMobile">
        <h2>MEET THE TEAM</h2>
      </div>
      <div className="bioContMobile">
        <div className="bioContMobileItem">
          
          <h1>Edgar Castaneda</h1>
          <div className="bioImage">
            <Image src={edgar} alt="edgar" fill objectFit="cover" />
          </div>
        </div>
        <div className="bioText">
          <p>Edgar is a former collegiate soccer player with 18 years of playing experience and over two years of training young athletes. He is committed to helping players build strong fundamentals, confidence, and a genuine love for the game as they work toward reaching their full potential.</p>
        </div>
      </div>
      <div className="bioContMobile">
        <div className="bioContMobileItem">
          
          <h1>Alejandro Lopez</h1>
          <div className="bioImage">
            <Image src={alejandro} alt="alejandro" fill objectFit="cover" />
          </div>
        </div>
        <div className="bioText">
          <p> Alejandro is a former collegiate soccer player and currently serve as a head coach at a youth club. With over three years of experience training young athletes, he focus on developing well-rounded players through strong fundamentals, confidence, and a deep understanding of the game.</p>
        </div>
      </div>
      <div className="scheduleCont" ref={scheduleRef}>
        <div className="scheduleImage">
          <Image src={bookNow} alt="edgar" fill objectFit="cover" />
        </div>
        <div className="scheduleText">
          <h2>BOOK NOW</h2>
          <h1>One-on-one training that transforms your game—book now.</h1>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/edgarcastaneda1024/30min"
            style={{ minWidth: '400px', height: '1000px' }}
          ></div>
          <Script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
      <div className="footerCont">
        <div className="contactFormCont">
          <div className="titleCont">
            <h2 className="contactFormTitle">FOOTY ELITE</h2>
            <h3 className="contactFormSubtitle">SOCCER COACHING</h3>
            <p className="contactFormSubtitleItem">TEL: (925)421-3359</p>
            <p className="contactFormSubtitleItem">EMAIL: edgar@edgarfootyelite.com</p>

          </div>
          <div className="titleContMobile">
            <h2 className="contactFormTitle">FOOTY ELITE</h2>
            <h3 className="contactFormSubtitle">SOCCER COACHING</h3>
            <p className="contactFormSubtitleItem">TEL: (925)421-3359</p>
            <p className="contactFormSubtitleItem">edgar@edgarfootyelite.com</p>

          </div>
          <div className="contactFormInner">
            <form className="contactFormForm" action="https://api.web3forms.com/submit" method="POST">
              <div className="contactFormFormInfo">
                <p className="contactFormFormInfoItem">GET IN TOUCH</p>

              </div>
              <input type="hidden" name="access_key" value="ecd6157a-0260-427b-996c-8e3c9c564fbb" />
              <div className="nameSection">
                <div className="nameCont">
                  <p>First Name</p>
                  <input className="formInput" type="text" name="firstName" required />
                </div>
                <div className="nameCont">
                  <p>Last Name</p>
                  <input className="formInput" type="text" name="lastName" required />
                </div>
              </div>
              <div className="nameCont">
                <p>Email</p>
              </div>
              <input className="formInput" type="email" name="email" required />
              <div className="nameCont">
                <p>PHONE</p>
              </div>
              <input className="formInput" type="phone" name="phone" required />
              <div className="nameCont">
                <p>Message</p>
              </div>
              <textarea className="formInputArea" name="message" required />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <div className="hCaptchaCont">
                <HCaptcha
                  sitekey="ecd6157a-0260-427b-996c-8e3c9c564fbb"
                  reCaptchaCompat={false}
                  onVerify={onHCaptchaChange}
                  theme="dark"
                />
              </div>
              <div className="contactFormFormBtnCont">
                <button className="contactFormFormBtn" type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
