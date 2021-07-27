import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { convert, toCelsius, toFahrenheit } from './lib/converter';
import TemperatureInput from './TemperatureInput';

export default class Calclator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fehrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    ontemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fehrenheit}
                    ontemperatureChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />{' '}
            </div>
        );
    }
}
