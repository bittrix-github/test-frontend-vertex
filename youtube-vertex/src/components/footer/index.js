import React from 'react';


import { FooterContainer, FooterLogo, FooterCredits } from './styles';


import footerLogo from '../../assets/img/footer-logo.png';



const Footer = () => {

    return(

        <>
            <FooterContainer>
                
                <FooterLogo>
                    <img src = {footerLogo} alt = 'vertex logo'></img>
                </FooterLogo>

                <FooterCredits>

                    <span>developed by <a href = 'https://bittrix-github.github.io/portfolio/' target = "_blank" rel = "noreferrer">bittrix</a></span>

                </FooterCredits>

            </FooterContainer>
        
        </>

    );

};



export default Footer;