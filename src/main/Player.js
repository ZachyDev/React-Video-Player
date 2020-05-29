import React, { Component } from 'react'
import ReactPlayer from 'react-player'
class Player extends Component {
    render() {
        return (
            <div>
                <ReactPlayer 
                controls
                width = "480px"
                height = "240px"
                url = 'https://www.youtube.com/watch?v=LoLqSbV1ELU'
                />
            </div>
        )
    }
}

export default Player
