const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    res.render('home', { date: new Date() })
})

app.listen(port, err => {
    if(err) console.log('Unable to start node server!')
    else console.log('Server running...')
})
