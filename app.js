const express = require('express')
const router = express.Router()
const app = express()

app.use(router)

router.get('/home', (req, res)=>{
    res.send("Prueba ok en vista home")
})

app.listen(4000, ()=> console.log('Server runing'))