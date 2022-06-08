import React from 'react'

import { Accordion, Spinner } from 'react-bootstrap';
import Standings from './standings';

class Tournaments extends React.Component {
    
    state = {
        tournaments: undefined
    }

    render() {  
        if (this.state.tournaments === undefined) {
            return (
                <Spinner animation="border" />
            );
        }

        return (
            <Accordion flush> 
            {
                this.state.tournaments.map((tournament) => (
                    <TournamentCard key={tournament.tournament} tournament={tournament}/>
                ))
            }                     
            </Accordion>
        )
    }

    componentDidMount() {
        fetch('https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/tournaments?active=true')
        .then(res => res.json())
        .then((data) => {
            //const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
            var tournaments = data.Items;
            // tournaments = tournaments.sort(function(a,b) {
            //     const d1 = a.dates.slice(0,3).toLowerCase();
            //     const d2 = b.dates.slice(0,3).toLowerCase();
            //     return months.indexOf(d1) - months.indexOf(d2);
            // });  
            tournaments = tournaments.sort((a,b) => a.order - b.order);
            this.setState({ tournaments: tournaments })
        })
        .catch(console.log)
    }

}

function TournamentCard(props) {
    var tournament = props.tournament;
    return (
        <Accordion.Item eventKey={tournament.tournament} key={tournament.tournament}>
        <Accordion.Header id={tournament.tournament}>
            <center>
            <div>{tournament.tournament}</div>
            <div>{tournament.location}</div>
            <div>{tournament.dates}</div>
            </center>
        </Accordion.Header>
        <Accordion.Body>
            <Standings tournament={tournament.tournament}/>
        </Accordion.Body>
        </Accordion.Item>
    )
}

export default Tournaments