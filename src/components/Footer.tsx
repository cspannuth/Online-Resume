import styled from "styled-components";

const FooterS = styled.footer`
    text-align: center;
    background-color: #c0d6ef;
    margin: auto;
`;

export default function Footer() {
    return(
        <FooterS>
            <p>All rights reserved <a href="#home">Credits</a> &copy;</p>
        </FooterS>
    );
}
