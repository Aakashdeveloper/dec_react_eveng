import React from 'react';

function DisplayCity(props){
    const renderList = ({cityData}) => {
        if(cityData){
            return cityData.map((item) => {
                return(
                    <div>
                        <h3>{item.city_name}</h3>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>City List</h2>
                {renderList(props)}
            </center>
        </div>
    )
}

export default DisplayCity