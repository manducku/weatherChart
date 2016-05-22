import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map( cityData => cityData.main.temp-273);
        const pressures = cityData.list.map( cityData => cityData.main.pressure);
        const humidities= cityData.list.map( cityData => cityData.main.humidity);

        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="blue" units="C" />
                </td>
                <td>
                    <Chart data={pressures} color="red" units="Pha" />
                </td>
                <td>
                    <Chart data={humidities} color="orange" units="%" />
                </td>


            </tr>
        );
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temparature (C)</th>
                        <th>Pressure (hpa)</th>
                        <th>Huminity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>     
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);
