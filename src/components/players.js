import React from 'react'

import {Table, Accordion, Spinner} from 'react-bootstrap';

class Players extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.tournament = props.tournament;
    //     console.log(this.tournament);
    // }

    state = {
        playerlist : undefined,
        results : undefined
    }
    
    render() {
        if (this.state.results === undefined) {
            return (
                <Spinner animation="border" />
            );
        }
        return (
            <div>
            <center><h1>Players</h1></center>
            <Accordion flush>                      
            {
                this.state.playerlist.map((player) => (
                    <PlayerLayout key={player} player={player} results={this.state.results.get(player)} />
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

            // leaders.sort(function(a, b){
            //     if  ( a.player > b.player)  
            //         return 1;
            //     else if  ( a.player < b.player)  
            //         return -1;
            //     return a.tournament - b.tournament;
            
            // });
            
        })
        .catch(console.log)
    }

}

function PlayerLayout(x) {

    return (
        <Accordion.Item eventKey={x.player}>
        <Accordion.Header id={x.player}>{x.player}</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Tournament</th> 
                    <th>Score</th> 
                    <th>Position</th>
                </tr>
            </thead>
            {
                x.results.map((x) => (
                    <tbody>
                        <tr>
                            <td>{x.tournament}</td>
                            <td>{x.total}</td>
                            <td>{x.position}</td>
                        </tr>           
                    </tbody>
                    ) 
                )
            }
        </Table>
        </Accordion.Body>
        </Accordion.Item>
    );
}

export default Players