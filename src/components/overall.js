import React from 'react'

import {Table} from 'react-bootstrap';

class Overall extends React.Component {

    state = {
        overall:[]
    }

    render() {
        return (
            <div>
            <center><h1>Overall Standings</h1></center>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Team</th> 
                        <th>Score</th> 
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.overall.map((x) => (
                            <tr key={x.team}>
                                <td>{x.team}</td>
                                <td>{x.score}</td>
                            </tr>           
                    ))
                }
                </tbody>
            </Table>
            </div>
        )
    }

    componentDidMount() {
        fetch('https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/standings?tournament=Overall')
        .then(res => res.json())
        .then((data) => {
            let overall = data.Items;
            overall.sort(function(a, b){
                return a.score- b.score;
            });
          this.setState({ overall : overall })

        })
        .catch(console.log)
    }
    
}

export default Overall