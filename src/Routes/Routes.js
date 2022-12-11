import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import ContactMe from "../Pages/ContactME/ContactMe";
import Header from "../Pages/Header/Header";
import Project from "../Pages/Project/Project";
import Skills from "../Pages/Skills/Skills";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Main></Main>
            },
            {
                path: '/',
                element: <Skills></Skills>
            },
            {
                path: '/',
                element: <Project></Project>
            },
            {
                path: '/',
                element: <ContactMe></ContactMe>
            },
            {
                path: '/',
                element: <Header></Header>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]

    },
])

export default router;