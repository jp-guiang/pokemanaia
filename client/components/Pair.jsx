import React, { useState } from 'react'
import io from 'socket.io-client'
import Chat from './Chat'

const socket = io.connect('http://localhost:3001')
function Pair() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  const [showChat, setShowChat] = useState(false)

  function joinRoom() {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room)
      setShowChat(true)
    }
  }

  return (
    <div>
      <h1 className="bg-amber-400 text-8xl font-bold pb-8">BEE:</h1>
      <div className="App bg-amber-100 flex flex-col justify-center items-center rounded">
        {!showChat ? (
          <>
            <h3 className="bg-amber-400 text-3xl font-bold">Join a chat</h3>
            <input
              className="pl-2"
              type="text"
              name="name"
              placeholder="Enter your name..."
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={(e) => {
                e.key === 'Enter' && setUsername(e.target.value)
              }}
            />
            <input
              className="pl-2"
              type="text"
              name="room"
              placeholder="Room ID.."
              onChange={(e) => setRoom(e.target.value)}
              onKeyPress={(e) => {
                e.key === 'Enter' && joinRoom()
              }}
            />
            <button onClick={joinRoom}>Join a room</button>
          </>
        ) : (
          <Chat socket={socket} username={username} room={room} />
        )}
      </div>
    </div>
  )
}

export default Pair
