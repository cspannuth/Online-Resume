import Footer from "./components/Footer.tsx";
import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
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
    background-color: var(--page-bg);
    align-items: flex-start;
    gap: 1.5rem;
    padding-right: 1.5rem;
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
        gap: 0;
        padding-right: 0;
    }
`;

const Page = styled.div`
    width: min(78%, 1100px);
    margin: 0 auto;

    @media screen and (max-width: 750px) {
        width: 100%;
        padding: 0 1rem;
    }
    
`;

const Section = styled.section`
    scroll-margin-top: 2vh;
    padding-bottom: 3vh;
`;

export default function App() {
  return (
    <>
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
