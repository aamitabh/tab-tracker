const express = require('express')
const bodyParser = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
// app.use(morgan('tiny'))
app.use(morgan(':method :url s::status b::res[content-length] t::response-time ms'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get('/status', (req, res) => {
  return res.send({message: 'hello world!!'})
})

// parameterized port and start listening
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))
