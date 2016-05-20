import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetch_weather} from '../actions/index';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }
        
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetch_weather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <form onSubmit ={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="도시를 입력하세요" 
                    className="form-control" 
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetch_weather}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
