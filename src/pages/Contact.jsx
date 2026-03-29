import React, { useRef } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_myPortfolio2507',
        'template_myPortfolio2507',
        form.current,
        'djrpJSWRj3Sd14mDS'
      )
      .then(
        () => {
          toast.success('📨 Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('Failed to send:', error);
          toast.error('❌ Failed to send message. Try again later.');
        }
      );
  };

  return (
    <div className="contact-container fade-in">
      <h2 className="contact-title">Let's Connect!</h2>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Drop feedback, say hi, share a meme, or even secret coffee recommendations, I'd love to connect!" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-icons fade-in">
        <a
          href="https://www.linkedin.com/in/dharshinithirumal/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Dharshini-Thirumal"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default Contact;
