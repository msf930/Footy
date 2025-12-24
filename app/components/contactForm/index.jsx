"use client";

import Image from "next/image";
import HCaptcha from '@hcaptcha/react-hcaptcha';
export default function ContactForm() {
    const onHCaptchaChange = (token) => {
        setValue("h-captcha-response", token);
      };
    return (
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
          <a href="tel:(925)421-3359" className="contactFormSubtitleItem">TEL: (925)421-3359</a>
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
    );
}