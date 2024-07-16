const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const todoList = [{
    id:1,
    text:"todo1",
    done: false,
}];

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api/todo',(req,res)=>{
    res.json(todoList);
})

app.post('/api/todo',(req,res)=>{
    const {text, done} = req.body; //body에 text와 done을 담아보냄
    todoList.post({
        id:id++,
        text,
        done,
    })
}

)
app.listen(3000,()=>{
    console.log("server start!");
})