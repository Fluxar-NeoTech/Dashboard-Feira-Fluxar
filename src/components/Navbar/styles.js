import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #46005A;
    color: white;
    padding: 0.5rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-sizing: border-box;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;

    img {
        height: 40px;
        margin-right: 0.5rem;
    }
`;


export const Left = styled.div`
    display: flex;
    align-items: center;
`;


export const HiddenFileInput = styled.input`
    display: none;
`;


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1999;
    display: ${props => props.isOpen ? 'block' : 'none'};
`;