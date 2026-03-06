import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/mains/Home.tsx";
import Experience from "./components/mains/Experience.tsx";
import Education from "./components/mains/Education.tsx";
import Skills from "./components/mains/Skills.tsx";
import Projects from "./components/mains/Projects.tsx";
import Contact from "./components/mains/Contact.tsx";
import styled from "styled-components";

const Body = styled.div`
    width: 80%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    background-color: #c0d6ef;
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

const Page = styled.div`
    width: 80%;
`;

function Root() {
  return (
      <>
        <Header />
        <Body>
            <Nav />
            <Page>
                <Routes>
                    <Route
                        path={"/"}
                        element={<Home/>}
                    />
                    <Route
                        path={"/index.html"}
                        element={<Home/>}
                    />
                    <Route
                        path={"/experience/experience.html"}
                        element={<Experience/>}
                    />
                    <Route
                        path={"/education/education.html"}
                        element={<Education/>}
                    />
                    <Route
                        path={"/skills/skills.html"}
                        element={<Skills/>}
                    />
                    <Route
                        path={"/projects/projects.html"}
                        element={<Projects/>}
                    />
                    <Route
                        path={"/contact/contact.html"}
                        element={<Contact/>}
                    />
                </Routes>
            </Page>
        </Body>
        <Footer />
      </>
  );
}

const router = createBrowserRouter(
    [{path:"*", Component:Root}]
)

export default function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
