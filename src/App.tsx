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
    @media screen and (max-width: 750px) {
        width: 100%;
    }
    
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
                        path={"/index"}
                        element={<Home/>}
                    />
                    <Route
                        path={"/experience"}
                        element={<Experience/>}
                    />
                    <Route
                        path={"/education"}
                        element={<Education/>}
                    />
                    <Route
                        path={"/skills"}
                        element={<Skills/>}
                    />
                    <Route
                        path={"/projects"}
                        element={<Projects/>}
                    />
                    <Route
                        path={"/contact"}
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
