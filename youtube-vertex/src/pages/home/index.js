import React from 'react'
import Header from '../../components/header'
import Main from '../../components/main'
import Footer from '../../components/footer'
import { Container } from './styles'

const Home = () => {
    return(
        <>
            <Container>
                <Header />
                <Main />
                <Footer />
            </Container>
        </>
    )
}

export default Home