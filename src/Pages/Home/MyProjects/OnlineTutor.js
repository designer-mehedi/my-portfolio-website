import React from 'react';
import ot1 from '../../../assets/ot1.png'
import ot2 from '../../../assets/ot2.png'
import ot3 from '../../../assets/ot3.png'
import {FcOk} from 'react-icons/fc'


const OnlineTutor = () => {
    return (
        <div className=" lg:container lg:px-32 px-4 bg-slate-200 lg:py-20 py-5">
            <h2 className="text-center lg:text-5xl text-3xl font-bold mb-5">Online Tutor</h2>
            <div className="image-container grid grid-cols-1 lg:grid-cols-3 gap-2 mb-8">
                <img src={ot1} alt="" className="h-52"/>
                <img src={ot2}  alt="" className="h-52 hidden lg:block" />
                <img src={ot3} alt="" className="h-52 hidden lg:block"/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-2xl font-semibold mb-5">Project Details</h3>
                    <p>This is online tutor app. This is a online learning platform where a user or learner can take courses by their interest.</p>
                    <div className="list mt-2">
                        <p className="flex items-center gap-3"><span><FcOk></FcOk></span><span>Learning Platform</span></p>
                        <p className="flex items-center gap-3"><span><FcOk></FcOk></span><span>Different courses on homepage</span></p>
                        <p className="flex items-center gap-3"><span><FcOk></FcOk></span><span>Course details option</span></p>
                        <p className="flex items-center gap-3"><span><FcOk></FcOk></span><span>Sign Up & Login functionality</span></p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-5">Technologies & Tools Used</h3>
                    <div className="grid gap-3">
                        <p>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">React
                            </span>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">React Router</span>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">React Bootstrap</span>
                        </p>
                        <p>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">React Icons</span>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">Firebase
                            </span>
                        </p>
                    </div>
                    <h3 className="text-2xl font-semibold mb-5 pt-10">Useful Links</h3>
                    <ul className="font-medium text-lg">
                        <li className="mb-2"><a href=" " className="hover:underline hover:text-sky-600">Live Website</a></li>
                        <li className="mb-2"><a href=" " className="hover:underline hover:text-sky-600">Github Client</a></li>
                        <li><a href=" " className="hover:underline hover:text-sky-600">Github Server</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OnlineTutor;