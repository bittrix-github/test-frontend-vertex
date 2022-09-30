import styled from "styled-components";


export const PlayerContainerStyle = styled.div`

    position: relative;
    top: 0;
    left: 0;
    z-index: 3;

    width: 100%;
    height: 90vh;

    padding: calc(5rem + 5vw) 0.5rem 0 0.5rem;

    background-color: #181818;

    color: #EEEEEE;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1025px) {

        padding-top: calc(5rem + 3vw);

        top: 2vh;

        height: 88vh;

    }

`;


export const PlayerVideoContainer = styled.div`

    width: 100%;
    max-width: 47rem;
    min-height: 35%;

    @media (min-width: 1025px) {

        width: 50%;
        max-width: 70rem;
        height: 50%;

    }

`;


export const PlayerVideoTitle = styled.div`

    width: 95%;
    max-width: 47rem;

    margin-top: calc(1rem + 3vw);

    font-size: 1.6rem;
    font-weight: bold;

    @media (min-width: 1025px) {

        width: 50%;
        max-width: 70rem;

        margin-top: 3rem;

        font-size: 1.8rem;

    }

`;


export const PlayerInfoContainer = styled.div`

    width: 100%;
    max-width: 47rem;

    margin-top: calc(1rem + 3vw);

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 1.4rem;

    @media (min-width: 1025px) {

        width: 50%;
        max-width: 70rem;

        margin-top: 3rem;

        font-size: 1.4rem;

    }

`;


export const PlayerVideoDescription = styled.div`

    width: 95%;
    max-width: 47rem;
    max-height: 25rem;

    overflow-y: auto;

    margin-top: calc(3rem + 3vw);

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    
    font-size: 1.2rem;


    &::-webkit-scrollbar {
        width: 0.8rem;
    }
      
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px #202020;
    }
      
    &::-webkit-scrollbar-thumb {
        background-color:  #313131;
        outline: 1px solid rgb(0, 0, 0, 0.3);
    }

    @media (min-width: 1025px) {

        width: 50%;
        max-width: 70rem;
        max-height: 15rem;

        margin-top: 3rem;

        font-size: 1.3rem;

    }

`;


export const BackButtonStyle = styled.div`

    position: absolute;

    top: 2rem;
    left: calc(1.5rem + 2vw);

    cursor: pointer;

`;