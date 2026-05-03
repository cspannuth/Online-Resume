import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
    font-family: "Lucida Handwriting", "Lucida Console", Monaco, monospace;
    font-size: calc(2px + 5vh);
    font-weight: bold;
    padding-top: 2%;
`;

const ContentWrapper = styled.div`
    margin: 1vh 1vw 1vh;
    padding: 1vh 0 2vh;
    display: grid;
    grid-template-columns: minmax(0, 58%) minmax(220px, 1fr);
    gap: 2vw;
    align-items: center;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        align-items: start;
    }
`;

const SkillCards = styled.div`
    min-width: 0;
`;

const SkillCard = styled.article`
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

const SkillTitle = styled.h1`
    font: calc(2px + 2vh) "Lucida Console", Monaco, monospace;
    padding-bottom: 1vh;
    padding-top: 1vh;
`;

const Ul = styled.ul`
    
`;

const Li = styled.li`
    font: calc(2px + 1.3vh) "Lucida Console", Monaco, monospace;
    padding-bottom: 1vh;
`;

const MediaColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 2vh;
    height: 100%;
`;

const MediaImage = styled.img`
    width: 100%;
    max-height: 32vh;
    object-fit: cover;
    border: 1px solid #304983;
    box-shadow: 0 0.5vh 1vh rgba(48, 73, 131, 0.18);

    @media screen and (max-width: 750px) {
        max-height: 45vh;
    }
`;

export default function Skills() {
    // Re-size main card and fit other items into page. Fill more space

    return (
        <div>
            <Title>
                Skills
            </Title>

            <ContentWrapper>
                <SkillCards>
                    <SkillCard>
                        <SkillTitle>Tech Stack</SkillTitle>
                        <Ul>
                            <Li>Python - NumPy & Pandas</Li>
                            <Li>Java</Li>
                            <Li>C</Li>
                            <Li>JavaScript / TypeScript - React</Li>
                            <Li>OCaml</Li>
                            <Li>HTML & CSS</Li>
                        </Ul>
                    </SkillCard>
                    <SkillCard>
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
                    </SkillCard>
                    <SkillCard>
                        <SkillTitle>General Skills</SkillTitle>
                        <Ul>
                            <Li>Employee Management</Li>
                            <Li>Dedicated Learner</Li>
                            <Li>Ability to work effectively in team environments</Li>
                        </Ul>
                    </SkillCard>
                </SkillCards>
                <MediaColumn>
                    <MediaImage src="/medai.jpg" alt="Medical AI project interface" />
                    <MediaImage src="/raspi.jpeg" alt="Raspberry Pi hardware project" />
                </MediaColumn>
            </ContentWrapper>

        </div>
    );
}
