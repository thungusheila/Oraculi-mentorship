import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Unlock Your Potential with Oraculi</h1>
        <p>Empowering You with Insights, Guidance, and Opportunities for a Brighter Future</p>
        <button><Link to="/register">Join Oraculi Today</Link></button>
      </section>

      <section className="benefits">
        <h2>Why Choose Oraculi?</h2>
        <ul>
          <li><strong>Personalized Mentorship</strong> - Get guidance from experienced mentors.</li>
          <li><strong>Exclusive Resources</strong> - Access webinars, e-books, and insights.</li>
          <li><strong>Networking Opportunities</strong> - Connect with professionals.</li>
          <li><strong>Skill Development</strong> - Enhance your expertise with training.</li>
        </ul>
        <button><Link to="/features">Explore Our Benefits</Link></button>
      </section>

      <section className="cta">
        <h2>Ready to Transform Your Future?</h2>
        <p>Take the first step towards unlocking your full potential with Oraculi.</p>
        <button><Link to="/register">Join Oraculi Now</Link></button>
      </section>
    </div>
  );
}

export default Home;
