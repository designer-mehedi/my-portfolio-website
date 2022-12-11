import React from 'react';
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import MySkills from "../MySkills/MySkills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            <MySkills/>
        </div>
    );
};

export default Home;