import {Link} from "react-router";
import styled from "styled-components";

const NavBar = styled.nav`
    margin-top: 2%;
    margin-left: 2%;
    padding-top: 2%;
    padding-bottom: 1%;
    padding-right: 2%;
    text-align: center;
    background-color: #f1f2f2;
    width: 20%;
    height: 20%;
    
    @media screen and (max-width: 750px) {
        background-color: transparent;
        margin: 0 auto;
    }
    
`;

const NavUl = styled.ul`
    list-style: none;
    padding-left: 2vw;
    
    @media screen and (max-width: 750px) {
        margin-right: 3vw;
        display: flex;
        justify-content: center;
    }
    
`;

const NavLi = styled.li`
    @media screen and (max-width: 750px) {
        margin: 5% 5% 5% 5%;
        font-size: calc(2px + 1vh);
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    border: black solid 1px;
    padding-bottom: 5%;
    padding-top: 5%;
    background-color: #304983;
    color: #e5effd;
    font: calc(2px + 1.8vh) "Lucida Console", Monaco, monospace;
    display: block;
    margin-bottom: 10%;
    
    @media screen and (max-width: 750px) {
        padding: 1vh 1vw 1vh 1vw;
        
    }

    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1.4vw);
    }
    
`;

export default function Nav() {
    return (
            <NavBar>
                <NavUl>
                    <NavLi><NavLink to="/index.html">Home</NavLink></NavLi>
                    <NavLi><NavLink to="/experience/experience.html">Experience</NavLink></NavLi>
                    <NavLi><NavLink to="/education/education.html">Education</NavLink></NavLi>
                    <NavLi><NavLink to="/skills/skills.html">Skills</NavLink></NavLi>
                    <NavLi><NavLink to="/projects/projects.html">Projects</NavLink></NavLi>
                    <NavLi><NavLink to="/contact/contact.html">Contact</NavLink></NavLi>
                </NavUl>
            </NavBar>
    );
}
