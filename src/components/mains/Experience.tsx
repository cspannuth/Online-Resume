import styled from "styled-components";

const Title = styled.h1`
    padding-top: 2%;
    text-align: center;
    font: bold calc(2px + 5vh) "Lucida Handwriting", cursive;
`;

const ContentWrapper= styled.div`
    font: calc(2px + 0.7vh) "Lucida Console", Monaco, monospace;
    margin: 2vh 1vw 10vh 1vw;
    padding: 1vh 0 2vh;
`;

const PositionCard = styled.article`
    background-color: #e5effd;
    border: 1px solid #304983;
    border-left: 0.7vw solid #304983;
    margin: 0 0 2vh;
    padding: 2vh 1vw 1vh 1vw;
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

const PosTitle = styled.h1`
    margin-top: 3vh;
    margin-bottom: 1vh;
    font-size: calc(2px + 2vh);
`;

const FirstPosTitle = styled(PosTitle)`
    margin-top: 0;
`;

const PosContent = styled.p`
    text-align: left;
    font-size: calc(2px + 1.5vh);
    padding: 0.5vh 1vw 1vh 1vw;
    margin-bottom: 1vh;
`;

const Ul = styled.ul`
    margin-bottom: 2vh;
`;

const Li = styled.li`
    margin-top: 1vh;
    font-size: calc(2px + 1.3vh);
    margin-bottom: 1vh;
`;

export default function Experience() {
    // Could add new layout for mobile.
    return (
        <div>
            <Title>
                Professional Experience
            </Title>

            <ContentWrapper>
                <PositionCard>
                    <FirstPosTitle>Software Engineer Intern | Y STEM and Chess Inc | Boise, ID | May 2026 - Present</FirstPosTitle>
                    <PosContent>Currently working with a non-profit organization to develop chess mentoring software for underprivileged kids.</PosContent>
                </PositionCard>
                <PositionCard>
                    <FirstPosTitle>Software Engineer | Laughing Rock Technology, LLC | Reading, PA | March 2026 - Present</FirstPosTitle>
                    <PosContent>Currently working as a software engineer contributing to a variety of projects which serve our commercial clients.</PosContent>
                    <Ul>
                        <Li>Developed programs and scripts to automate essential and repetitive tasks saving 10+ hours of technician time per week.</Li>
                        <Li>Built custom software solutions to solve client-specific problems with respect to security and compliance.</Li>
                    </Ul>
                </PositionCard>
                <PositionCard>
                    <FirstPosTitle>IT Technician | Laughing Rock Technology, LLC | Reading, PA | Aug 2025 -
                        Apr 2026</FirstPosTitle>
                    <PosContent>Previously worked with a team of technicians on a commercial scale to
                        provide information technology, networking, and
                        cybersecurity solutions to hundreds of clients across the Greater Berks area.</PosContent>
                </PositionCard>
                <PositionCard>
                    <FirstPosTitle>IT & Cybersecurity Intern | Laughing Rock Technology, LLC | Reading, PA | May
                        2025 - Aug 2025</FirstPosTitle>
                    <PosContent>Previously worked with a team of technicians to learn the ins and outs of
                        commercial information technology, networking, and
                        cybersecurity. </PosContent>
                    <Ul>
                        <Li>Performed over 165 hours of IT support and completed over 300 tickets for commercial
                            clients.
                        </Li>
                        <Li>Estimated, installed, and monitored full scale commercial networks.</Li>
                        <Li>Utilized remote management for over 1500+ endpoints.</Li>
                        <Li>Led a cyber security project auditing conditional access as well as
                            ensuring security and compliance through 2FA for 30+ tenants.
                        </Li>
                    </Ul>
                </PositionCard>
            </ContentWrapper>

        </div>
    );
}
