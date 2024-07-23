/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const [message, setMessage] = useState({ text: '', type: '' });

  const onSubmit = (data) => {
    emailjs
      .send(
        'service_btz4zob',
        'template_czlgmrj',
        data,
        '8onJeTxvjBb8ZHlO_'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setMessage({ text: 'Message sent successfully!', type: 'success' });
          reset(); // Clear form after successful submission

          // Show message and reload page immediately
          setTimeout(() => {
            window.location.reload();
          }, 2000); // Slight delay to ensure message is shown
        },
        (error) => {
          console.log('FAILED...', error);
          setMessage({ text: 'Failed to send message. Please try again.', type: 'error' });

          // Show message and reload page immediately
          setTimeout(() => {
            window.location.reload();
          }, 2000); // Slight delay to ensure message is shown
        }
      );
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px] flex items-center justify-center">
          <div className="modal-box p-6 bg-white shadow-lg rounded-lg relative">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Contact Us</h3>
              <br />
              <p>Got questions or feedback? We're here to help! Reach out to us at Contact Us for any inquiries or support.</p>
              <br />

              {/*-------------- Name-------------- */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text" 
                  placeholder="Enter your fullname"
                  className="w-full px-3 py-1 border border-gray-300 rounded-md outline-none focus:border-blue-500 transition duration-200"
                  {...register("from_name", { required: "Name is required" })}
                />
                <br />
                {errors.from_name && (
                  <span className="text-sm text-red-500">
                    {errors.from_name.message}
                  </span>
                )}
              </div>

              {/*-------------- Email-------------- */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-1 border border-gray-300 rounded-md outline-none focus:border-blue-500 transition duration-200"
                  {...register("from_email", { required: "Email is required" })}
                />
                <br />
                {errors.from_email && (
                  <span className="text-sm text-red-500">
                    {errors.from_email.message}
                  </span>
                )}
              </div>

              {/*-------------- Message-------------- */}
              <br />
              <div className="mb-4">
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Type your message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 transition duration-200"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/*-------------- Submit-------------- */}
              <div className="flex justify-around mt-4">
                <button className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-200">
                  Submit
                </button>
              </div>
            </form>

            {/* Notification Message */}
            {message.text && (
              <div
                className={`mt-4 p-2 rounded-md ${
                  message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {message.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
