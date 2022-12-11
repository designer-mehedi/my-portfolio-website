import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "skills",
                element: <Skills/>
            },
            {
                path: "projects",
                element: <Projects/>
            },
            {
                path: "contact",
                element: <Contact/>
            }
        ]
    }
])