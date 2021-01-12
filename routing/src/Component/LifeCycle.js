//GET Initial State
//SET initial State
//Before get Created
//Render
//After get created

import React,{Component} from 'react';

class LifeCycle extends Component{
    //1 GET Initial State
    constructor(props){
        super(props)
        //2 Set Initial State
        this.state={
            title:'LifeCycle'
        }
        console.log(">>> inside constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log(">>> inside getDerivedStateFromProps",props)
        console.log(">>> inside getDerivedStateFromProps",state) 
    }

    //3 Before get Created
    UNSAFE_componentWillMount(){
        console.log(">>> inside componentWillMount")
    }

    componentWillUpdate(){
        console.log(">>> inside componentWillUpdate")
    }

    componentDidUpdate(){
         console.log(">>> inside componentDidUpdate")
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(">>> inside shouldComponentUpdate")
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //4 Render
    render(){
        console.log(">>> inside render")
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something Else'})}}>
                    Click Me
                </div>
            </div>
        )
    }

    //5 After get created

    componentDidMount(){
        console.log(">>> inside componentDidMount")
    }

    componentWillUnmount(){
        alert("Do you want to leave")
    }
}

export default LifeCycle;