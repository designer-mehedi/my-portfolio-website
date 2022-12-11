import React from 'react';
import about from '../../../assets/about.jpg'

const AboutMe = () => {
    return (
        <section className="lg:container lg:px-32 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 py-28">
            <div>
                <img src={about} alt="" />
            </div>
            <div>
                <h3 className="lg:text-xl text-lg font-medium text-sky-600">About Me</h3>
                <h2 className="lg:text-5xl text-3xl font-bold mb-5">Front End Developer</h2>
                <p className="mb-3">I'm Md Mehedi Hasan, expert in Front End Development. I can develop industry standard, responsive, unique and professional websites. I have completed web development course from a well known institute. Improving my skills to compete with fast changing development world. Always eager to learn new technologies to enrich my knowledge. These are my expertise. 
                </p>
                <div className="gap-1 grid">
                    <p><span className="border px-3 rounded-full bg-slate-200">HTML</span> <span className="border px-3 rounded-full bg-slate-200">CSS</span> <span className="border px-3 rounded-full bg-slate-200">Bootstrap</span> <span className="border px-3 rounded-full bg-slate-200">Tailwind</span></p>
                    <p><span className="border px-3 rounded-full bg-slate-200">Javascript</span> <span className="border px-3 rounded-full bg-slate-200">React</span> </p>
                    <p><span className="border px-3 rounded-full bg-slate-200">Node JS</span> <span className="border px-3 rounded-full bg-slate-200">Express JS</span> <span className="border px-3 rounded-full bg-slate-200">MongoDB</span></p>
                    <p><span className="border px-3 rounded-full bg-slate-200">Firebase</span></p>
                </div>
                <button className="bg-sky-600 uppercase font-bold px-5 py-3 text-white rounded-full mt-5">Learn More</button>
            </div>
        </section>
    );
};

export default AboutMe;