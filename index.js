import app from './src/app'

const PORT = 3002
app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`)
})