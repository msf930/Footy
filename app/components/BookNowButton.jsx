"use client";

export default function BookNowButton() {
  const scrollToSchedule = () => {
    const scheduleElement = document.getElementById('schedule');
    if (scheduleElement) {
      scheduleElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToSchedule}>Book Now</button>
  );
}

