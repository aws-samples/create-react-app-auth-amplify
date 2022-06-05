import React from 'react'

import {Table} from 'react-bootstrap';

class Standings extends React.Component {
    constructor(props) {
        super(props);
        this.tournament = props.tournament;
        console.log(this.tournament);
    }

    state = {
        standings:[]
    }
    
    render() {
        return (
            <div>
            <center><h1>{this.tournament}</h1></center>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Team</th> 
                        <th>Score</th> 
                    </tr>
                </thead>
                {
                    this.state.standings.map((x) => (
                        <tbody>
                            <tr>
                                <td>{x.team}</td>
                            <   td>{x.score}</td>
                            </tr>           
                        </tbody>
                        ) 
                    )
                }
            </Table>
            </div>
        ) 
    }

    componentDidMount() {
        var url = 'https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/standings?tournament='+this.tournament;
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            let standings = data.Items;
            standings.sort(function(a, b){
                return a.score - b.score;
            });
            this.setState({ standings: standings })
        })
        .catch(console.log)
    }

}

export default Standings