import styled from "styled-components";

const Title= styled.h1`
    padding-top: 2%;
    text-align: center;
    font: bold calc(2px + 5vh) "Lucida Handwriting", "Courgette", cursive;
`;

const BUpic = styled.img`
    width: 12vw;
    height: 16vh;
    max-height: 100%;
    object-fit: contain;
    
    @media screen and (max-width: 750px) {
        width: 30vw;
    }
`;

const OJRpic = styled.img`
    width: 12vw;
    height: 16vh;
    max-height: 100%;
    object-fit: contain;
    
    @media screen and (max-width: 750px) {
        width: 30vw;
    }
`;

const InsideH1Div = styled.div`
    margin: 1vh 1vw 5vw;
`;

const ContentDiv = styled.div`
    padding: 1vh 0 2vh;
`;

const EducationCard = styled.article`
    display: flex;
    align-items: center;
    gap: 3vw;
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
        align-items: flex-start;
        border-left-width: 1.5vw;
        flex-direction: column;
        margin-bottom: 2.5vh;
    }
`;

const EducationText = styled.div`
    min-width: 0;
`;

const DegreeTitles = styled.h1`
    font: bold calc(2px + 1.8vh) "Lucida Console", Monaco, monospace;
`;

const DegreeInfo = styled.p`
    font: calc(2px + 1.5vh) "Lucida Console", Monaco, monospace;
    padding-left: 2vw;
    padding-top: 1vw;
    padding-bottom: 1vh;
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
    return (
        <div>
            <Title>
                Education
            </Title>
            <InsideH1Div>
                <ContentDiv>
                    <EducationCard>
                        <BUpic src="/bu.png" alt="Boston University Logo"/>
                        <EducationText>
                            <DegreeTitles> Bachelor Of Arts | Boston University | Computer Science</DegreeTitles>
                            <DegreeInfo>
                                Expected graduation date of May 2027.
                            </DegreeInfo>
                            <DegreeInfo>
                                Accomplishments
                                <CourseworkUl>
                                    <CourseworkLi>MedAI Hackathon: Awarded 2nd Place</CourseworkLi>
                                    <CourseworkLi>3x Deans List Recipient</CourseworkLi>
                                </CourseworkUl>
                            </DegreeInfo>
                            <DegreeInfo>
                                Notable Coursework Taken:
                                <CourseworkUl>
                                    <CourseworkLi>CS330: Analysis of Algorithms</CourseworkLi>
                                    <CourseworkLi>CS391: Web Development with React</CourseworkLi>
                                    <CourseworkLi>CS411: Software Engineering</CourseworkLi>
                                    <CourseworkLi>CS440: Intro to Artificial Intelligence</CourseworkLi>
                                </CourseworkUl>
                            </DegreeInfo>
                        </EducationText>
                    </EducationCard>
                    <EducationCard>
                        <OJRpic src="/ojr.webp" alt="Owen J. Roberts Logo"/>
                        <EducationText>
                            <DegreeTitles>High School Diploma | Owen J. Roberts High School</DegreeTitles>
                            <DegreeInfo>Graduated with honors in 2023.</DegreeInfo>
                        </EducationText>
                    </EducationCard>
                </ContentDiv>
            </InsideH1Div>

        </div>
    );
}
