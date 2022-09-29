import React from 'react';


import { SearchInputStyle } from './styles';



const SearchInput = (props) => {

    return(

        <SearchInputStyle

            type = 'text' placeholder = 'Pesquisar'
            onKeyDown = {(event) => props.enterKeyHandler(event)}
            onChange = {(event) => props.searchButtonHelper(event)}>


        </SearchInputStyle>
    
    )

};



export default SearchInput;