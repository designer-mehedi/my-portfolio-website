import React from 'react';
import bg from '../../../assets/bg2.jpg'
import profile from '../../../assets/profile.png'
import frame from '../../../assets/frame.png'
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div className="flex gap-5 lg:justify-center lg:items-center flex-col lg:flex-row lg:container lg:px-32 px-4 lg:mt-[-65px] bg-cover lg:py-32 py-10" style={{
            background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.7)), url(${bg})`,
            // height: "100vh",
            backgroundRepeat: "no-repeat",
            // backgroundSize: "100%"
        }}>
            <div className="lg:w-[40%] relative">
                <img src={profile} className="rounded-full lg:w-[330px] lg:h-[330px] w-48 h-48 absolute lg:right-20 lg:top-[70px] left-[50px] top-[50px] border-[10px] border-sky-300" alt="" />
                <img src={frame} className=" lg:w-[900px] lg:h-[500px] w-72" alt="" />
            </div>
            <div className="text-white lg:w-[45%]">
                <h1 className="lg:text-5xl text-3xl font-bold mb-4"><span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["I'm Md Mehedi Hasan"]}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h1>
                <h3 className="lg:text-2xl text-xl mb-10">Front End Developer</h3>
                <p className="text-lg w-96">Passionate web developer and skilled in Front End web technologies.</p>
                <div className="buttons flex gap-5 text-md font-bold mt-7 flex-col lg:flex-row">
                    <button className="bg-sky-600 px-7 py-3 uppercase rounded-full lg:w-[25%] w-[60%]">Hire Me</button>
                    <a href="resume.pdf" download="resume.pdf" className="bg-sky-600 px-7 py-3 uppercase rounded-full lg:w-[40%] w-[60%]">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;