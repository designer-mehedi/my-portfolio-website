import React from 'react';
import bg from '../../../assets/bg2.jpg'
import profile from '../../../assets/profile.png'
import frame from '../../../assets/frame.png'
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div className="flex gap-5 justify-center items-center lg:container px-32 lg:mt-[-65px]" style={{
            background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.7)), url(${bg})`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%"
        }}>
            <div className="w-[40%] relative">
                <img src={profile} className="rounded-full w-[330px] h-[330px] absolute right-20 top-[70px] border-[10px] border-sky-300" alt="" />
                <img src={frame} className=" w-[900px] h-[500px]" alt="" />
            </div>
            <div className="text-white w-[45%]">
                <h1 className="text-5xl font-bold mb-4"><span style={{ color: 'white', fontWeight: 'bold' }}>
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
                <h3 className="text-2xl mb-10">Front End Developer</h3>
                <p className="text-lg w-96">Passionate web developer and skilled in Front End web technologies.</p>
                <div className="buttons flex gap-5 text-md font-bold mt-7">
                    <button className="bg-sky-600 px-7 py-3 uppercase rounded-full">Hire Me</button>
                    <a href="resume.pdf" download="resume.pdf" className="bg-sky-600 px-7 py-3 uppercase rounded-full">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;