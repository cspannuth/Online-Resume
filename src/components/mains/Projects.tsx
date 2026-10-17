import {useState} from "react";
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
`;

const ProjectCard = styled.article`
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-left: 0.45rem solid var(--accent);
    border-radius: 8px;
    cursor: pointer;
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

const DetailCard = styled.article`
    background-color: rgba(248, 251, 255, 0.78);
    border: 1px solid var(--card-border);
    border-left: 0.45rem solid var(--accent);
    border-radius: 8px;
    margin: -0.5rem 0 1.25rem 2rem;
    padding: 1.25rem;
    box-shadow: 0 0.4rem 1rem rgba(48, 73, 131, 0.1);

    @media screen and (max-width: 750px) {
        margin-left: 0.75rem;
    }
`;

const ProjectTitle = styled.h1`
    font: 700 clamp(1.1rem, 2vw, 1.35rem) Inter, "Segoe UI", Arial, sans-serif;
    line-height: 1.35;
    padding-bottom: 0.75rem;
    padding-top: 0.25rem;
`;

const Ul = styled.ul`
    color: var(--muted-text);
    font-size: 0.98rem;
    line-height: 1.55;
`;

const Li = styled.li`
    padding-bottom: 0.65rem;
`;

const P = styled.p`
    color: var(--muted-text);
    font-size: 1rem;
    line-height: 1.6;
    padding-left: 1rem;
    padding-bottom: 0.75rem;
`;

const ScreenshotGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5vw;
    padding-top: 1vh;

    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        gap: 2vh;
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    border: 1px solid var(--card-border);
    border-radius: 6px;
    display: block;
    background-color: #ffffff;
    box-shadow: 0 0.35rem 0.9rem rgba(48, 73, 131, 0.12);
`;

const StyleLink = styled.a`
    color: var(--accent-dark);
    text-decoration-thickness: 1px;
    text-underline-offset: 0.3vh;
`;

export default function Projects() {
    const [showArbitrage, setShowArbitrage] = useState(false);
    const [showVenderLo, setShowVenderLo] = useState(false);
    const [showSentinel, setShowSentinel] = useState(false);

    return (
        <div>
        <Title>
            Projects
        </Title>

        <ContentWrapper>
            <ProjectCard onClick={() => setShowSentinel(!showSentinel)}>
                <ProjectTitle><StyleLink
                    href="https://github.com/cspannuth/Sentinel">Sentinel - AI Malware Detection Engine</StyleLink></ProjectTitle>
                <P>I am currently developing a Rust-based malware detection engine leveraging SHA-256 hashing, YARA-X signature matching, and static
                    executable analysis to identify potential security threats.
                </P>
                <Ul>
                    <Li>Building an AI-powered classification pipeline to detect suspicious Windows executables using machine learning and
                        extracted binary features.</Li>
                    <Li>Designing a cross-platform desktop interface using Tauri and React to provide detailed threat assessments, scan reports, and file analysis.</Li>
                </Ul>
            </ProjectCard>
            {showSentinel &&
                <DetailCard>
                    <ScreenshotGrid>
                        <ProjectImage src="/Sentinel-Dash.png" alt="Sentinel Dashboard" />
                        <ProjectImage src="/Sentinel-Scan.png" alt="Sentinel Test Virus Scan" />
                    </ScreenshotGrid>
                </DetailCard>
            }
            <ProjectCard onClick={() => setShowArbitrage(!showArbitrage)}>
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
            {showArbitrage &&
                <DetailCard>
                    <ScreenshotGrid>
                        <ProjectImage src="/Sportsarb_Home.png" alt="Sportsbook Arbitrage Engine home dashboard" />
                        <ProjectImage src="/Sportsarb_Props.png" alt="Sportsbook Arbitrage Engine props view" />
                    </ScreenshotGrid>
                </DetailCard>
            }
            <ProjectCard onClick={() => setShowVenderLo(!showVenderLo)}>
                <ProjectTitle>
                    <StyleLink href="https://github.com/cspannuth/VenderLo">VenderLo - E-Commerce</StyleLink>
                </ProjectTitle>
                <P>I am currently developing a local marketplace application that allows users to buy and sell items within
                their communities.</P>
                <Ul>
                    <Li>Incorporates secure cookie based authentication with crypto hashing</Li>
                    <Li>Stores all data using MongoDB for persistence</Li>
                    <Li>Utilizes Redis for cache based quick access</Li>
                    <Li>Features Next.js for server-side backend management</Li>
                </Ul>
            </ProjectCard>
            {showVenderLo &&
                <DetailCard>
                    <ScreenshotGrid>
                        <ProjectImage src="/VenderLo_Home.png" alt="VenderLo marketplace home page" />
                        <ProjectImage src="/VenderLo_Product.png" alt="VenderLo product detail page" />
                    </ScreenshotGrid>
                </DetailCard>
            }
        </ContentWrapper>

    </div>);
}
