//var React = require('root');
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer'

const App = () => { 
    return(
        <div>
            <Header/>
            <h1>My React Application</h1>
            <h2>Developer Funnel</h2>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));