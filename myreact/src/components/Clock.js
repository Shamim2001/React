import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
        console.log(locale);
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;

        let button;
        if (locale === 'bn-BD') {
            button = <Button change={this.handleClick} locale="en-US" />;
        } else {
            button = <Button change={this.handleClick} locale="bn-BD" />;
        }
        return (
            <div>
                <h1 className="text">{date.toLocaleTimeString(locale)}</h1>
                {button}
            </div>
        );
    }
}
export default Clock;
