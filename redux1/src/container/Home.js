import React,{Component} from 'react';
import {connect} from 'react-redux';
import {moviesList} from '../actions/actionfile';
import DisplayMovies from '../component/displayMovies'

class Home extends Component{
    componentDidMount(){
        this.props.dispatch(moviesList())
    }

    render(){
        return(
            <div>
                <h1>Redux</h1>
                <DisplayMovies datalist={this.props.mydata}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.films
    }
}

export default connect(mapStateToProps)(Home)
