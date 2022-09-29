import React from 'react';


import { SearchButtonStyle } from './styles';



const SearchButton = (props) => {

    return(

        <SearchButtonStyle type = 'submit' onClick = {() => props.buttonClickHandler()} >Buscar</SearchButtonStyle>
    
    )

};



export default SearchButton;