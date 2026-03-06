import styled from "styled-components";
import {useEffect} from "react";

const Title= styled.h1`
    padding-top: 2%;
    text-align: center;
    font: bold calc(2px + 5vh) "Lucida Handwriting", sans-serif;
`;

const BUpic = styled.img`
    width: 15vw;
    height: 20vh;
    max-height: 100%;
`;

const OJRpic = styled.img`
    width: 15vw;
    height: 20vh;
    max-height: 100%;
    margin-top: 5%;
`;

const InsideH1Div = styled.div`
    display: flex;
    margin-top: 1vh;
`;

const ContentDiv = styled.div`
    background-color: #e5effd;
    margin: 1vh 1vw 1vh;
    border: 1px solid #e5effd;
    padding: 3% 3% 3% 3%;
`;

const ImagesDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 7%;
`;

const DegreeTitles = styled.h1`
    font: calc(2px + 1.8vh) "Lucida Console", Monaco, monospace;
`;

const DegreeInfo = styled.p`
    font: calc(2px + 1.5vh) "Lucida Console", Monaco, monospace;
    padding-left: 2vw;
    padding-top: 1vw;
    padding-bottom: 10vh;
    text-align: left;
`;

const CourseworkUl = styled.ul`
    font: calc(2px + 1.5vh) "Lucida Console", Monaco, monospace;
    padding-top: 1vh;
`;

const CourseworkLi = styled.li`
    font: calc(2px + 1.3vh) "Lucida Console", Monaco, monospace;
    padding-bottom: 1vh;
`;

export default function Education() {
    useEffect(() => {
        document.title = "Education | Resume"
    });

    return (
        <main>
            <Title>
                Education
            </Title>
            <InsideH1Div>
                <ImagesDiv>
                    <BUpic src="/bu.png" alt="Boston University Logo"/>
                    <OJRpic src="/ojr.webp" alt="Owen J. Roberts Logo"/>
                </ImagesDiv>
                <ContentDiv>
                    <DegreeTitles> Bachelor Of Arts | Boston University | Computer Science</DegreeTitles>
                    <DegreeInfo>
                        Expected graduation date of May 2027.
                    </DegreeInfo>
                    <DegreeTitles>High School Diploma | Owen J. Roberts High School</DegreeTitles>
                    <DegreeInfo>Graduated with honors in 2023.</DegreeInfo>
                    <DegreeTitles>Notable coursework taken:</DegreeTitles>
                    <CourseworkUl>
                        <CourseworkLi>CS320: Concepts of Programming Languages</CourseworkLi>
                        <CourseworkLi>CS330: Analysis of Algorithms</CourseworkLi>
                        <CourseworkLi>CS391: Web Development with React</CourseworkLi>
                        <CourseworkLi>CS411: Software Engineering</CourseworkLi>
                        <CourseworkLi>CS440: Intro to Artificial Intelligence</CourseworkLi>
                    </CourseworkUl>
                </ContentDiv>
            </InsideH1Div>

        </main>
    );
}