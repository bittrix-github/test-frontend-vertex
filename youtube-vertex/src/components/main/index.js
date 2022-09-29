import React, { useState } from 'react';



import SearchItems from './search';

import Results from './results';

import Player from './player';



import { MainStyles } from './styles';



const Main = () => {


    const [inputValue, setInputValue] = useState('');

    const [playVideo, setPlayVideo] = useState('');



    function inputHandler(event){

        setInputValue(event)

    }


    function playVideoHandler(event){

        setPlayVideo(event)

    }



    return(

        <>

            <MainStyles>

                <SearchItems
                
                    inputValueHandler = {inputHandler}
                
                />

                <Results 
                
                    inputValueAdd = {inputValue}
                    playHandler = {playVideoHandler}
                
                    />
    
                <Player
                
                    playVideoId = {playVideo}
                
                />
            
            </MainStyles>

        </>

    );

};



export default Main;