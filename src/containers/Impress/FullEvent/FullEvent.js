import React, { Component } from 'react';

import './FullEvent.css';
import EventsApi from "../../../api/EventsApi";
import {Link} from "react-router-dom";
import * as actionCreators from "../../../store/actions/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router";

class FullEvent extends Component {

    state = {
        deleted: false
    }

    componentDidMount () {
        if ( this.props.match.params.eventId ) {
            EventsApi.getEvent(this.props.match.params.eventId).then(response => {
                this.props.onGetEvent(response.data.event);
            } ).catch(error => {
                //TODO catch
            });
        }
    }

    deleteDataHandler = () => {
        EventsApi.deleteEvent(this.props.currentEvent.id).then(response => {
            console.log(response);
            this.setState({deleted: true});
        }).catch(error => {
            //TODO catch
        })
    }

    render () {
        let eevent = <p style={{ textAlign: 'center' }}>Loading...</p>;
        if(this.state.deleted) {
            eevent = <Redirect to="/"></Redirect>;
        } else if ( this.props.currentEvent ) {
            eevent = (
                <div className="EventWrapper">
                    <div className="FullEvent">
                        <span className="event-date">{this.props.currentEvent.date}</span>
                        <h1 className="event-title">{this.props.currentEvent.title}</h1>
                        <p className="event-description">{this.props.currentEvent.description}</p>
                    </div>
                    <div className="buttons">
                        <Link className="btn success" to={'/update/' + this.props.currentEvent.id}>
                            UPDATE
                        </Link>
                        <div className="Edit">
                            <button onClick={this.deleteDataHandler} className="btn delete">DELETE</button>
                        </div>
                    </div>
                </div>
            );
        }
        return eevent;
    }
}

const mapStateToProps = state => {
    return {
        currentEvent: state.currentEvent
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetEvent: (currentEvent) => dispatch(actionCreators.getEvent(currentEvent)),
        onDeleteEvent: (eventId) => dispatch(actionCreators.deleteEvent(eventId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FullEvent);
