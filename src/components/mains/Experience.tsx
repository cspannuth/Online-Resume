import styled from "styled-components";
import {useEffect} from "react";

const Title = styled.h1`
    padding-top: 2%;
    text-align: center;
    font: bold calc(2px + 5vh) "Lucida Handwriting", cursive;
`;

const ContentWrapper= styled.div`
    font: calc(2px + 0.7vh) "Lucida Console", Monaco, monospace;
    border: 1px solid #e5effd;
    background-color: #e5effd;
    margin: 2vh 1vw 1vh 1vw;
    padding: 2vh 1vw 1vh 1vw;
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
    useEffect(() => {
        document.title = "Experience | Resume"
    });

    // Could add new layout for mobile.
    return (
        <main>
            <Title>
                Professional Experience
            </Title>

            <ContentWrapper>
                <FirstPosTitle>Software Engineer | Laughing Rock Technology, LLC | Reading, PA | March 2026 - Present</FirstPosTitle>
                <PosContent>Currently working as a software engineer contributing to a variety of projects which serve our commercial clients.</PosContent>
                <Ul>
                    <Li>Tied custom APIs into mainstream CRMs to allow end users to modify data from a private Postgres database.</Li>
                    <Li>Developed programs and scripts to automate essential and repetitive tasks saving 10+ hours of technician time per week.</Li>
                    <Li>Built custom software solutions to solve client-specific problems with respect to security and compliance.</Li>
                </Ul>
                <PosTitle>IT Technician | Laughing Rock Technology, LLC | Reading, PA | Aug 2025 -
                    Apr 2026</PosTitle>
                <PosContent>Currently working with a team of technicians on a commercial scale to
                    provide information technology, networking, and
                    cybersecurity solutions to hundreds of clients across the Greater Berks area.</PosContent>
                <PosTitle>IT & Cybersecurity Intern | Laughing Rock Technology, LLC | Reading, PA | May
                    2025 - Aug 2025</PosTitle>
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
                <PosTitle>Line Cook | Bennett's Sandwich Shop | Boston, MA | Mar 2024 - May 2025</PosTitle>
                <PosContent>Previously oversaw food production and quality control within the
                    restaurant.</PosContent>
                <PosTitle>Team Lead | Panera Bread | Exton, PA | May 2021 - Nov 2023</PosTitle>
                <PosContent>Previously balanced several responsibilities including employee
                    management, customer negotiation, and food production.</PosContent>
                <Ul>
                    <Li>Earned several promotions and developed the skills necessary to manage a team in a
                        production-based environment.
                    </Li>
                </Ul>
                <PosTitle>Referee | USA Hockey | Exton, PA | Apr 2018 - Jun 2020</PosTitle>
                <PosContent>Previously officiated USA Hockey sanctioned games for a variety of age
                    groups ranging from eight to fourteen years.</PosContent>
            </ContentWrapper>

        </main>
    );
}