import React, {useState} from 'react';

import {Table, Card, Accordion, Spinner, ButtonGroup, Button} from 'react-bootstrap';

class Players extends React.Component {
    constructor(props) {
        super(props);
        this.state.showall = (props.showall === 'true');
        // console.log('showall',props.showall,this.showall,(this.showall) ? 'T' : 'F');
    }

    state = {
        playerlist : undefined,
        results : undefined,
        selectedplayerlist : undefined,
        selectedplayers : undefined
    }
    
    render() {

        if ((this.state.playerlist === undefined) | (this.state.selectedplayerlist === undefined)) {
            return (
                <Spinner animation="border" />
            );
        }

        //console.log('rendering', this.showall);

        var playerlist = (this.state.showall) ? this.state.playerlist : this.state.selectedplayerlist;
        //console.log(playerlist.length);

        return (
            <div>
            <center><h1>Players</h1></center>
            <SelectionLayout/>
            <h1> </h1>
            <Accordion flush>                     
            {
                playerlist.map((player) => (
                    <PlayerLayout key={player} 
                        player={player} 
                        results={this.state.results.get(player)}
                        selected={this.state.selectedplayers.get(player)}
                    />
                ))
            }
            </Accordion>
            </div>
        ) 
    }

    componentDidMount() {
        var url = 'https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/leaders'
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            var playerlist = new Set();
            var results = new Map();  
            data.Items.forEach(function(x) { playerlist.add(x.player) });
            data.Items.forEach(function(x) { results.set(x.player, [] ) });
            data.Items.forEach(function(x) {
                var player = x.player;
                var resultsforplayer = results.get(player);
                resultsforplayer.push(x)
            });
            playerlist = Array.from(playerlist).sort();
            this.setState({ results : results , playerlist : playerlist } );
            
        })
        .catch(console.log);

        fetch('https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/teams')
        .then(res => res.json())
        .then((data) => {
            var selectedplayers = new Map();  
            data.Items.forEach(function(x) { selectedplayers.set(x.player, [] ) });
            data.Items.forEach(function(x) {
                var player = x.player;
                var teams = selectedplayers.get(player);
                teams.push(x.team)
            });
            const selectedplayerlist = Array.from(selectedplayers.keys()).sort();
            this.setState({ selectedplayerlist : selectedplayerlist, selectedplayers : selectedplayers } );
        })
        .catch(console.log);

    }

}

function SelectionLayout() {
    const [showall, setShowAll] = useState(true);
    return (
        <ButtonGroup>
            <Button variant="secondary" href="/players/showall=true" active={showall}>All</Button>
            <Button variant="secondary" href="/players/showall=false">Selected</Button>
        </ButtonGroup>
    )
}

function PlayerLayout(x) {

    var results;
    if (x.results === undefined) {
        results = [];
    }
    else {
        results = x.results;
    }

    var selected;
    if (x.selected === undefined) {
        selected = ['Not Selected'];
    }
    else {
        selected = x.selected;
    }

    return (
        <Accordion.Item eventKey={x.player} >
        <Accordion.Header id={x.player}>
            <center>
            {x.player}
            </center>
        </Accordion.Header>
        <Accordion.Body>
        <Card>
            <Card.Title>Selected By</Card.Title>
            <Card.Body>{selected.sort().join(', ')}</Card.Body>
        </Card>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Tournament</th> 
                    <th>Score</th> 
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
            {
                results.map((x) => (
                        <tr key={x.tournament}>
                            <td>{x.tournament}</td>
                            <td>{formatscore(x.total)}</td>
                            <td>{x.position}</td>
                        </tr>           
                    ) 
                )
            }
            </tbody>
        </Table>
        </Accordion.Body>
        </Accordion.Item>
    );
}

function formatscore(x) {
    if (x === 0) {
        return 'E'
    }
    return (x<0) ? x : '+' + x
}

export default Players