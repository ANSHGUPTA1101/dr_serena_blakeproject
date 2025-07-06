import React from "react";
import "./Services.css";
import img1 from "../../assets/anxity.jpg";
import img2 from "../../assets/relation.jpg";
import img3 from "../../assets/trauma.jpg";

const Services = () => {
  return (
    <section className="services">
      <div className="ser">
        <div className="services-intro">
          <h2>
            Therapy can be a space where you invest <br />
            in yourself—one of the highest forms of self-care.
          </h2>
          <p>
            You may be led to therapy by anxiety, depression, relationship
            stress, past or recent trauma, grief and loss, self-esteem issues,
            or challenges with family, parenting, or parental relationships.
            Whatever the source of your stress, you don't have to face it alone.
            Therapy offers you the time and space to work toward wellness and
            peace.
          </p>
        </div>
      </div>

      <div className="h2">
        <h2>Areas of Focus</h2>
        <div className="therapy-grid">
          <div className="therapy-card">
            <img
              src={img1}
              alt="Services & Specialties"
              className="therapy-img"
            />
            <h3>Anxiety & Stress Management </h3>
            <p>
              Chronic stress and anxiety can impact your sleep, focus, and
              relationships. Through therapy, we’ll explore your thought
              patterns, build emotional awareness, and develop practical tools
              to help you feel calm, grounded, and more in control of your life.
            </p>
          </div>

          <div className="therapy-card">
            <img
              src={img2}
              alt="Services & Specialties"
              className="therapy-img"
            />
            <h3>Relationship Counseling</h3>
            <p>
              Every relationship faces challenges—whether it’s communication
              gaps, trust issues, or emotional disconnection. Therapy offers a
              supportive space to explore your patterns, rebuild connection, and
              grow stronger together with compassion and clarity.
            </p>
          </div>

          <div className="therapy-card">
            <img
              src={img3}
              alt="Services & Specialties"
              className="therapy-img"
            />
            <h3>Trauma Recovery</h3>
            <p>
              Trauma can leave lasting emotional scars, affecting how you feel,
              think, and relate to the world. Therapy provides a safe,
              nonjudgmental space to process painful experiences, restore a
              sense of safety, and reclaim your emotional well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
