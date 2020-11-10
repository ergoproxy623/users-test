const express = require("express")
const cors = require('cors');
const app = express();
const importData = require("./users.json")
let port = process.env.PORT || 3000;
let options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}
app.use(cors())

app.get( "/", (req, res) => {
    res.send("Hello mazafacka 2")
} )

app.get( "/users", (req, res) => {
    const arr = JSON.parse( importData)
    const body = {
        count: arr.length,
        data:  JSON.stringify( arr)}
    res.status(200)
    res.send(JSON.stringify(body))

} )

app.listen(port , () => {
    console.log(`Example app is listening on http://localehost:${port}` )
})
