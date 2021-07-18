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
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;

        return (
            <div>
                <h1 className="text">{date.toLocaleTimeString(locale)}</h1>
                {locale === 'bn-BD' ? (
                    <Button Change={this.handleClick} locale="en-US">
                        click here
                    </Button>
                ) : (
                    <Button Change={this.handleClick} locale="bn-BD">
                        click here
                    </Button>
                )}
            </div>
        );
    }
}
export default Clock;
