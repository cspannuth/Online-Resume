import styled from "styled-components";

const NavBar = styled.nav`
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    padding: 1rem;
    text-align: center;
    background-color: rgba(248, 251, 255, 0.9);
    border: 1px solid var(--card-border);
    border-radius: 8px;
    width: min(20%, 250px);
    position: sticky;
    top: 1rem;
    box-shadow: 0 0.5rem 1.2rem rgba(48, 73, 131, 0.14);
    
    @media screen and (max-width: 750px) {
        background-color: rgba(215, 229, 244, 0.96);
        border-left: 0;
        border-right: 0;
        border-radius: 0;
        box-shadow: 0 0.25rem 0.8rem rgba(48, 73, 131, 0.16);
        margin: 0;
        position: sticky;
        top: 0;
        z-index: 10;
        width: 100%;
        padding: 0.75rem 0;
        overflow-x: visible;
    }
    
`;

const NavUl = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    
    @media screen and (max-width: 750px) {
        margin: 0;
        padding: 0 1rem;
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        flex-wrap: wrap;
    }
    
`;

const NavLi = styled.li`
    @media screen and (max-width: 750px) {
        margin: 0;
        flex: 1 1 8.5rem;
    }
`;

const NavLink = styled.a`
    text-decoration: none;
    border: 1px solid var(--accent);
    border-radius: 6px;
    padding: 0.75rem 0.8rem;
    background-color: var(--accent);
    color: #f8fbff;
    font: 600 clamp(0.9rem, 1.2vw, 1rem) Inter, "Segoe UI", Arial, sans-serif;
    display: block;
    margin-bottom: 0.75rem;
    transition: background-color 160ms ease, transform 160ms ease;

    &:hover {
        background-color: var(--accent-dark);
        transform: translateY(-1px);
    }
    
    @media screen and (max-width: 750px) {
        padding: 0.65rem 0.9rem;
        margin-bottom: 0;
        white-space: nowrap;
        text-align: center;
        
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
