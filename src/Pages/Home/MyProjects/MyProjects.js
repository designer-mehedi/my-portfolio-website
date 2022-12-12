import React from 'react';
import { Link } from "react-router-dom";
import project1 from '../../../assets/project1.png'
import project2 from '../../../assets/project2.png'
import project3 from '../../../assets/project3.png'

const MyProjects = () => {
    return (
        <section className="lg:container lg:px-32 px-4 py-20" id="projects">
            <h2 className="text-center text-3xl font-bold mb-10">My Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div class="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href=" ">
                        <img class="rounded-t-lg w-full h-[200px]" src={project1} alt="" />
                    </a>
                    <div class="p-5">
                        <a href=" ">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Online Tutor</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="https://learning-project-app.web.app/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" rel="noreferrer">
                            View Site
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <Link to="/online-tutor"><button className="bg-sky-600 px-3 py-[6px] text-white rounded-md ml-4 font-medium">Details</button></Link>
                    </div>
                </div>
                <div class="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href=" ">
                        <img class="rounded-t-lg w-full h-[200px]" src={project2} alt="" />
                    </a>
                    <div class="p-5">
                        <a href=" ">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quiz World</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="https://subtle-cat-889708.netlify.app/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" rel="noreferrer">
                            View Site
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <Link to="/quiz-world"><button className="bg-sky-600 px-3 py-[6px] text-white rounded-md ml-4 font-medium">Details</button></Link>
                    </div>
                </div>
                <div class="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href=" ">
                        <img class="rounded-t-lg w-full h-[200px]" src={project3} alt="" />
                    </a>
                    <div class="p-5">
                        <a href=" ">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Activity Club</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="https://precious-bavarois-5e35b0.netlify.app/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" rel="noreferrer">
                            View Site
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <Link to="/activity-club"><button className="bg-sky-600 px-3 py-[6px] text-white rounded-md ml-4 font-medium">Details</button></Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MyProjects;