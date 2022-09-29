import React, { useState } from 'react';



import SearchItems from './search';



import { MainStyles } from './styles';



const Main = () => {


    const [inputValue, setInputValue] = useState('');



    function inputHandler(event){

        setInputValue(event)

        console.log(inputValue)

    }



    return(

        <>

            <MainStyles>

                <SearchItems
                
                    inputValueHandler = {inputHandler}
                
                />
            
            </MainStyles>

        </>

    );

};



export default Main;