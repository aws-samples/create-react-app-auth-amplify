import React from 'react'


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
            {
                this.state.standings.map((team) => (
                    <div class="card" key={team.team}>
                        <div class="card-body">
                        <h5 class="card-title">{team.team}</h5>
                        <p class="card-text">{team.score}</p>
                        </div>
                    </div>
                    )
                )
            }
            </div>
        ) 
    }

    componentDidMount() {
        var url = 'https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/standings?tournament='+this.tournament;
        fetch(url)
        .then(res => res.json())
        .then((data) => {
          this.setState({ standings: data.Items })
        })
        .catch(console.log)
    }

}

export default Standings