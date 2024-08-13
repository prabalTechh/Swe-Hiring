import React, { useState, useEffect } from 'react';

function Navigation() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const countDownDate = new Date('aug 15, 2024 15:37:25').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown('EXPIRED');
      } else {
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li><a href="#" className="nav-link">Menu</a></li>
        <li><a href="#" className="nav-link">Location</a></li>
        <li><a href="#" className="nav-link">About</a></li>
        <li><a href="#" className="nav-link">Contact</a></li>
      </ul>
      <div className="countdown">
        COUNTDOWN: {countdown}
      </div>
      <button>Login</button>
    </nav>
  );
}

export default Navigation;
