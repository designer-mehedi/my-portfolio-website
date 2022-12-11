import React from 'react';
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import MySkills from "../MySkills/MySkills";

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMe/>
            <MySkills/>
            <ContactMe/>
        </div>
    );
};

export default Home;