import styled from "styled-components";

const FooterS = styled.footer`
    text-align: center;
    background-color: var(--page-bg);
    color: var(--muted-text);
    margin: auto;
    padding: 1.5rem;
`;

export default function Footer() {
    return(
        <FooterS>
            <p>All rights reserved <a href="#home">Credits</a> &copy;</p>
        </FooterS>
    );
}
