"use client";

import Image from "next/image";
import bookNow from "@/public/bookNow.png";

import Script from "next/script";

export default function Schedule() {
    return (
        <div className="scheduleCont" id="schedule">
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
    );
}