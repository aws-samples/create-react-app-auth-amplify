import React, { Component } from 'react';

import './UserEvent.css';
import EventsApi from "../../../api/EventsApi";
import * as actionCreators from "../../../store/actions/actions";
import {connect} from "react-redux";
import {S3Album} from "aws-amplify-react";

class UserEvent extends Component {

    componentDidMount () {
        if ( this.props.match.params.userId && this.props.match.params.eventId ) {
            EventsApi.getUserEvent(this.props.match.params.userId, this.props.match.params.eventId).then(response => {
                this.props.onGetEvent(response.data.event);
            } ).catch(error => {
                //TODO catch
            });
        }
    }

    getAlbumPath = () => {
        return this.props.currentEvent.userId + '/' + this.props.currentEvent.date + '/' + this.props.currentEvent.id;
    }

    render () {
        let eevent = <p style={{ textAlign: 'center' }}>Loading...</p>;
        if ( this.props.currentEvent ) {
            eevent = (
                <div className="EventWrapper">
                    <div className="FullEvent">
                        <span className="event-date">{this.props.currentEvent.date}</span>
                        <h1 className="event-title">{this.props.currentEvent.title}</h1>
                        <p className="event-description">{this.props.currentEvent.description}</p>
                        <S3Album path={this.getAlbumPath()} />
                    </div>
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
        onDeleteEvent: (eventId) => dispatch(actionCreators.deleteEvent(eventId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEvent);
