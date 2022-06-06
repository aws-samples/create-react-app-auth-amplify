import React from 'react'

import {Accordion, Table, Spinner} from 'react-bootstrap';

class Teams extends React.Component {

    state = {
        teamlist : undefined,
        teams: undefined
    };

    render() {
        if (this.state.teams === undefined) {
            //console.log('render-loading');
            return (
                <Spinner animation="border" />
            );
        }
        //console.log('render-starting',this.state.teamlist.size);
        return (
            <Accordion flush>                      
            {
                this.state.teamlist.map((team) => (
                    <TeamLayout key={team} team={team} players={this.state.teams.get(team)} />
                ))
            }
            </Accordion>
        );
    }

    componentDidMount() {
        if (this.state.teams === undefined) {
            //console.log('componentDidMount');
            fetch('https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/teams')
            .then(res => res.json())
            .then((data) => {
                var teamlist = new Set();
                var teams = new Map();  
                data.Items.forEach(function(x) { teamlist.add(x.team) });
                data.Items.forEach(function(x) { teams.set(x.team, [] ) });
                data.Items.forEach(function(x) {
                    var team = x.team;
                    var players = teams.get(team);
                    players.push(x.player)
                });
                //console.log(teamlist);
                teamlist = Array.from(teamlist).sort();
                this.setState({ teams : teams , teamlist : teamlist } );
            })
            .catch(console.log)
        }

    }

}

function TeamLayout(x) {

    const team = x.players.map((player) => (
        <PlayerLayout key={player} player={player} />
    ));

    return (
        <Accordion.Item eventKey={x.team}>
        <Accordion.Header id={team}>{x.team}</Accordion.Header>
        <Accordion.Body>
            <Table striped hover>
            <thead>
            <tr>
                <th>Player</th> 
            </tr>
            </thead>
            <tbody>
                {team}             
            </tbody>
        </Table>
        </Accordion.Body>
        </Accordion.Item>
    );
}

function PlayerLayout(x) {
    //console.log('player',x.player);
    return (
        <tr>
            <td>{x.player}</td>
        </tr>  
    );
}
    
export default Teams