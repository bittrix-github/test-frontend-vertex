import React from 'react';


import SearchInput from './SearchInput';

import SearchButton from './SearchButton';



import { SearchContainerStyle } from './styles';









const SearchItems = () => {


    return(

        <SearchContainerStyle>

            <SearchInput />

            <SearchButton />

        </SearchContainerStyle>
    
    )

};



export default SearchItems;