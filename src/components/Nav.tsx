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
    position: sticky;
    top: 2vh;
    
    @media screen and (max-width: 750px) {
        background-color: transparent;
        margin: 0 auto;
        position: static;
        width: 100%;
        padding: 2vh 0;
        overflow-x: auto;
    }
    
`;

const NavUl = styled.ul`
    list-style: none;
    padding-left: 2vw;
    
    @media screen and (max-width: 750px) {
        margin: 0;
        padding: 0 2vw;
        display: flex;
        justify-content: center;
        gap: 2vw;
        flex-wrap: nowrap;
    }
    
`;

const NavLi = styled.li`
    @media screen and (max-width: 750px) {
        margin: 0;
        flex: 0 0 auto;
    }
`;

const NavLink = styled.a`
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
        padding: 1vh 1.5vw;
        white-space: nowrap;
        
    }

    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1.4vw);
    }
    
`;

export default function Nav() {
    return (
            <NavBar>
                <NavUl>
                    <NavLi><NavLink href="#home">Home</NavLink></NavLi>
                    <NavLi><NavLink href="#experience">Experience</NavLink></NavLi>
                    <NavLi><NavLink href="#education">Education</NavLink></NavLi>
                    <NavLi><NavLink href="#skills">Skills</NavLink></NavLi>
                    <NavLi><NavLink href="#projects">Projects</NavLink></NavLi>
                    <NavLi><NavLink href="#contact">Contact</NavLink></NavLi>
                </NavUl>
            </NavBar>
    );
}
