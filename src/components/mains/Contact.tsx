import styled from "styled-components";


const ContentWrapper = styled.div`
    margin: 0 1vw 1rem;
    padding: 0 0 2rem;
`;

const Title = styled.h1`
    text-align: center;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: 0;
    padding-top: 2rem;
    padding-bottom: 1.25rem;
`;

const FirstTitle = styled.h1`
    padding-bottom: 1rem;
    font: 700 clamp(1.1rem, 2vw, 1.35rem) Inter, "Segoe UI", Arial, sans-serif;
`;

const ContactTitle = styled.h1`
    font: 700 clamp(1.1rem, 2vw, 1.35rem) Inter, "Segoe UI", Arial, sans-serif;
    padding-bottom: 0.75rem;
`;

const ContactContent = styled.p`
    color: var(--muted-text);
    font-size: 1rem;
    line-height: 1.6;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
`;

const StyleLink = styled.a`
    color: var(--accent-dark);
    text-decoration-thickness: 1px;
    text-underline-offset: 0.3vh;
`;

const ContactCard = styled.article`
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
