import React from 'react'

import {Table} from 'react-bootstrap';

class Players extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.tournament = props.tournament;
    //     console.log(this.tournament);
    // }

    state = {
        players:[]
    }
    
    render() {
        return (
            <div>
            <center><h1>Players</h1></center>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Tournament</th> 
                        <th>Score</th> 
                        <th>Position</th>
                    </tr>
                </thead>
                {
                    this.state.players.map((x) => (
                        <tbody>
                            <tr>
                                <td>{x.player}</td>
                                <td>{x.tournament}</td>
                                <td>{x.total}</td>
                                <td>{x.position}</td>
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
        var url = 'https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/leaders'
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            let leaders = data.Items;
            leaders.sort(function(a, b){
                if  ( a.player > b.player)  
                    return 1;
                else if  ( a.player < b.player)  
                    return -1;
                return a.tournament - b.tournament;
            
            });
            this.setState({ players: leaders })
        })
        .catch(console.log)
    }

}

export default Players