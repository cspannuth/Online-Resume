import styled from "styled-components";

const Name = styled.h1`
    padding-top: 2%;
    padding-left: 3%;
    padding-bottom: 2%;
`;

const HeaderS = styled.header`
    font: calc(2px + 2.5vh) "Lucida Console", Monaco, monospace;
    text-align: left;
    background-color: #304983;
    color: #f1f2f2;
    width: 80%;
    margin: auto;
`;

const Summary = styled.p`
    font-size: calc(2px + 1.5vh);
    padding-left: 3%;
    padding-bottom: 1.5%;
`;

export default function Header() {
    return (
        <HeaderS>
            <Name>
                Connor Spannuth
            </Name>
            <Summary>
                The online resume of an aspiring Software Engineer
            </Summary>
        </HeaderS>
    );
}