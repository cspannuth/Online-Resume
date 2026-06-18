import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: 0;
    padding-top: 2rem;
    padding-bottom: 1.25rem;
`;

const ContentWrapper = styled.div`
    margin: 0 1vw 1rem;
    padding: 0 0 2rem;
    display: grid;
    grid-template-columns: minmax(0, 58%) minmax(220px, 1fr);
    gap: 1.5rem;
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

const SkillTitle = styled.h1`
    font: 700 clamp(1.1rem, 2vw, 1.35rem) Inter, "Segoe UI", Arial, sans-serif;
    padding-bottom: 0.75rem;
    padding-top: 0.25rem;
`;

const Ul = styled.ul`
    
`;

const Li = styled.li`
    color: var(--muted-text);
    font-size: 0.98rem;
    line-height: 1.55;
    padding-bottom: 0.65rem;
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
    border: 1px solid var(--card-border);
    border-radius: 8px;
    box-shadow: 0 0.5rem 1.2rem rgba(48, 73, 131, 0.14);

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
