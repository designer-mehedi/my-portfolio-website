import React from 'react';
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import MyProjects from "../MyProjects/MyProjects";
import MySkills from "../MySkills/MySkills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            <MySkills/>
            <MyProjects/>
            <ContactMe/>
        </div>
    );
};

export default Home;