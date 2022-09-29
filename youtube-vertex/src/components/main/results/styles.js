import styled from "styled-components";


export const ResultsContainerStyle = styled.div`

    position: absolute;

    width: 100%;
    height: 83vh;

    padding: 0 0.5rem 0.5rem 0.5rem;
    margin-top: 7vh;

    overflow-y: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


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

`;


export const ResultsItemStyle = styled.div`

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 200rem;

    margin-top: calc(2rem + 2vw);

    color: #FFFFFF;

    &:first-child{

        margin-top: calc(-2rem + 4vw);

    }

    &:last-child{

        margin-bottom: 4vw;

    }

`;


export const ResultsVideoThumb = styled.div`

    display: flex;
    justify-content: center;   

    width: 100%;
    max-height: 21.4rem;

    & img {

        width: 100%;
        max-width: 40rem;

    }

`;


export const ResultsVideoInfo = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 100%;
    max-width: 40rem;
    height: 8rem;

    margin-top: 0.8rem;

`;


export const ResultsVideoTitle = styled.div`

    font-size: 1.6rem;
    font-weight: bold;

`;


export const ResultsVideoDescription = styled.div`

    font-size: 1.1rem;
    color: #AAAAAA;

`;


export const ResultsItemMask = styled.div`

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    cursor: pointer;
`;