import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    
    <div className="p-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="mt-4">
        <ContactForm />
        <div className="mt-4">
        <h2 className="text-lg font-semibold">Contact Details</h2>
          <p className="mt-2 text-sm">
            Phone:{" "}
            <a
              href="tel:+917682805347"
              className="text-blue-500 hover:underline"
            >
              +91 7682805347
            </a>
          </p>{" "}
          
          <p className="mt-2 text-sm">
            Email:{" "}
            <a
              href="mailto:priyanshupanda2019@gmail.com"
              className="text-blue-500 hover:underline"
            >
              priyanshupanda2019@gmail.com
            </a>
          </p>{" "}
          <p className="mt-2 text-sm">
            Alternate Mobile:{" "}
            <a
              href="tel:+919583903861"
              className="text-blue-500 hover:underline"
            >
              +91 9583903861
            </a>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;

