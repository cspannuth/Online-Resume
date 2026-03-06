import styled from "styled-components";
import {useEffect} from "react";

const Main = styled.main`
    width: 100%;
    height: 100%;
`;

const HomeH1 = styled.h1`
    padding-left: 35%;
    padding-top: 2%;
    margin-bottom: 1%;
    text-align: center;
    font: bold 300% "Lucida Handwriting", sans-serif;
`;

const P = styled.p`
    background-color: #e5effd;
    margin-right: 2%;
    margin-left: 2%;
    border: 1px solid #e5effd;
    padding: 5% 3% 5% 5%;
    font: calc(2px + 2vh) "Lucida Console", Monaco, monospace;
    text-align: center;
`;

const Image = styled.img`
    width: 20vw;
    height: 40vh;
    max-height: 100%;
    padding-left: 2%;
`;

const Div = styled.div`
    display: flex;
`;

export default function Home() {
    useEffect(() => {
        document.title = "Home | Resume"
    });

    return (
        <Main>
            <HomeH1>
                Home
            </HomeH1>

            <Div>
                <Image src="/pic.jpg" alt="Connor Spannuth"/>
                <P>
                    A dedicated computer science student at Boston University with a strong passion for technology. My
                    experience ranges from developing and testing automated bots to purchasing limited-edition sneakers
                    during my youth to managing IT infrastructure for numerous commercial clients.
                    <br/><br/>I am currently seeking a software engineering internship where I can leverage my technical
                    skills, create problem-solving abilities, and entrepreneurial mindset in a dynamic, results-oriented
                    environment.
                    <br/><br/>Growing up in a manufacturing-focused upbringing, I developed a keen interest in this
                    industry, fueling my goal to design and implement enterprise resource planning systems for
                    commercial enterprises.
                </P>
            </Div>

        </Main>
    );
}

