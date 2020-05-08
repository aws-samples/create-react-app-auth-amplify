import React, {Component} from 'react';
import Eevent from "../../../components/Event/Eevent";
import './Eevents.css';
import {Link} from "react-router-dom";
import EventsApi from "../../../api/EventsApi";
import * as actionCreators from "../../../store/actions/actions";
import {connect} from "react-redux";

class EverydayEvents extends Component
{
    componentDidMount () {
        EventsApi.getEvents().then(response => {
            this.props.onGetEvents(response.data.events);
        } ).catch(error => {
            //TODO catch
        });
    }

    render()
    {
        const events  = this.props.events.map(eevent => {
            return (
            <Link to={'/my-impressions/' + eevent.id} key={eevent.id}>
                <Eevent data={eevent} />
            </Link>
            )
        });

        return (
            <section className="events">
                { events }
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.events
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetEvents: (events) => dispatch(actionCreators.getEvents(events))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EverydayEvents);