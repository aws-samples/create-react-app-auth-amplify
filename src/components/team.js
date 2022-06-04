import React from 'react'

class Team extends React.Component {

    render() {
        return (
            <div>
            <center><h1>Team List</h1></center>
            {
                this.state.teams.map((team) => (
                    <div class="card" key={team.player}>
                        <div class="card-body">
                        <h5 class="card-title">{team.player}</h5>
                        </div>
                    </div>
                    )
                )

            }
            </div>
        )
    }

}
    
export default Team