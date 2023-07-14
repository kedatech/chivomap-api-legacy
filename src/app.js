import express from 'express'

const app = express()
app.use(app.json())

export default app