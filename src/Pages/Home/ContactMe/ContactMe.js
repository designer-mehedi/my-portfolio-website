import React from 'react';

const ContactMe = () => {
    return (
        <section className="lg:container lg:px-32 px-5 py-12" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 py-16 px-44 rounded-lg shadow-2xl" style={{background: 'linear-gradient(rgba(59,52,134), rgba(59,52,134,.9))'}}>
                <div>
                <h2 className="text-white mb-5">Get in Touch</h2>
                <form className="flex flex-col gap-5">
                    <input type="text" name="clientName" className="w-[75%] border-none outline-none rounded-lg bg-slate-200" placeholder="Name"/>
                    <input type="email" name="ClientEmail" className="w-[75%] border-none outline-none rounded-lg bg-slate-200" placeholder="Email"/>
                    <textarea name="message" cols="30" rows="5" className="w-[75%] border-none outline-none rounded-lg bg-slate-200" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message" className="bg-sky-600 py-3 w-44 rounded-full text-white uppercase font-medium"/>
                </form>
            </div>
            <div className="text-white">
                <h2>Hello</h2>
            </div>
            </div>
        </section>
    );
};

export default ContactMe;