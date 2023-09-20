const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const socketIoClient = require('socket.io-client')
const cors = require('cors')
const openaiUnconfigured = require('openai')


const app = express()
const server = http.createServer(app)
const io = new socketIo.Server(server, {
  cors: {
    origin: '*',
  },
})

const openai = new openaiUnconfigured({
  apiKey: 'REPLACE_ME',
})

const corsOptions = {
  origin: '*',
}

app.use(cors(corsOptions))
app.use(express.static('public'))

const chatServerURL = 'https://calm-sands-32655-345e9bba6897.herokuapp.com/'

io.on('connection', (socket) => {
  console.log('Client connected')

  // Establish a connection to the external chat server
  const chatSocket = socketIoClient.connect(chatServerURL)

  // Forward messages from the client to the chat server
  socket.on('new message', async (message) => {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: message.text }],
      model: "gpt-3.5-turbo",
    });
    chatSocket.emit('new message', {
      text: response.choices[0].message.content,
      role: 'assistant',
    })
    // chatSocket.emit('new message', response.choices[0].message.content)
  })

  // Listen for messages from the chat server and forward them to the client
  chatSocket.on('broadcast message', (message) => {
    socket.emit('broadcast message', message)
  })

  // Fetch and forward chat history from the chat server to the client
  chatSocket.on('chat history', (chatHistory) => {
    socket.emit('chat history', chatHistory)
  })

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

server.listen(5001, () => {
  console.log('Server is running on port 5001')
})
