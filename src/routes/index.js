import { Router } from 'express'
const router = Router()
const fs = require("fs")
const path = __dirname

const removeExtension = (fileName) => fileName.split(".").shift()

// use automatico de las rutas
fs.readdirSync(path).forEach(file => {
  const name = removeExtension(file)
  if (name != "index") {
    router.use(`/${name}`, require(`./${name}.route.js`))
  }
})

export default router