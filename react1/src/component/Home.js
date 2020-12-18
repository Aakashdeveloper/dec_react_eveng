import React from 'react';
import Header from './Header';
import Footer from './Footer'

const Home = () => { 
    return(
        <React.Fragment>
            <Header/>
            <h1>My React Application</h1>
            <h2>Developer Funnel</h2>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;