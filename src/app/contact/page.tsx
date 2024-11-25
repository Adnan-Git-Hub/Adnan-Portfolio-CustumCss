"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/contact.css";

export default function Contact() {
  const notify = () => toast("Submitted!");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "6907d169-98d0-46fb-99e4-8fcbf1b9de61");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();

    if (result.success) {
      notify();
      console.log(result);
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <section data-aos="fade-down" data-aos-duration="3000">
        {/* Google Map */}
        <div
          id="map"
          className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height={480}
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg bg-black px-6 py-12 shadow-md md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
            <div className="flex flex-wrap">
              {/* Form Section */}
              <div className="mb-13 w-full lg:w-5/12">
                <form onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      className="peer block w-full rounded border-2 bg-transparent py-2 px-3 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                      name="name"
                      required
                      placeholder="Name"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative mb-6">
                    <input
                      type="email"
                      className="peer block w-full rounded border-2 bg-transparent py-2 px-3 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                      name="email"
                      required
                      placeholder="Email address"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative mb-6">
                    <textarea
                      name="message"
                      className="peer block w-full rounded border-2 bg-transparent py-2 px-3 leading-6 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                      rows={3}
                      required
                      placeholder="Message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    onClick={notify}
                    className="mb-6 w-full rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2 text-xs font-medium uppercase leading-normal transition-all duration-300 ease-in-out hover:from-sky-600 hover:to-sky-900"
                  >
                    Submit
                  </button>

                  <ToastContainer />
                </form>
              </div>

              {/* Contact Information Section */}
              <div className="w-full lg:w-7/12">
                <div className="flex flex-wrap">
                  {/* Technical Support */}
                  <div className="mb-12 w-full md:w-6/12 lg:w-full">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Technical support</p>
                        <p className="text-sm text-neutral-500">
                          adnanmasih8@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-12 w-full md:w-6/12 lg:w-full">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-sky-200 p-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-7 h-7"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold">Address</p>
                        <p className="text-sm text-neutral-500">
                          Karachi, Pakistan.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
