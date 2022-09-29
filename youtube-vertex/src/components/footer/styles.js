import styled from "styled-components";



export const FooterContainer = styled.div`

    position: fixed;

    bottom: 0;

    z-index: 1;

    width: 100vw;
    height: 5vh;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #202020;

    color: #888888;

`;


export const FooterLogo = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 35%;

    & img {

        width: 10rem;

    }

`;


export const FooterCredits = styled.div`

    display: flex;
    justify-content: end;
    align-items: center;
    
    width: 65%;

    padding-right: 8%;
    
    font-size: 1.4rem;
    color: #888888;

    & a {

        text-decoration: none;
        color: #EEEEEE;

    }

`;