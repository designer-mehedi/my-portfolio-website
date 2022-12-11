import React from 'react';

const MySkills = () => {
    return (
        <section className="lg:container lg:px-32 px-4">
            <h2 className="text-center font-bold text-3xl">My Skills</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-20 lg:gap-10 gap-5">
                <div className="left">
                    <div className="html mb-5">
                        <div class="flex justify-between mb-1">
                      <span class="text-xl font-medium text-sky-600 dark:text-white">HTML</span>
                      <span class="text-lg font-medium text-sky-600 dark:text-white">99%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-sky-600 h-2.5 rounded-full" style={{width: "99%"}}></div>
                    </div>
                    </div>
                    <div className="css mb-5">
                        <div class="flex justify-between mb-1">
                      <span class="text-xl font-medium text-sky-600 dark:text-white">CSS</span>
                      <span class="text-lg font-medium text-sky-600 dark:text-white">95%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-sky-600 h-2.5 rounded-full" style={{width: "95%"}}></div>
                    </div>
                    </div>
                    <div className="bootstarp mb-5">
                        <div class="flex justify-between mb-1">
                      <span class="text-xl font-medium text-sky-600 dark:text-white">Bootstarp</span>
                      <span class="text-lg font-medium text-sky-600 dark:text-white">90%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-sky-600 h-2.5 rounded-full" style={{width: "90%"}}></div>
                    </div>
                    </div>
                    <div className="tailwind">
                        <div class="flex justify-between mb-1">
                      <span class="text-xl font-medium text-sky-600 dark:text-white">Tailwind</span>
                      <span class="text-lg font-medium text-sky-600 dark:text-white">85%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-sky-600 h-2.5 rounded-full" style={{width: "85%"}}></div>
                    </div>
                    </div>
                </div>
                <div className="right">
                    <div className="javascript mb-5">
                        <div class="flex justify-between mb-1">
                      <span class="text-xl font-medium text-sky-600 dark:text-white">JavaScript</span>
                      <span class="text-lg font-medium text-sky-600 dark:text-white">80%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-sky-600 h-2.5 rounded-full" style={{width: "80%"}}></div>
                    </div>
                    </div>
                    <div className="react mb-5">
                        <div class="flex justify-between mb-1">
                      <span class="text-xl font-medium text-sky-600 dark:text-white">React</span>
                      <span class="text-lg font-medium text-sky-600 dark:text-white">90%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-sky-600 h-2.5 rounded-full" style={{width: "90%"}}></div>
                    </div>
                    </div>
                    <div className="mongodb mb-5">
                        <div class="flex justify-between mb-1">
                      <span class="text-xl font-medium text-sky-600 dark:text-white">MongoDB</span>
                      <span class="text-lg font-medium text-sky-600 dark:text-white">75%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-sky-600 h-2.5 rounded-full" style={{width: "75%"}}></div>
                    </div>
                    </div>
                    <div className="nodejs">
                        <div class="flex justify-between mb-1">
                      <span class="text-xl font-medium text-sky-600 dark:text-white">Node JS</span>
                      <span class="text-lg font-medium text-sky-600 dark:text-white">70%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-sky-600 h-2.5 rounded-full" style={{width: "70%"}}></div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkills;