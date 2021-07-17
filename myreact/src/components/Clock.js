import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Button from './Button';

class Clock extends React.Component {
    // eslint-disable-next-line react/no-unused-state
    state = { date: new Date(), locale: 'bn-Bd' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = () => {
        this.setState({
            locale: 'en-US',
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('Clock render');
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="text">{date.toLocaleTimeString(locale)}</h1>
                <Button change={this.handleClick}>click here</Button>
            </div>
        );
    }
}
export default Clock;
