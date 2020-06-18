import React, { Component } from 'react';
import './UpdateEvent.css';
import Input from "../../../components/Input/Input";
import eventForm from "../../../forms/event-form";
import EventsApi from "../../../api/EventsApi";
import * as actionCreators from "../../../store/actions/actions";
import {connect} from "react-redux";
import moment from "moment";

class UpdateEvent extends Component {

    componentDidMount () {
        if ( this.props.match.params.eventId ) {
            EventsApi.getEvent(this.props.match.params.eventId).then(response => {
                this.setFormValues(response.data.event);
                this.props.onGetEvent(response.data.event);
            } ).catch(error => {
                //TODO catch
            });
        }
    }

    setFormValues = (currentEvent) => {
        const updatedForm = {
            ...this.state.form
        };
        for (let key in updatedForm) {
            updatedForm[key].value = currentEvent[key];
        }
        this.setState({form: updatedForm});
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

    dateChangeHandler = (currentDate) => {
        const theDate = moment(currentDate);
        const updatedForm = {
            ...this.state.form
        };
        const updatedFormElement = {
            ...updatedForm['date']
        };
        updatedFormElement.value = theDate.format('YYYY-MM-DD');
        updatedForm['date'] = updatedFormElement;
        this.setState({form: updatedForm});
    }

    checkValidity = (value, rules) => {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        return isValid;
    }

    updateDataHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }
        EventsApi.updateEvent(formData).then(response => {
            this.props.onUpdateEvent(formData);
            console.log(response);
        }).catch(error => {
            //TODO catch
        })
    }

    cancelHandler = () => {
        this.props.history.goBack();
    }

    state = {
        form: eventForm
    }

    render () {
        let eevent = <p style={{ textAlign: 'center' }}>Loading...</p>;
        if ( this.props.currentEvent ) {
            const formElementsArray = [];
            for (let key in this.state.form) {
                formElementsArray.push({
                    id: key,
                    config: this.state.form[key]
                });
            }
            eevent = (
                <div className="NewEvent">
                    <form onSubmit={this.updateDataHandler}>
                        <h1>Update Impression</h1>
                        <div className="UpdateEvent">
                            {formElementsArray.map(formElement => (
                                <Input
                                    changed={formElement.id === 'date' ? this.dateChangeHandler : this.inputChangedHandler}
                                    key={formElement.id}
                                    invalid={!formElement.config.valid}
                                    touched={formElement.config.touched}
                                    label={formElement.config.label}
                                    elementType={formElement.config.elementType}
                                    elementConfig={{name: formElement.id, ...formElement.config.elementConfig}}
                                    value={formElement.config.value} />
                            ))}
                        </div>
                        <button className="btn">UPDATE</button>
                        <button type={"button"} onClick={this.cancelHandler} className={"btn delete"}>CANCEL</button>
                    </form>
                </div>
            );
        }

        return eevent;
    }
}

const mapStateToProps = state => {
    return {
        currentEvent: state.eventsData.currentEvent
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetEvent: (currentEvent) => dispatch(actionCreators.getEvent(currentEvent)),
        onUpdateEvent: (currentEvent) => dispatch(actionCreators.updateEvent(currentEvent))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEvent);
