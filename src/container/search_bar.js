import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.OnInputChange = this.OnInputChange.bind(this);
    }

    OnInputChange(event){
        this.setState({term: event.target.value});
    }

    render(){
        return(
            <form className="input-group">
                <input 
                    placeholder="도시를 입력하세요" 
                    className="form-control" 
                    value={this.state.term}
                    onChange={this.OnInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
}
