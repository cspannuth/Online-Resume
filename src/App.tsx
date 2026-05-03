import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
import Home from "./components/mains/Home.tsx";
import Experience from "./components/mains/Experience.tsx";
import Education from "./components/mains/Education.tsx";
import Skills from "./components/mains/Skills.tsx";
import Projects from "./components/mains/Projects.tsx";
import Contact from "./components/mains/Contact.tsx";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');

    html {
        scroll-behavior: smooth;
    }
`;

const Body = styled.div`

    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    background-color: #c0d6ef;
    align-items: flex-start;
    
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

const Section = styled.section`
    scroll-margin-top: 2vh;
    padding-bottom: 3vh;
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Body>
          <Nav />
          <Page>
              <Section id="home">
                  <Home/>
              </Section>
              <Section id="experience">
                  <Experience/>
              </Section>
              <Section id="education">
                  <Education/>
              </Section>
              <Section id="skills">
                  <Skills/>
              </Section>
              <Section id="projects">
                  <Projects/>
              </Section>
              <Section id="contact">
                  <Contact/>
              </Section>
          </Page>
      </Body>
      <Footer />
    </>
  )
}
