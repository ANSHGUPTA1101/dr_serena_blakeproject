import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from 'react-google-recaptcha';


const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Form submitted successfully!");
  };

  return (
    <section className="contact">
         <div className="form">

        <h1>Get In Touch</h1>
        <p>
          Simply fill out the brief fields below and Dr. Serena will be in touch
          with you soon, usually within one business day. This form is safe,
          private, and completely free.{" "}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="Name">Name</label>
          <input {...register("name", { required: true })} placeholder="Name" />

          <label htmlFor="Email">Email</label>
          <input
            {...register("email", { required: true })}
            placeholder="you@example.com"
          />

          <label>Phone</label>
          <input {...register("phone")} placeholder="(555) 234-5678" />

          <label>Message</label>
          <textarea
            {...register("message")}
            placeholder="How can I help you?"
          />

        <label>Preferred Contact Time</label>
        <input {...register("contactTime")} placeholder="e.g., Mornings, Afternoons, Evening, Weekends" />
                <p>Let us know when you're typically available for a call or consultation</p>


                <label>Preferred Contact Method</label>
        <select {...register("contactMethod")}>
          <option value="">Select preferred method</option>
          <option value="call">Phone Call</option>
          <option value="email">Email</option>
        </select>
        
        <div className="captcha">
          <ReCAPTCHA sitekey="6LeZinkrAAAAAP5Q0D9LBjgsRlFJu2PhAYA7rKww" />
        </div>

           <button type="submit">Submit</button>

        </form>

        
      <small>
        By clicking submit you consent to receive texts and emails from Dr. Serena.
      </small>

  <ToastContainer position="top-center" />
      </div>
    </section>
  );
};

export default Contact;
