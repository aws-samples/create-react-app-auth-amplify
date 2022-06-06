import React from 'react'

import { Card, Row, Button, Container, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";

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
        console.log(this.state.tournaments);
        return (
            <div>
            <center>   
            <Container>
                <Row>  
                {
                    this.state.tournaments.map((tournament) => (
                        <TournamentCard key={tournament.tournament} tournament={tournament}/>
                    ))
                }                     
                </Row>
            </Container>
            </center>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/tournaments?active=true')
        .then(res => res.json())
        .then((data) => {
            const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
            var tournaments = data.Items;
            tournaments = tournaments.sort(function(a,b) {
                const d1 = a.dates.slice(0,3).toLowerCase();
                const d2 = b.dates.slice(0,3).toLowerCase();
                return months.indexOf(d1) - months.indexOf(d2);
            });       
            this.setState({ tournaments: tournaments })
        })
        .catch(console.log)
    }

}

function TournamentCard(props) {
    var tournament = props.tournament;
 //       console.log(tournament);
    return (
        <div>
        <Card style={{ width: '24rem' }}>
        <Card.Body>
            <Card.Title>{tournament.tournament}</Card.Title>
            <Card.Text>{tournament.location}</Card.Text>
            <Card.Text>{tournament.dates}</Card.Text>
            <Link to={`/standings/${tournament.tournament}`}>
                <Button 
                    variant="primary" 
                    disabled={tournament.active===0}
                >
                    Standings
                </Button>
                </Link>
        </Card.Body>
        </Card>
        </div>
    )
}

export default Tournaments