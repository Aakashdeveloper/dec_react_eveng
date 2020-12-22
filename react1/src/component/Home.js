import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay'

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    //var a  = [64,6,71,9,11,43,56,32,55]
    //a.filter((data) => { return data>50})

    filterNews=(userInput)=>{
        const Output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })

        this.setState({filtered:Output})
    }

    render(){
        //console.log(this.state.news)
        return(
            <React.Fragment>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2021" month="Jan"/>
            </React.Fragment>
        )
    }
}


export default Home;