import React, { useState, useEffect } from 'react'

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  const sendMessage = async (e) => {
    if (currentMessage !== '') {
      e.preventDefault()
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      }

      await socket.emit('send_message', messageData)
      setMessageList((list) => [...list, messageData])
      setCurrentMessage('')
    }
  }

  useEffect(() => {
    //this stops it from duplicating
    socket.off('receive_message')
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data])
    })
  }, [socket])

  return (
    <div className="rounded">
      <p className="text-xl bg-amber-200 rounded pl-2">
        Live Chat Room: Hey <span className="red">{username}</span> you are in
        room {room}
      </p>
      <div className="p-4 rounded">
        {messageList.map((messageContent, index) => {
          return (
            <div
              className={
                username === messageContent.author
                  ? 'text-xs bg-amber-100 flex flex-row justify-end'
                  : 'text-xs bg-amber-100 flex  flex-row-reverse justify-end'
              }
              key={index}
            >
              <p
                className={
                  username === messageContent.author
                    ? ' bg-green-400 rounded m-px p-1'
                    : ' bg-cyan-400 rounded m-px p-1'
                }
                key={index}
              >
                {messageContent.message}
              </p>

              <div className="flex flex-col justify-center items-center">
                <p
                  className={
                    username === messageContent.author
                      ? '   m-px p-1 pb-0'
                      : '  m-px p-1 pb-0'
                  }
                  key={index}
                  style={{ fontSize: '8px', color: 'grey' }}
                >
                  <p>
                    {messageContent.time + ' '} {' : ' + messageContent.author}
                  </p>
                </p>
              </div>
            </div>
          )
        })}
        {/* </div> */}
      </div>
      <div className="chat-footer"></div>
      <div className="flex ">
        <input
          className="pl-2 rounded  grow"
          type="text"
          placeholder="Hey..."
          value={currentMessage}
          onChange={(e) => {
            setCurrentMessage(e.target.value)
          }}
          onKeyPress={(e) => {
            e.key === 'Enter' && sendMessage(e)
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat
