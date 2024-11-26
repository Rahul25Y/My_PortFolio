import React from 'react';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from './Contact.json';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Extract form data
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Validate form data
    if (!name || !email || !message) {
      alert('Please fill in all fields: Name, Email, and Message.');
      return;
    }

    formData.append('access_key', '5fda6fb7-514b-4d1d-b29c-d2c83f25dd16');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert(res.message);
        event.target.reset();
        
      } else {
        alert('There was an issue with the submission. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="z-50 bg-gray-300 relative py-10 px-5 md:px-0">
      <div className="mb-15 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-black-500">Get in Touch</h2>
            <p className="mb-4 text-[black]/85">
              I'm always open to new opportunities and collaboration.Feel free to reach out!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={facebook} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={instagram} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground/80">
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[494px]" />
          </div>
          <form
            className="w-full md:w-1/2 bg-slate-200 rounded-lg border border-red-100 shadow-lg shadow-gray-200 p-10"
            onSubmit={onSubmit}
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-6">Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Write your message here
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Enter your message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button type="submit" className="bg-red-500 text-white px-3 py-2 rounded-lg">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
