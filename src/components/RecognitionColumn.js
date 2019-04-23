import React from 'react';
import api from '../api/api';
import RecognitionList from './RecognitionList';

class RecognitionColumn extends React.Component {
    state = { fields: [] };

    fields = []


    componentDidUpdate(prevPros) {
        console.log("download RecognitionColumn");
        console.log(prevPros)
        console.log(this.props)
        if (prevPros.documentId !== this.props.documentId) {
            this.downloadFields();
        }
     }

    async downloadFields() {
        console.log("Getting fields");
        console.log(this.props.documentId);
        if (this.props.documentId ) {
            this.downloaded = true;
            const response = await api.get('/page/' + this.props.documentId + '/field/', { // ToDo: fix page
            });
            //console.log(response.data);
            this.setState({ fields: response.data });
            //this.fields = response.data;
        }
    };

    render () {
//        this.downloadFields();
        return (
                <RecognitionList fields={this.state.fields}/>
        );
    };
}
 
export default RecognitionColumn;