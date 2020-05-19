import React, {Component} from 'react';
import Eevent from "../../../components/Event/Eevent";
import './Eevents.css';
import {Link} from "react-router-dom";
import EventsApi from "../../../api/EventsApi";
import * as actionCreators from "../../../store/actions/actions";
import {connect} from "react-redux";
import {getDatesInfo} from "../../../store/selectors/dates-selector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EverydayEvents extends Component
{
    componentDidMount () {
        EventsApi.getEvents(this.props.dateInfo.startDate, this.props.dateInfo.endDate).then(response => {
            this.props.onGetEvents(response.data.events);
        } ).catch(error => {
            //TODO catch
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentDate !== prevProps.currentDate) {
            EventsApi.getEvents(this.props.dateInfo.startDate, this.props.dateInfo.endDate).then(response => {
                this.props.onGetEvents(response.data.events);
            } ).catch(error => {
                //TODO catch
            });
        }
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
            <div>
                <div>
                    Current date: <DatePicker selected={this.props.dateInfo.currentDate} dateFormat={'yyyy-MM-dd'} onChange={date => {this.props.onSetDate(date)}} />
                    <p>From {this.props.dateInfo.startDate} to {this.props.dateInfo.endDate}</p>
                    <button onClick={()=>{this.props.onSetDate(this.props.dateInfo.previousDate)}}>Back</button>
                    <button onClick={()=>{this.props.onSetDate(this.props.dateInfo.nextDate)}}>Next</button>
                </div>
                <section className="events">
                    { events }
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.eventsData.events,
        currentDate: state.datesData.currentDate,
        dateInfo: getDatesInfo(state.datesData.currentDate)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetEvents: (events) => dispatch(actionCreators.getEvents(events)),
        onSetDate: (currentDate) => dispatch(actionCreators.getDate(currentDate))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EverydayEvents);