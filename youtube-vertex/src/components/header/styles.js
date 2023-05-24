import styled from "styled-components"

export const HeaderContainer = styled.div`
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #202020;
    color: #888888;
    
    @media (min-width: 1025px) {
        height: 7vh;
    }
`

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    
    & img {
        width: 3.5rem;
    }
`