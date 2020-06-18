import React, { Component } from 'react';

import './FullEvent.css';
import EventsApi from "../../../api/EventsApi";
import {Link} from "react-router-dom";
import * as actionCreators from "../../../store/actions/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {S3Album} from "aws-amplify-react";
import {Storage} from "aws-amplify";
import FullEventTheme from "./FullEventTheme";

class UserEvent extends Component {

    constructor(props) {
        super(props);
        this.album = React.createRef();
    }

    state = {
        deleted: false,
        hasSelectedImages: false
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
        EventsApi.deleteEvent(this.props.currentEvent.id).then(
            () => {
                return Promise.all(this.album.current.state.items.map(item => {
                    return Storage.remove(item.key, {  })
                        .then(() => item.key)
                        .catch(error => error);
                }));
            }
        ).then(response => {
            this.setState({deleted: true});
        }).catch(error => {
            //TODO catch
        })
    }

    getAlbumPath = () => {
        return this.props.currentEvent.userId + '/' + this.props.currentEvent.date + '/' + this.props.currentEvent.id;
    }

    onSelectHandler = () => {
        const hasSelectedItems = (() => {
            for(let i=0; i<this.album.current.state.items.length; i++) {
                if (this.album.current.state.items[i].selected) {
                    return true;
                }
            }
            return false;
        })();
        this.setState({hasSelectedImages: hasSelectedItems});
    }

    cancelHandler = () => {
        this.props.history.goBack();
    }

    deleteImagesHandler = () => {
        Promise.all(this.album.current.state.items.map(item => {
            if(item.selected) {
                return Storage.remove(item.key, {  })
                    .then(() => item.key)
                    .catch(error => error);
            }
            return Promise.resolve();
        }))
        .then(deletedItems => {
            const filteredItems = this.album.current.state.items.filter(item => {
                return !deletedItems.includes(item.key);
            });
            this.album.current.setState({
                items: filteredItems,
                ts: new Date().getTime()
            });
        })
    }

    render () {
        let eevent = <p style={{ textAlign: 'center' }}>Loading...</p>;
        if(this.state.deleted) {
            eevent = <Redirect to="/"></Redirect>;
        } else if ( this.props.currentEvent ) {
            eevent = (
                <div className="EventWrapper">
                    <div className="UserEvent">
                        <span className="event-date">{this.props.currentEvent.date}</span>
                        <h1 className="event-title">{this.props.currentEvent.title}</h1>
                        <p className="event-description">{this.props.currentEvent.description}</p>
                        <S3Album ref={this.album} path={this.getAlbumPath()} picker select theme={FullEventTheme}  onSelect={this.onSelectHandler}/>
                    </div>
                    <div className="buttons">
                        <Link className="btn success" to={'/my-events/update/' + this.props.currentEvent.id}>
                            UPDATE
                        </Link>
                        <div className="Edit">
                            <button onClick={this.deleteDataHandler} className="btn delete">DELETE</button>
                        </div>
                        <div className="Edit">
                            <button onClick={this.deleteImagesHandler} className={`btn ${this.state.hasSelectedImages ? "success" : "delete"}`}>DELETE SELECTED</button>
                        </div>
                        <div className="Edit">
                            <button onClick={this.cancelHandler} className={"btn delete"}>CANCEL</button>
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
