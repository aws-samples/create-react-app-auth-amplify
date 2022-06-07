import React from 'react'

import {Accordion, Table, Spinner} from 'react-bootstrap';

class Teams extends React.Component {

    state = {
        teamlist : undefined,
        teams: undefined,
        selectedplayerlist : undefined,
        selectedplayers : undefined
    };

    render() {

        if ((this.state.teams === undefined) | (this.state.selectedplayers === undefined)) {
            return (
                <Spinner animation="border" />
            );
        }

        return (
            <div>
            <center><h1>Teams</h1></center>
            <Accordion flush>                      
            {
                this.state.teamlist.map((team) => (
                    <TeamLayout key={team} 
                        team={team} 
                        players={this.state.teams.get(team)}
                        selected={this.state.selectedplayers}
                    />
                ))
            }
            </Accordion>
            </div>
        );
    }

    componentDidMount() {

        if (this.state.teams === undefined) {
            fetch('https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/teams')
            .then(res => res.json())
            .then((data) => {
                var teams = new Map();  
                data.Items.forEach(function(x) { teams.set(x.team, [] ) });
                data.Items.forEach(function(x) {
                    var team = x.team;
                    var players = teams.get(team);
                    players.push(x.player)
                });

                const teamlist = Array.from(teams.keys()).sort();

                //console.log('teamlist',teamlist);

                var selectedplayers = new Map();  
                data.Items.forEach(function(x) { selectedplayers.set(x.player, [] ) });
                data.Items.forEach(function(x) {
                    var player = x.player;
                    var teams = selectedplayers.get(player);
                    teams.push(x.team)
                });

                const selectedplayerlist = Array.from(selectedplayers.keys()).sort();
                
                //console.log('selectedplayers',selectedplayers);

                this.setState({ 
                    teams : teams , 
                    teamlist : teamlist,
                    selectedplayerlist : selectedplayerlist, 
                    selectedplayers : selectedplayers 
                });

            })
            .catch(console.log)
        }

    }

}

function TeamLayout(x) {

    const team = x.players.sort().map((player) => (
        <PlayerLayout key={player} 
            team={x.team}
            player={player} 
            selected={x.selected.get(player)}
        />
    ));

    return (
        <Accordion.Item eventKey={x.team}>
        <Accordion.Header id={team}>
            <center>
            {x.team}
            </center> 
        </Accordion.Header>
        <Accordion.Body>
            <Table striped hover>
            <thead>
            <tr>
                <th>Player</th> 
                <th>Selected By</th> 
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

    const selected = x.selected.filter(item => item !== x.team);

    return (
        <tr>
            <td>{x.player}</td>
            <td>{selected.sort().join(', ')}</td>
        </tr>  
    );
}
    
export default Teams