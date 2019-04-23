import React from 'react';
import api from '../api/api';
import SearchBar from './SearchBar'
import DocumentList from './DocumentList';

class SearchColumn extends React.Component {
    state = { documents: [] };

    onSearchSubmit = async searchTerm => {
        //console.log("Submitting");

        const response = await api.get('/document/', {
          params: { query: searchTerm }
        });
        this.setState({ documents: response.data });
        //console.log(this.state.documents);
    };

    render () {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <DocumentList onItemClick={this.props.onItemClick} documents={this.state.documents} />
            </div>
        );
    };
}

export default SearchColumn;