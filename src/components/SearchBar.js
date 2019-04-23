import React from 'react';

class SearchBar extends React.Component {

    state = { searchTerm: ''}
    onInputChange(event) {
        //console.log(event.target.value);
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    }

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})}/>
                    </div>
                </form>
            </div> 
        );
    };
}

export default SearchBar;