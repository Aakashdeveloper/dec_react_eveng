import React from 'react';
import './quickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listTrip = ({tripdata}) => {
        if(tripdata){
            return tripdata.map((item) => {
                return(
                    <Link to={`/list/${item.trip}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start Your {item.name} with us
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div>
            <div className="quickSearchContainer">
                <p className="quickSearchHeding">
                    Quick Search
                </p>
                <p className="quickSearchSubHeding">
                    Discover Trip By Type
                </p>
                <br/>
                {listTrip(props)}
            </div>
        </div>
    )
}

export default QuickDisplay;
