import React from 'react'
import StrokesPage from './StrokesPage';
import SearchColumn from './SearchColumn'
import RecognitionColumn from './RecognitionColumn'

class App extends React.Component {
    state = {documentId: ""}

    onItemClick = event => {
        console.log("testing")
        console.log(event.target.getAttribute('value'))
        this.setState({documentId: event.target.getAttribute('value')});
        console.log(this.state)
    }

    render () {
        return (
            <div className="ui divided grid">
                <div className="three wide column">
                    <SearchColumn onItemClick={this.onItemClick} />
                </div>
                <div className="ten wide column">
                    <StrokesPage documentId={this.state.documentId}/>
                </div>
                <div className="one wide column">
                    <RecognitionColumn documentId={this.state.documentId}/>
                </div>
            </div>
        );
    }
}

export default App;