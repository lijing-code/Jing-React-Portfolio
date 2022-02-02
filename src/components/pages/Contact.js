import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function ContactForm() {

  const [email, setEmail] = useState('');
  const [name, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage('Name is required');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    if (!message) {
      setErrorMessage(
        `Message is required to submit`
      );
      return;
    }
    setUserName('');
    setMessage('');
    setEmail('');
  };


  return (
    <section className="contact-me" id="contact-me">
        <h1>Please fill in this form</h1>
        <form>
        <div className="form-floating mb-3 ">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            className="form-control"
            id="nameInput"
          />
          <label>Name</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            className="form-control"
            id="emailInput"
          />
          <label>Email</label>
        </div>
        <div className="form-floating">
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Write your message here"
            className="form-control textArea"
            id="messageInput"
          />
          <label>Message</label>
        </div>
        <div className="m-3">
          <button className="btn" type="button" onClick={handleFormSubmit}>Submit</button>
        </div>
      </form>
      {
        errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )
        }  
    </section>
  );
}
