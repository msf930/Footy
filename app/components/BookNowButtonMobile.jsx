"use client";

export default function BookNowButtonMobile() {
  const scrollToSchedule = () => {
    const scheduleElement = document.getElementById('schedule-mobile');
    if (scheduleElement) {
      scheduleElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToSchedule}>Book Now</button>
  );
}

