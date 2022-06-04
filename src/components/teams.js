import React from 'react'

import {Accordion, Table} from 'react-bootstrap';

class Teams extends React.Component {

    state = {
        teamlist : undefined,
        teams: undefined
    };

    render() {
        if (this.state.teams === undefined) {
            //console.log('render-loading');
            return (
                <div>Loading...</div>
            );
        }
        //console.log('render-starting',this.state.teamlist.size);
        return (
            <div>
            {/* <li>Teams</li> */}
            <Accordion defaultActiveKey={['0']} alwaysOpen>                      
            {
                this.state.teamlist.map((team) => (
                    <TeamLayout key={team} team={team} players={this.state.teams.get(team)} />
                ))
            }
            </Accordion>
            </div>
        );
    }

    componentDidMount() {
        if (this.state.teams === undefined) {
            console.log('componentDidMount');
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
                this.setState({ teams : teams , teamlist : Array.from(teamlist) } );
            })
            .catch(console.log)

        }


    }

}

function TeamLayout(x) {

    //console.log('TeamLayout');

    //var teams = x.state.teams;

    //var players = teams.get(x.team);

    //console.log('teamlayout-size',x.team,players,teams.size);

    const team = x.players.map((player) => (
        <PlayerLayout key={player} player={player} />
    ));

    return (
        <div>
        <Accordion.Item eventKey={x.team}>
        <Accordion.Header>{x.team}</Accordion.Header>
        <Accordion.Body>
            <Table striped bordered hover>
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
        </div>
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