import styled from "styled-components";
import {Link} from "react-router";
import {useEffect} from "react";


const ContentWrapper = styled.div`
    background-color: #e5effd;
    margin: 1vh 1vw 1vh;
    border: 1px solid #e5effd;
    padding: 3% 3% 3% 3%;
`;

const Title = styled.h1`
    text-align: center;
    font: bold calc(2px + 5vh) "Lucida Handwriting", sans-serif;
    padding-top: 2%;
`;

const FirstTitle = styled.h1`
    padding-bottom: 2vh;
    font: calc(2px + 2vh) "Lucida Console", Monaco, monospace;
`;

const ContactTitle = styled.h1`
    font: calc(2px + 2vh) "Lucida Console", Monaco, monospace;
    padding-bottom: 1vh;
    padding-top: 6vh;
`;

const ContactContent = styled.p`
    font: calc(2px + 1.5vh) "Lucida Console", Monaco, monospace;
    padding-left: 1.3vw;
    padding-bottom: 1vw;
`;

const StyleLink = styled(Link)`
    color: black;
`;

export default function Contact() {
    useEffect(() => {
        document.title = "Contact | Resume"
    });

    return (
        <main>
            <Title>
                Contact me!
            </Title>

            <ContentWrapper>
                <FirstTitle>Connect with me on <StyleLink
                    to="https://www.linkedin.com/in/connorspannuth/">LinkedIn</StyleLink></FirstTitle>
                <ContactContent>I would love to add you to my network!</ContactContent>
                <ContactTitle>Check out my <StyleLink to="https://github.com/cspannuth/">GitHub</StyleLink></ContactTitle>
                <ContactContent>See some of my other projects, or works in progress that are not quite
                    featured yet.</ContactContent>
                <ContactTitle>Professional inquiries</ContactTitle>
                <ContactContent>For any professional inquiries, send an email to connorspannuth(at)gmail(dot)com.</ContactContent>
            </ContentWrapper>

        </main>
    );
}