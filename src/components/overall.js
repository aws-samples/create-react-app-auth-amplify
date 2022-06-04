import React from 'react'

class Overall extends React.Component {

    state = {
        overall:[]
    }

    render() {
        return (
            <div>
            <center><h1>Overall Standings</h1></center>
            {
                this.state.overall.map((team) => (
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
        fetch('https://jyrbmltxta.execute-api.us-west-2.amazonaws.com/prod/standings?tournament=Overall')
        .then(res => res.json())
        .then((data) => {
          this.setState({ overall: data.Items })
        })
        .catch(console.log)
    }
    
}

export default Overall