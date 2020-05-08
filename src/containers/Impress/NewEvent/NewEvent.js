import React, { Component } from 'react';
import './NewEvent.css';
import Input from "../../../components/Input/Input";
import eventForm from "../../../forms/event-form";
import EventsApi from "../../../api/EventsApi";
import * as actionCreators from "../../../store/actions/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class NewEvent extends Component {
    state = {
        form: eventForm,
    }

    inputChangedHandler = (event) => {
        const updatedForm = {
            ...this.state.form
        };
        const updatedFormElement = {
            ...updatedForm[event.target.name]
        };
        updatedFormElement.touched = true;
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedForm[event.target.name] = updatedFormElement;
        this.setState({form: updatedForm});
    }

    checkValidity = (value, rules) => {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        return isValid;
    }

    addEventHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }
        EventsApi.addEvent(formData).then(response => {
            this.setState({form: null});
            this.props.onAddEvent(formData);
        }).catch(error => {
            //TODO catch
        })
    }

    state = {
        form: eventForm
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }

        if(this.state.form)
        return (
            <div className="NewEvent">
                <form onSubmit={this.addEventHandler}>
                    <h1>Add an Impression</h1>
                    <div className="UpdateEvent">
                        {formElementsArray.map(formElement => (
                            <Input
                                changed={this.inputChangedHandler}
                                key={formElement.id}
                                invalid={!formElement.config.valid}
                                touched={formElement.config.touched}
                                label={formElement.config.label}
                                elementType={formElement.config.elementType}
                                elementConfig={{name: formElement.id, ...formElement.config.elementConfig}}
                                value={formElement.config.value} />
                        ))}
                    </div>
                    <button className="btn">ADD</button>
                </form>
            </div>
        );
        return <Redirect to="/"></Redirect>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddEvent: (newEvent) => dispatch(actionCreators.addEvent(newEvent))
    }
};

export default connect(null, mapDispatchToProps)(NewEvent);
