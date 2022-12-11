import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaLinkedin, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactMe = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6cs9fre', 'template_c8ymo4i', form.current, 'kq7ba-hzCY9ZNWM-7')
      .then((result) => {
          toast.success("Message sent successfully");
      }, (error) => {
          toast(error.message);
      });
      e.target.reset();
  };

    return (
        <section className="lg:container lg:px-32 px-5 py-12" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 py-16 px-44 rounded-lg shadow-2xl" style={{background: 'linear-gradient(rgba(59,52,134), rgba(59,52,134,.9))'}}>
                <div>
                <h2 className="text-white mb-5 text-3xl">Get in Touch</h2>
                <form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="client-name" className="w-[75%] border-none outline-none rounded-lg bg-slate-200" placeholder="Name"/>
                    <input type="email" name="email" className="w-[75%] border-none outline-none rounded-lg bg-slate-200" placeholder="Email"/>
                    <textarea name="message" cols="30" rows="5" className="w-[75%] border-none outline-none rounded-lg bg-slate-200" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" className="bg-sky-600 py-3 w-44 rounded-full text-white uppercase font-medium"/>
                </form>
            </div>
            <div className="text-white text-right">
                <h2 className="text-3xl mb-10">Contact Info</h2>
                <div className="grid gap-5 mb-10">
                    <p className="flex justify-end items-center gap-2"><BsFillTelephoneFill></BsFillTelephoneFill><span>01725732101</span></p>
                    <p className="flex justify-end items-center gap-2"><FaEnvelope></FaEnvelope>  <span>hasantonmoy550@gmail.com</span></p>
                    <p className="flex justify-end items-center gap-2"><MdLocationOn></MdLocationOn> <span>Lalbagh, Dhaka-1211</span></p>
                </div>
                <div>
                    <h2 className="text-3xl mb-10">Get on social sites</h2>
                    <div className="flex justify-end gap-6 text-2xl">
                        <span><a href="https://www.facebook.com/profile.php?id=100015170075957" target="_blank" rel="noreferrer"><FaFacebookSquare/></a></span>
                        <span><a href="https://www.linkedin.com/in/md-mehedi-hasan-tonmoy/" target="_blank" rel="noreferrer"><FaLinkedin/></a></span>
                        <span><a href="https://www.instagram.com/tonmoy_the_silent/" target="_blank" rel="noreferrer"><FaInstagramSquare/></a></span>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default ContactMe;