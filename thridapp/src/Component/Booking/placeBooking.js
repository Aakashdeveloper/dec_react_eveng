import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const BookingUrl = "http://localhost:8900/booking/"

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*1000),
            hotel_name:this.props.match.params.hotel_name,
            name:sessionStorage.getItem('username')?sessionStorage.getItem('username'):'',
            phone:'',
            count:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit=() => {
        console.log(this.state)
        fetch(BookingUrl,
            {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/viewBooking'))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Place Booking
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Order Id</label>
                            <input type="text" name="id" value={this.state.id} readOnly
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Hotel Name</label>
                            <input type="text" name="hotel_name" value={this.state.hotel_name} readOnly
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.name}
                            className="form-control"
                            onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" name="phone" value={this.state.phone}
                            className="form-control"
                            onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Number of Person</label>
                            <select name="count" value={this.state.count}
                            className="form-control"
                            onChange={this.handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <button className="btn btn-danger"
                        onClick={this.handleSubmit}>
                            Place Booking
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default PlaceOrder;