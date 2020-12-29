import React,{Component} from 'react';
import './search.css';

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    constructor(props){
        super(props)

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.city_name}
                    </option>
                )
            })
        }
    }

    handleChangeCity = (event) => {
        console.log(event.target.value)
        const cityid = event.target.value;
        fetch(`${hurl}${cityid}`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        }) 
    }

    render(){
        return(
            <div className="imageContainer">
                <div id="logo">
                    <b>D!</b>
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleChangeCity}>
                        <option>----SELECT CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option>----SELECT HOTEL----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())//return promise
        .then((data) => {this.setState({location:data})})
        .catch((err) => console.log(err))

    }
}

export default Search;