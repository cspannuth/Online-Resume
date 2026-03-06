import styled from "styled-components";
import {Link} from "react-router";
import {useEffect} from "react";

const Title = styled.h1`
    text-align: center;
    font: bold calc(2px + 5vh) "Lucida Handwriting", sans-serif;
    padding-top: 2%;
`;

const ContentWrapper = styled.div`
    background-color: #e5effd;
    margin: 1vh 1vw 1vh;
    border: 1px solid #e5effd;
    padding: 3% 3% 3% 3%;
`;

const ProjectTitle = styled.h1`
    font: calc(2px + 2vh) "Lucida Console", Monaco, monospace;
    padding-bottom: 1vh;
    padding-top: 1vh;
`;

const Ul = styled.ul`
    font: calc(2px + 1.2vh) "Lucida Console", Monaco, monospace;
`;

const Li = styled.li`
    padding-bottom: 1vh;
`;

const P = styled.p`
    font: calc(2px + 1.5vh) "Lucida Console", Monaco, monospace;
    padding-left: 1.3vw;
    padding-bottom: 1vw;
`;

const StyleLink = styled(Link)`
    color: black;
`;

export default function Projects() {
    useEffect(() => {
        document.title = "Projects | Resume"
    });

    return (
        <main>
        <Title>
            Projects
        </Title>

        <ContentWrapper>
            <ProjectTitle><StyleLink
                to="https://github.com/cspannuth/Arbitrage_Engine">Sportsbook Arbitrage Engine</StyleLink></ProjectTitle>
            <P>I am currently developing a full-stack sportsbook arbitrage engine that can detect opportunities for guaranteed profit within the market.
                It utilizes a backend that takes in API data, processes it, stores it in a PostgreSQL database, and utilizes FastAPI to host its own live API.
                The frontend then connects to the live API and displays the data for users in a react based interactive UI.
                It also features a full authentication system hosted by Supabase to authenticate users and prevent unauthorized calls to the fetch system in the backend.
                Some skills utilized are:
            </P>
            <Ul>
                <Li>Python</Li>
                <Li>JavaScript / TypeScript</Li>
                <Li>React</Li>
                <Li>FastAPI</Li>
                <Li>PostgreSQL Database</Li>
                <Li>User authentication with JWT</Li>
                <Li>Docker</Li>
            </Ul>
            <ProjectTitle><StyleLink
                to="https://github.com/cspannuth/Side-Projects/tree/638764e2eca6a239ebfefdbac47de5041641c983/Spell%20Checker">Spell
                Checker</StyleLink></ProjectTitle>
            <P>I am currently developing a Spell Checker program written in C that utilizes
                Trie Trees, a fundamental data structure
                and levenshtein's distance algorithm. Thus far I have built a terminal version of the program, and am
                working on implementing a full UI using the
                base Win32 API library. Some skills utilized are:
            </P>
            <Ul>
                <Li>C</Li>
                <Li>Design structure and analysis</Li>
                <Li>Analysis of algorithms</Li>
            </Ul>
            <ProjectTitle><StyleLink
                to="https://github.com/cspannuth/Side-Projects/tree/638764e2eca6a239ebfefdbac47de5041641c983/Basic%20OCaml%20Interpreter/lib">OCaml
                Interpreter</StyleLink></ProjectTitle>
            <P>I have developed a basic OCaml interpreter written in OCaml that utilizes the
                standard library to parse, substitute, and evaluate simple expressions. Some skills utilized are:</P>
            <Ul>
                <Li>OCaml</Li>
                <Li>Advanced recursion and pattern matching</Li>
                <Li>Dune</Li>
                <Li>Menhir</Li>
            </Ul>
            <ProjectTitle><StyleLink
                to="https://github.com/cspannuth/Side-Projects/tree/638764e2eca6a239ebfefdbac47de5041641c983/TikTakToe">Tik
                Tak Toe</StyleLink></ProjectTitle>
            <P>I have developed a Tik Tak Toe game in two different languages with several
                different methods of play. It can be played with either two players locally, or with an artificial
                intelligence agent. This agent has two modes, one which selects random positions and is fairly simple to
                defeat, while the second uses advanced vision to see the board and calculate the best possible move. It
                can view the cost of potential moves and decide which would have the highest potential outcome for
                defeating the player. Some skills utilized are:</P>
            <Ul>
                <Li>Python</Li>
                <Li>Java</Li>
                <Li>Object Oriented Design</Li>
                <Li>Artificial Intelligence</Li>
            </Ul>
        </ContentWrapper>

    </main>);
}