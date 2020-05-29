import React, { Component } from 'react'
import ReactPlayer from 'react-player'
class Player extends Component {
    render() {
        return (
            <div>
                <ReactPlayer 
                controls
                url = 'https://www.youtube.com/watch?v=LoLqSbV1ELU'
                />
            </div>
        )
    }
}

export default Player
