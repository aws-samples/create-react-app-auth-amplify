import React from 'react'

import {Accordion, Table, Spinner} from 'react-bootstrap';

class Overall extends React.Component {

    state = {
        overall : undefined,
        results : undefined
    }

    render() {

        if ((this.state.overall === undefined) | (this.state.results === undefined)) {
            return (
                <Spinner animation="border" />
            );
        }

        return (
            <div>
            <center><h1>Overall Standings</h1></center>
            <Accordion flush> 
            {
                this.state.overall.map((x) => ( 
                    <Accordion.Item eventKey={x.team} key={x.team}>
                    <Accordion.Header id={x.team}>
                        <center>
                            {x.team} ({formatscore(x.score[0] + x.score[1])})
                        </center>
                    </Accordion.Header>
                    <TeamLayout team={x.team} results={this.state.results.get(x.team)} tiebreaker={x.tiebreaker}/>
                    </Accordion.Item>
                ))
            }    
            </Accordion>
            </div>
        )
    }

    componentDidMount() {

        var overall;
        var results;

        fetch('https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/standings?tournament=Overall')
        .then(res => res.json())
        .then((data) => {
            overall = data.Items;
            overall.sort(function(a, b){
                return a.order - b.order;
            });
            this.setState({ overall : overall });
        })
        .catch(console.log)

        fetch('https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/standings?tournament=Active')
        .then(res => res.json())
        .then((data) => {
            results = new Map();  
            data.Items.forEach(function(x) { results.set(x.team, [] ) });
            data.Items.forEach(function(x) {
                var team = x.team;
                var scores = results.get(team);
                scores.push(x)
            });
            this.setState({ results : results });
            
        })
        .catch(console.log)

        
    }

}

function TeamLayout(props) {

    const tiebreaker = [ 'Last', 'Better Score', 'Third Place', 'Fourth Place', 'Fifth Place', 'Sixth Place' ];

    return (
        <Accordion.Body>
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    <th>Tournament</th> 
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
            {
                props.results.map((x) => (
                        <tr key={x.tournament}>
                            <td>{x.tournament}</td>
                            <td>{formatscore(x.score[0] + x.score[1])}</td>
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

export default Overall