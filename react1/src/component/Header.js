import React,{Component,Fragment} from 'react';
import './Header.css';

class Header extends Component{
    render(){
    
        return(
            <Fragment>
                <header>
                    <div className="logo">Developer Funnel</div>
                    <center>
                        <input/>
                        <div style={{color:'white'}}>User Text Here</div>
                    </center>
                    <hr/>
                </header>
            </Fragment>
        )
    }
}

export default Header;