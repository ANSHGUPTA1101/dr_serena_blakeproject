import React from "react";
import "./About.css";
import aboutImg from "../../assets/serena.jpg";

const About = () => {
  return (
    <section className="about-section">
      <div className="about">
        <div className="about-details">
          <h2>About Dr. Serena Blake</h2>
          <p>
            {" "}
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in
            Los Angeles, CA, with eight years of experience and over 500 client
            sessions. She blends evidence-based approaches—like
            cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen
            relationships, and heal from trauma. Whether you meet in her
            Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
            Finding time and opportunities to care for ourselves can be
            incredibly challenging in today's busy and demanding world. I
            believe therapy offers a dedicated space for self-care, providing
            the support and tools needed to improve this essential practice.
            Therapy can help individuals identify and clarify their goals,
            values, and the various elements that contribute to their
            well-being, recognizing that these aspects vary from person to
            person.
          </p>
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="Dr.Serena" />
        </div>
      </div>
    </section>
  );
};

export default About;
