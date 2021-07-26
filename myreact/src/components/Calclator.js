import React from 'react';
import TermperatureInput from './TermperatureInput';

export default class Calclator extends React.Component {
    render() {
        return (
            <div>
                <TermperatureInput scale="c" />
                <TermperatureInput scale="f" />
                {/* <BoilingVerdict celsius={parseFloat(termperature)} />{' '} */}
            </div>
        );
    }
}
