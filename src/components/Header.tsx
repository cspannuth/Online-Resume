import styled from "styled-components";

const Name = styled.h1`
    padding: 1.4rem 3% 0.4rem;
    font-size: clamp(2rem, 5vw, 3.6rem);
    letter-spacing: 0;
`;

const HeaderS = styled.header`
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    text-align: left;
    background-color: var(--accent);
    color: #f8fbff;
    margin: auto;
    box-shadow: 0 0.3rem 1rem rgba(31, 53, 107, 0.22);
`;

const Summary = styled.p`
    color: #dce8f7;
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.5;
    padding: 0 3% 1.25rem;
`;

export default function Header() {
    return (
        <HeaderS>
            <Name>
                Connor Spannuth
            </Name>
            <Summary>
                The online resume of a Software Engineer with a concentration on cybersecurity and compliance
            </Summary>
        </HeaderS>
    );
}
