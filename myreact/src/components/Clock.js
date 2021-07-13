import React from 'react';

class Clock extends React.Component {
    render() {
        return (
            <h1 className="text">
                {new Date().toLocaleTimeString(this.props.locale)}
            </h1>
        );
    }
}
export default Clock;