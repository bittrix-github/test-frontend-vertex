import React, { useState } from 'react';



import SearchItems from './search';

import Results from './resuts';



import { MainStyles } from './styles';



const Main = () => {


    const [inputValue, setInputValue] = useState('');



    function inputHandler(event){

        setInputValue(event)

    }



    return(

        <>

            <MainStyles>

                <SearchItems
                
                    inputValueHandler = {inputHandler}
                
                />

                <Results 
                
                    inputValueAdd = {inputValue}

                />
            
            </MainStyles>

        </>

    );

};



export default Main;