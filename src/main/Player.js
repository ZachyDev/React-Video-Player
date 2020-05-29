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
                onReady = { () => console.log('onReady handler')}
                onStart = { () => console.log('onStart handler')}
                onPause = { () => console.log('onPause handler')}
                onEnded= { () => console.log('onEnded handler')}
                onError= { () => console.log('onError handler')}
                />
            </div>
        )
    }
}

export default Player
