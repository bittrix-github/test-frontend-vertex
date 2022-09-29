import styled from "styled-components";


export const SearchContainerStyle = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    
    transform: translate(calc(50vw - 50%), calc(50vh - 50%));

    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 90%;
    max-width: 50rem;
    height: 4rem;

    transition: all 1.7s ease-in-out;

    &.clicked {

        transform: translate(calc(50vw - 50%), calc(8.5vh - 50%));

    }

`;


export const SearchInputStyle = styled.input`

    width: 80%;
    width: 50rem;
    height: 4rem;

    font-size: 1.6rem;
    color: #EEEEEE;

    background-color: #121212;
    border: 1px solid #313131;
    border-radius: 4px 0 0 4px;

    text-indent: 1rem;


    &:focus {

        outline: none;
        border: 1px solid #0288D0;

    }

`;


export const SearchButtonStyle = styled.button`

    width: 9rem;
    height: 4rem;

    font-size: 1.6rem;
    color: #BBBBBB;

    background-color: #313131;

    border: none;
    border-radius: 0 4px 4px 0;

    cursor: pointer;

`;