import React, { useState, useRef } from "react";
import Layout from "./Layout";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  // const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs
      .send(
        "service_8wrdzqs",
        "template_jtw0z9m",
        templateParams,
        "oV4KTjIkbmtrP_lsO"
      )
      .then(
        (response) => {
          alert("Message Sent! Thanks for your time")
          console.log("SUCCESS!", response.status, response.text);
          // Optionally, reset the form after successful submission
          setForm({ name: "", email: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <form  ref={form} onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded-lg p-4 ">
      <div className="mb-4 text-gray-700">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </div>
    </form>

    // <form
    //   ref={form}
    //   onSubmit={handleSubmit}
    //   className="bg-white shadow-md rounded-lg p-4"
    // >
    //   <div className="mb-4">
    //     <label
    //       className="block text-gray-700 text-sm font-bold mb-2"
    //       htmlFor="name"
    //     >
    //       Name
    //     </label>
    //     <input type="text" name="user_name" />
    //   </div>
    //   <div className="mb-4">
    //     <label
    //       className="block text-gray-700 text-sm font-bold mb-2"
    //       htmlFor="email"
    //     >
    //       Email
    //     </label>
    //     <input type="email" name="user_email" />
    //   </div>
    //   <div className="mb-4">
    //     <label
    //       className="block text-gray-700 text-sm font-bold mb-2"
    //       htmlFor="message"
    //     >
    //       Message
    //     </label>
    //     <textarea name="message" />
    //     <input type="submit" value="Send" />
    //   </div>
    // </form>
  );
};

export default ContactForm;
