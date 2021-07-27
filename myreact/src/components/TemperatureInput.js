import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fehrenheit',
};

export default function TenperatureInput(temperature, scale, onTemperaturChange) {
    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}: </legend>
            <input type="text" value={temperature} onChange={onTemperaturChange} />
        </fieldset>
    );
}
