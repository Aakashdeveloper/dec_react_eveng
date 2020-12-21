import React,{Component,Fragment} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'Developer Funnel React',
            keyword:'User Text Here'
        }

    }
    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                    <hr/>
                </header>
            </Fragment>
        )
    }
}

export default Header;