import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  res.send('Hello World!!')
})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log('Server running...')
})