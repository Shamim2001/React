import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fehrenheit',
};

export default class Calclator extends React.Component {
    state = {
        temperature: '',
    };

    onTemperaturChange = (e) => {
        this.setState({
            temperature: e.target.value,
        });
    };

    render() {
        const { termperature } = this.state;
        const { scale } = this.props;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]} </legend>
                <input type="text" value={termperature} onChange={this.onTemperaturChange} />
            </fieldset>
        );
    }
}
