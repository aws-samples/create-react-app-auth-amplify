import React, {Component} from 'react';
import Day from "../../../components/Day/Day";
import './Eevents.css';
import {Link} from "react-router-dom";
import EventsApi from "../../../api/EventsApi";
import * as actionCreators from "../../../store/actions/actions";
import {connect} from "react-redux";
import {getDatesInfo} from "../../../store/selectors/dates-selector";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {getSortedEvents} from "../../../store/selectors/events-selector";

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
        const dates = this.props.dateInfo.datesRange.map(day => {
            return <Day key={day.key} caption={day.caption} items={this.props.eventsByDate[day.key] || []}/>
        });

        return (
            <div>
                <div className={"date-info"}>
                    <div>Current date: <DatePicker selected={this.props.dateInfo.currentDate} onChange={date => {this.props.onSetDate(date)}} /></div>
                    <h3>Week {this.props.dateInfo.week} ({this.props.dateInfo.startDate} - {this.props.dateInfo.endDate})</h3>
                </div>
                <section className="events">
                    <button onClick={()=>{this.props.onSetDate(this.props.dateInfo.previousDate)}}>&lt;</button>
                    { dates }
                    <button onClick={()=>{this.props.onSetDate(this.props.dateInfo.nextDate)}}>&gt;</button>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        eventsByDate: getSortedEvents(state.eventsData.events),
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