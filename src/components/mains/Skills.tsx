import styled from "styled-components";
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

const SkillTitle = styled.h1`
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

export default function Skills() {
    useEffect(() => {
        document.title = "Skills | Resume"
    });

    return (
        <main>
            <Title>
                Skills
            </Title>

            <ContentWrapper>
                <SkillTitle>Tech Stack</SkillTitle>
                <Ul>
                    <Li>Python - NumPy & Pandas</Li>
                    <Li>Java</Li>
                    <Li>C</Li>
                    <Li>JavaScript / TypeScript - React</Li>
                    <Li>OCaml</Li>
                    <Li>HTML & CSS</Li>
                </Ul>
                <SkillTitle>Technological Skills</SkillTitle>
                <Ul>
                    <Li>Information Technology</Li>
                    <Li>Networking</Li>
                    <Li>Cyber Security</Li>
                    <Li>Artificial Intelligence</Li>
                    <Li>Machine Learning</Li>
                    <Li>Cloud Services</Li>
                    <Li>Microsoft Administration Suite</Li>
                    <Li>Git</Li>
                    <Li>AWS</Li>
                </Ul>
                <SkillTitle>General Skills</SkillTitle>
                <Ul>
                    <Li>Employee Management</Li>
                    <Li>Dedicated Learner</Li>
                    <Li>Ability to work effectively in team environments</Li>
                </Ul>
            </ContentWrapper>

        </main>
    );
}