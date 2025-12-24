import Image from "next/image";
import hero from "@/public/hero.png";
import logo from "@/public/Logo.png";
import edgar from "@/public/edgar.png";
import alejandro from "@/public/alejandro.png";

import ScheduleMobile from "./components/scheduleMobile";
import Schedule from "./components/schedule";
import ContactForm from "./components/contactForm";
import BookNowButtonMobile from "./components/BookNowButtonMobile";
import BookNowButton from "./components/BookNowButton";

export default function Home() {
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
            <BookNowButton />
          </div>
          <div className="heroButtonsMobile">
            <BookNowButtonMobile />
          </div>
        </div>
      </div>
      <div className="quoteCont">
        <div className="quoteText">
          <p>"Champions aren&apos;t born— they&apos;re built through moments when everyone else would quit."</p>

        </div>
      </div>
      <ScheduleMobile />
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
      <Schedule />
      <div className="footerCont">
        <ContactForm />
      </div>
    </div>
  );
}
