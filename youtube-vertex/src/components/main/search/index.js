import React, { useState } from 'react';


import SearchInput from './SearchInput';

import SearchButton from './SearchButton';



import { SearchContainerStyle } from './styles';









const SearchItems = (props) => {


    const [translate, setTranslate] = useState(false);




    let buttonGetInputValue = ''


    function translateSearchInput(event) {

        let targetValue = event.target.value

        if(event.keyCode === 13 && targetValue) {

            setTranslate(true)

            return(props.inputValueHandler(targetValue))
            
        }
    
    }


    function buttonHelper (event) {

        let targetValue = event.target.value

        buttonGetInputValue = targetValue

    }


    function translateSearchButton() {

        if(buttonGetInputValue) {            

            setTranslate(true)

            return(props.inputValueHandler(buttonGetInputValue))

        }
        
    }


    return(

        <SearchContainerStyle className = {translate && 'clicked'}>

            <SearchInput 
            
                enterKeyHandler = {translateSearchInput}
                searchButtonHelper = {buttonHelper}

            />

            <SearchButton

                buttonClickHandler = {translateSearchButton}

            />

        </SearchContainerStyle>
    
    )

};



export default SearchItems;