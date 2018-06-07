import React from 'react';
import './less/app';
import Main from './component/Main'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Main/>
        );
    }
}

export default App;