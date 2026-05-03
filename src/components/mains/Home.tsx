import styled from "styled-components";

const Content = styled.div`
    width: 100%;
    height: 100%;
`;

const HomeH1 = styled.h1`
    padding-top: 2%;
    padding-bottom: 2%;
    text-align: center;
    font: bold calc(2px + 5vh) "Lucida Handwriting", "Courgette", cursive;
    
`;

const P = styled.p`
    background-color: #e5effd;
    margin-right: 2%;
    margin-left: 2%;
    margin-bottom: 5%;
    border: 1px solid #e5effd;
    padding: 5%;
    font: calc(2px + 1.2vw) "Lucida Console", Monaco, monospace;
    text-align: center;

    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1.8vw);
    }
    
    @media screen and (max-width: 750px) {
        font-size: calc(2px + 3vw);
    }
`;

const Image = styled.img`
    width: 20vw;
    height: 40vh;
    max-height: 100%;
    padding-left: 2%;

    @media screen and (max-width: 750px) {
        width: 30vw;
        height: 20vh;
        padding-left: 0;
        margin-bottom: 2vh;
    }
`;

const Div = styled.div`
    display: flex;
    
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

