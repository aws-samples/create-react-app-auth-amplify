import React from 'react'

import {Spinner, Accordion, Table} from 'react-bootstrap';

class Standings extends React.Component {
    constructor(props) {
        super(props);
        this.tournament = props.tournament;
        //console.log(this.tournament);
    }

    state = {
        standings: undefined,
        results:undefined,
        teams:undefined,
        teamlist:undefined
    }
    
    render() {

        if ((this.state.standings === undefined) | (this.state.results === undefined) | (this.state.teams === undefined)) {
            return (
                <Spinner animation="border" />
            );
        }

        return (
            <div>
            {/* <center><h1>{this.tournament}</h1></center> */}
            <Accordion flush> 
            {
                this.state.standings.map((x) => ( 
                    <Accordion.Item eventKey={x.team} key={x.team}>
                    <Accordion.Header id={x.team}>
                    <center>
                        {x.team} ({formatscore(x.score[0] + x.score[1])})
                     </center>
                    </Accordion.Header>
                    <PlayerLayout team={x.team} results={this.state.results} players={this.state.teams.get(x.team)} tiebreaker={x.tiebreaker}/>
                    </Accordion.Item>
                ))
            }    
            </Accordion>
            </div>
        ) 
    }

    componentDidMount() {

        if (this.state.teams === undefined) {
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

        var url = 'https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/leaders?tournament='+this.tournament;
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState({ results : data.Items } );          
        })
        .catch(console.log);

        url = 'https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/standings?tournament='+this.tournament;
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            let standings = data.Items;
            standings.sort(function(a, b){
                return a.order - b.order;
            });
            this.setState({ standings: standings })
        })
        .catch(console.log);
    }

}

function PlayerLayout(props) {

    //var team = props.team;
    var results = [];
    props.results.forEach(function(x) { 
        if (props.players.includes(x.player)) {
            results.push(x)
        }
    })

    results = results.sort(function(a,b) {
        if (a.position==='DNS') {
            if (b.position!=='DNS') {
                return 1;
            }
            return a.total - b.total
        }
        if (b.position==='DNS') {
            return -1;
        }
        if (a.position==='WD') {
            if (b.position!=='WD') {
                return 1;
            }
            return a.total - b.total
        }
        if (b.position==='WD') {
            return -1;
        }
        if (a.position==='CUT') {
            if (b.position!=='CUT') {
                return 1;
            }
            return a.total - b.total
        }
        if (b.position==='CUT') {
            return -1;
        }
        return a.total - b.total
    });
    //console.log(team,results);

    const tiebreaker = [ 'Last', 'Better Score', 'Third Place', 'Fourth Place', 'Fifth Place', 'Sixth Place' ];

    return (
        <Accordion.Body>
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th>Player</th> 
                    <th>Score</th> 
                    <th>Position</th>
                    <th>Thru</th>
                </tr>
            </thead>
            <tbody>
            {
                results.map((x) => (
                        <tr key={x.player}
                            className={
                                ['CUT','WD','DNS'].includes(x.position) ? "table-danger" : "table-default" 
                            }>
                            <td>{x.player}</td>
                            <td>{formatscore(x.total)}</td>
                            <td>{x.position}</td>
                            <td>{x.thru}</td>
                        </tr>           
                    ) 
                )
            }
            </tbody>
        </Table>
        <div><font size="2">Position Tiebreaker : {tiebreaker[Math.abs(props.tiebreaker)]}</font></div>
        </Accordion.Body>
    );
}

function formatscore(x) {
    if (x === undefined) {
        return 'N/A'
    }
    if (x === 0) {
        return 'E'
    }
    return (x<0) ? x : '+' + x
}

export default Standings