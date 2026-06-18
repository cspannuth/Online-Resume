import styled from "styled-components";

const Title= styled.h1`
    padding-top: 2rem;
    padding-bottom: 1.25rem;
    text-align: center;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: 0;
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
    margin: 0 1vw 3rem;
`;

const ContentDiv = styled.div`
    padding: 1vh 0 2vh;
`;

const EducationCard = styled.article`
    display: flex;
    align-items: center;
    gap: 3vw;
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-left: 0.45rem solid var(--accent);
    border-radius: 8px;
    margin: 0 0 1.25rem;
    padding: 1.5rem;
    box-shadow: 0 0.5rem 1.2rem rgba(48, 73, 131, 0.14);
    transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;

    &:hover {
        border-color: var(--accent-dark);
        box-shadow: 0 0.75rem 1.5rem rgba(48, 73, 131, 0.2);
        transform: translateY(-2px);
    }

    @media screen and (max-width: 750px) {
        align-items: flex-start;
        flex-direction: column;
        margin-bottom: 1.25rem;
    }
`;

const EducationText = styled.div`
    min-width: 0;
`;

const DegreeTitles = styled.h1`
    font: 700 clamp(1.1rem, 2vw, 1.35rem) Inter, "Segoe UI", Arial, sans-serif;
    line-height: 1.35;
`;

const DegreeInfo = styled.p`
    color: var(--muted-text);
    font-size: 1rem;
    line-height: 1.6;
    padding-left: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.5rem;
    text-align: left;
`;

const CourseworkUl = styled.ul`
    padding-top: 0.75rem;
`;

const CourseworkLi = styled.li`
    font-size: 0.98rem;
    line-height: 1.55;
    padding-bottom: 0.65rem;
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
