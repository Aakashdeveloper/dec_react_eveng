import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RegisterComponent from './register';
import LoginComponent from './login';
import UserApi from './userapi';
import Profile from './profile'

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}/>
                <Route path="/login" component={LoginComponent}/>
                <Route path="/list" component={UserApi}/>
                <Route path="/profile" component={Profile}/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;