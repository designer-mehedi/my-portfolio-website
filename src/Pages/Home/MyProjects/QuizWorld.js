import React from 'react';
import qt1 from "../../../assets/qt1.png";
import qt2 from "../../../assets/qt2.png";
import qt3 from "../../../assets/qt3.png";
import { FcOk } from "react-icons/fc";

const QuizWorld = () => {
    return (
        <div className=" lg:container lg:px-32 px-4 bg-slate-200 lg:py-20 py-5">
            <h2 className="text-center lg:text-5xl text-3xl font-bold mb-5">Quiz World</h2>
            <div className="image-container grid grid-cols-1 lg:grid-cols-3 gap-2 mb-8">
                <img src={qt1} alt="" className="h-52"/>
                <img src={qt2}  alt="" className="h-52 hidden lg:block" />
                <img src={qt3} alt="" className="h-52 hidden lg:block"/>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-2xl font-semibold mb-5">Project Details</h3>
                    <p>This is quiz world app. This is a quiz taking platform where a learner can choose any topic and test their knowledge</p>
                    <div className="list mt-2">
                        <p className="flex items-center gap-3"><span><FcOk></FcOk></span><span>Different quiz topics</span></p>
                        <p className="flex items-center gap-3"><span><FcOk></FcOk></span><span>Quiz taking options</span></p>
                        <p className="flex items-center gap-3"><span><FcOk></FcOk></span><span>See statistics</span></p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-5">Technologies & Tools Used</h3>
                    <div className="grid gap-3">
                        <p>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">React
                            </span>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">React Router</span>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">Tailwind</span>
                        </p>
                        <p>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">React Icons</span>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">React Toastify</span>
                            <span className="border bg-sky-600 px-3 text-white rounded-full py-1">Recharts
                            </span>
                        </p>
                    </div>
                    <h3 className="text-2xl font-semibold mb-5 pt-10">Useful Links</h3>
                    <ul className="font-medium text-lg">
                        <li className="mb-2"><a href="https://subtle-cat-889708.netlify.app/" className="hover:underline hover:text-sky-600">Live Website</a></li>
                        <li><a href="https://github.com/designer-mehedi/quiz-app" className="hover:underline hover:text-sky-600">Github Source Code</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QuizWorld;