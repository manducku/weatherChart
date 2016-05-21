import React, {Component} from 'react';
import {connect} from 'redux';


class WeatherList extends Component {
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>     
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
};

export default connect(mapStateToProps)(WeatherList);
