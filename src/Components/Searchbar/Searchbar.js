import React from 'react';

export class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let requestString = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + e.target.value;
        this.props.onChange(requestString);
    }

    render() {
        return (
            <input 
                placeholder="Type in a team name!"
                onChange={this.handleChange}
            >
            </input>
        )
    }
}