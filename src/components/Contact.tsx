"use client";
import React, { useState } from "react";
import FacebookIcon from "../../public/assets/img/socials/facebook.png";
import WhatsappIcon from "/public/assets/img/socials/whatsapp.png";
import InstagramIcon from "/public/assets/img/socials/instagram.png";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError]: any = useState(null);
  const [loading, setLoading]: any = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    /*const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }*/
    try {
      const response: any = await axios.post("/api/email", {
        email,
        subject,
        message,
      });

      const resData: any = await response.data;
      console.log("getting response in frontend :" + JSON.stringify(resData));

      if (response.status === 200 && resData.username) {
        setLoading(false);
        //auth.changeUsername(JSON.stringify(resData.username));
        //auth.changeId(JSON.stringify(resData.id));
        //router.push("/dashboard");
      } else {
        setLoading(false);
        setError(
          "Incorrect username or password. Check your credentials and try again"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative animate zoom-in transition-all ease-in-out pb-4"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 p-4 md:p-6 lg:p-12">
        <h5 className="pt-46 text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex flex-row gap-2 animate zoom-in-50 p-24 sm:p-16 md:p-10 lg:p-6 xl:p-12">
          <Link href="https://www.facebook.com/Centerforsociallydisplaced">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
          <Link href="whatsapp.com.com">
            <Image src={WhatsappIcon} alt="Whatsapp Icon" />
          </Link>
          <Link href="instagram.com/.com">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form
            className="flex flex-col p-3 sm:p-4 md:p-8 lg:p-12 xl:p-14"
            onSubmit={handleSubmit}
          >
            <div className="mb-6 ">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
