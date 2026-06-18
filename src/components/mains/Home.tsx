import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    height: 100%;
`;

const HomeH1 = styled.h1`
    padding-top: 2rem;
    padding-bottom: 1.25rem;
    text-align: center;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: 0;
`;

const P = styled.p`
    background-color: var(--card-bg);
    margin: 0 2% 5%;
    border: 1px solid var(--card-border);
    border-left: 0.45rem solid var(--accent);
    border-radius: 8px;
    padding: clamp(1.25rem, 4vw, 3rem);
    font-size: clamp(1rem, 1.5vw, 1.15rem);
    line-height: 1.75;
    text-align: left;
    box-shadow: 0 0.5rem 1.2rem rgba(48, 73, 131, 0.14);
    
    @media screen and (max-width: 750px) {
        margin-left: 0;
        margin-right: 0;
    }
`;

const Image = styled.img`
    width: 30%;
    height: 150%;
    display: block;
    border-radius: 6px;
    border: 0.35rem solid var(--card-bg);
    outline: 1px solid var(--card-border);
    margin-left: 2%;
    box-shadow: 0 0.5rem 1.2rem rgba(48, 73, 131, 0.14);

    @media screen and (max-width: 750px) {
        width: min(65vw, 240px);
        margin-left: 0;
        margin-bottom: 1.25rem;
    }
`;

const Div = styled.div`
    display: flex;
    gap: 1.5rem;
    
    @media screen and (max-width: 750px) {
        align-items: center;
        flex-direction: column;
    }
`;

export default function Home() {
    return (
        <Content>
            <HomeH1>
                Home
            </HomeH1>

            <Div>
                <Image src="/pic.jpg" alt="Connor Spannuth"/>
                <P>
                    A dedicated computer science student at Boston University with a strong passion for technology. My
                    experience ranges from developing and testing automated bots to managing a limited-edition sneaker reselling business
                    during my youth to managing IT infrastructure for numerous commercial clients.
                    <br/><br/>Currently working as a software engineer in the commercial space leveraging my technical
                    skills, creative problem-solving abilities, and entrepreneurial mindset in a dynamic, results-oriented
                    environment.
                    <br/><br/>Growing up in a manufacturing-focused upbringing, I developed a keen interest in this
                    industry, fueling my goal to design and implement enterprise resource planning systems for
                    commercial enterprises.
                </P>
            </Div>

        </Content>
    );
}

