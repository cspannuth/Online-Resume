import {Link} from "react-router";
import styled from "styled-components";

const FooterS = styled.footer`
    text-align: center;
    background-color: #c0d6ef;
    width: 80%;
    margin: auto;
`;

export default function Footer() {
    return(
        <FooterS>
            <p>All rights reserved <Link to={``}>Credits</Link> &copy;</p>
        </FooterS>
    );
}