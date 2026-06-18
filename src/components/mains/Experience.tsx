import styled from "styled-components";

const Title = styled.h1`
    padding-top: 2rem;
    padding-bottom: 1.25rem;
    text-align: center;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: 0;
`;

const ContentWrapper= styled.div`
    margin: 0 1vw 4rem;
    padding: 0 0 2rem;
`;

const PositionCard = styled.article`
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-left: 0.45rem solid var(--accent);
    border-radius: 8px;
    margin: 0 0 1.25rem;
    padding: 1.25rem;
    box-shadow: 0 0.5rem 1.2rem rgba(48, 73, 131, 0.14);
    transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;

    &:hover {
        border-color: var(--accent-dark);
        box-shadow: 0 0.75rem 1.5rem rgba(48, 73, 131, 0.2);
        transform: translateY(-2px);
    }

    @media screen and (max-width: 750px) {
        margin-bottom: 1.25rem;
    }
`;

const PosTitle = styled.h1`
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    line-height: 1.35;
`;

const FirstPosTitle = styled(PosTitle)`
    margin-top: 0;
`;

const PosContent = styled.p`
    text-align: left;
    color: var(--muted-text);
    font-size: 1rem;
    line-height: 1.65;
    padding: 0.25rem 0 0.75rem;
    margin-bottom: 0.5rem;
`;

const Ul = styled.ul`
    margin-bottom: 2vh;
`;

const Li = styled.li`
    margin-top: 0.65rem;
    font-size: 0.98rem;
    line-height: 1.55;
    margin-bottom: 0.65rem;
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
                    <Ul>
                        <Li>Managed and reviewed outstanding PR's through white and black box testing methodologies.</Li>
                        <Li>Led the puzzle themes project aimed to engineer new ways to teach chess.</Li>
                    </Ul>
                </PositionCard>
                <PositionCard>
                    <FirstPosTitle>Software Engineer | Laughing Rock Technology, LLC | Reading, PA | March 2026 - Present</FirstPosTitle>
                    <PosContent>Currently working as a lead software engineer contributing to a variety of projects which serve our commercial clients.</PosContent>
                    <Ul>
                        <Li>Programmed and maintained a new website for the cabling division to host on a self-created VPS server.</Li>
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
