import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom'

class Header extends Component {
    constructor(){
        super()

        this.state={
            username:''
        }
    }

    conditional_menu = () => {
        if(sessionStorage.getItem('username')===null || sessionStorage.getItem('username')===undefined){
            return(
                    <li><a href="https://github.com/login/oauth/authorize?client_id=841775ffdee13afd7f4f"><span className="glyphicon glyphicon-log-in"></span> Login With Git</a></li>
            )
        }else{
            return(
                    <li><a href=""><span className="glyphicon glyphicon-user"></span> Hi {sessionStorage.getItem('username')}</a></li>
            )
        }
    }
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Developer Funnel</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/viewBooking">Booking</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                       {this.conditional_menu()}
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }

    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            let requestedData={
                code:code
            }
            fetch('http://localhost:9800/oauth',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(requestedData)
            })
            .then((res) => res.json())
            .then((data) => {
               var result = data.login
               sessionStorage.setItem('username',result)
               this.setState({username:result})
            })
        }
    }
}

export default withRouter(Header);