import React from 'react';

import './Input.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const input = ( props ) => {
    let inputElement = null;
    const inputClasses = ["InputElement"];

    if(props.invalid && props.touched) {
        inputClasses.push("Invalid");
    }

    switch(props.elementType) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={date => props.changed(date)}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        case ( 'datepicker' ):
            inputElement = (
                <DatePicker
                    dateFormat="yyyy-MM-dd"
                    onChange={date => props.changed(date)}
                    selected={props.value === '' ? new Date() : new Date(props.value)}
                />
            );
            break;
        case ( 'hidden' ):
            inputElement = (
                <input type={"hidden"}
                    value={props.value} />
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;