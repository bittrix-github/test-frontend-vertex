import React from 'react';



import { HeaderContainer, HeaderLogo } from './styles';



import headerLogo from '../../assets/img/header-logo.png';



const Header = () => {

    return(

        <>
            <HeaderContainer className = 'header__container'>
                
                <HeaderLogo>
                    <img src = {headerLogo} alt = 'youtube logo'></img>
                </HeaderLogo>                

            </HeaderContainer>
        
        </>

    );

};



export default Header;