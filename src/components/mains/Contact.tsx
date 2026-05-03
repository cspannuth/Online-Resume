import styled from "styled-components";


const ContentWrapper = styled.div`
    margin: 1vh 1vw 1vh;
    padding: 1vh 0 2vh;
`;

const Title = styled.h1`
    text-align: center;
    font-family: "Lucida Handwriting", "Lucida Console", Monaco, monospace;
    font-size: calc(2px + 5vh);
    font-weight: bold;
    padding-top: 2%;
`;

const FirstTitle = styled.h1`
    padding-bottom: 2vh;
    font: calc(2px + 2vh) "Lucida Console", Monaco, monospace;
`;

const ContactTitle = styled.h1`
    font: calc(2px + 2vh) "Lucida Console", Monaco, monospace;
    padding-bottom: 1vh;
`;

const ContactContent = styled.p`
    font: calc(2px + 1.5vh) "Lucida Console", Monaco, monospace;
    padding-left: 1.3vw;
    padding-bottom: 1vw;
`;

const StyleLink = styled.a`
    color: black;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.3vh;
`;

const ContactCard = styled.article`
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

export default function Contact() {
    return (
        <div>
            <Title>
                Contact me!
            </Title>

            <ContentWrapper>
                <ContactCard>
                    <FirstTitle>Connect with me on <StyleLink
                        href="https://www.linkedin.com/in/connorspannuth/">LinkedIn</StyleLink></FirstTitle>
                    <ContactContent>I would love to add you to my network!</ContactContent>
                </ContactCard>
                <ContactCard>
                    <ContactTitle>Check out my <StyleLink href="https://github.com/cspannuth/">GitHub</StyleLink></ContactTitle>
                    <ContactContent>See some of my other projects, or works in progress that are not quite
                        featured yet.</ContactContent>
                </ContactCard>
                <ContactCard>
                    <ContactTitle>Professional inquiries</ContactTitle>
                    <ContactContent>For any professional inquiries, send an email to connorspannuth(at)gmail(dot)com.</ContactContent>
                </ContactCard>
            </ContentWrapper>

        </div>
    );
}
