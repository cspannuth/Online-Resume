import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
    font-family: "Lucida Handwriting", "Courgette", cursive;
    font-size: calc(2px + 5vh);
    font-weight: bold;
    padding-top: 2%;
`;

const ContentWrapper = styled.div`
    margin: 1vh 1vw 1vh;
    padding: 1vh 0 2vh;
`;

const ProjectCard = styled.article`
    background-color: #e5effd;
    border: 1px solid #304983;
    border-left: 0.7vw solid #304983;
    margin: 0 0 2vh;
    padding: 3%;
    box-shadow: 0 0.5vh 1vh rgba(48, 73, 131, 0.18);
    transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;

    &:hover {
        border-color: #1f356b;
        box-shadow: 0 0.9vh 1.6vh rgba(48, 73, 131, 0.28);
        transform: translateY(-0.4vh);
    }

    @media screen and (max-width: 750px) {
        border-left-width: 1.5vw;
        margin-bottom: 2.5vh;
    }
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

const StyleLink = styled.a`
    color: black;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.3vh;
`;

export default function Projects() {
    // Add ahooks library, possibly use hover mechanisms and such to improve the page.

    return (
        <div>
        <Title>
            Projects
        </Title>

        <ContentWrapper>
            <ProjectCard>
                <ProjectTitle><StyleLink
                    href="https://github.com/cspannuth/Arbitrage_Engine">Sportsbook Arbitrage Engine</StyleLink></ProjectTitle>
                <P>I am currently developing a full-stack sportsbook arbitrage engine that can detect opportunities for guaranteed profit within the sports market.
                </P>
                <Ul>
                    <Li>Built a FastAPI backend to ingest, process, and serve API data through a custom live endpoint</Li>
                    <Li>Designed and managed a PostgreSQL database for efficient storage and retrieval of market data</Li>
                    <Li>Creating an interactive React-based frontend to visualize arbitrage opportunities in real time</Li>
                    <Li>Implemented secure user authentication using Supabase and JWT</Li>
                </Ul>
            </ProjectCard>
            <ProjectCard>
                <ProjectTitle><StyleLink
                    href="https://github.com/cspannuth/Side-Projects/tree/638764e2eca6a239ebfefdbac47de5041641c983/Spell%20Checker">Spell
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
            </ProjectCard>
            <ProjectCard>
                <ProjectTitle><StyleLink
                    href="https://github.com/cspannuth/Side-Projects/tree/638764e2eca6a239ebfefdbac47de5041641c983/Basic%20OCaml%20Interpreter/lib">OCaml
                    Interpreter</StyleLink></ProjectTitle>
                <P>I have developed a basic OCaml interpreter written in OCaml that utilizes the
                    standard library to parse, substitute, and evaluate simple expressions. Some skills utilized are:</P>
                <Ul>
                    <Li>OCaml</Li>
                    <Li>Advanced recursion and pattern matching</Li>
                    <Li>Dune</Li>
                    <Li>Menhir</Li>
                </Ul>
            </ProjectCard>
            <ProjectCard>
                <ProjectTitle><StyleLink
                    href="https://github.com/cspannuth/Side-Projects/tree/638764e2eca6a239ebfefdbac47de5041641c983/TikTakToe">Tik
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
            </ProjectCard>
        </ContentWrapper>

    </div>);
}
