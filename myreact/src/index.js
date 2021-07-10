import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    render() {
        return (
            <div>
                <span className="text">Hello {new Date().toLocaleTimeString()}</span>
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'));
