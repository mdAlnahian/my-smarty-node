const express = require('express');
const cors = require('cors');
const { send } = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello you from smarty pant!!')
});

const users = [
  { id: 1, name: "sana", email: "sana@gmail.com", number: "01717888888" },
  { id: 2, name: "mana", email: "mana@gmail.com", number: "01717888888" },
  { id: 3, name: "gana", email: "gana@gmail.com", number: "01717888888" },
  { id: 4, name: "dana", email: "dana@gmail.com", number: "01717888888" },
  { id: 5, name: "jana", email: "jana@gmail.com", number: "01717888888" },
  { id: 6, name: "fana", email: "fana@gmail.com", number: "01717888888" },
  { id: 7, name: "lana", email: "lana@gmail.com", number: "01717888888" }
];


app.get('/users', (req,res) =>{
    //filter by search query perameter
    // console.log('query', req.query);
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }else{
        res.send(users);
    }
})

app.get('/user/:id', (req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user =users.find(u => u.id == id);
    res.send(user);
})

app.post('/user',(req,res) => {
    console.log('request',req.body);
    const user =req.body;
    user.id =users.length +1;
    users.push(user)
    res.send()
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','oranges']);
})

app.get('/fruits/mango/fazle',(req,res)=>{
    res.send('sour sour mango sour')
})


app.listen(port,()=>{
    console.log('Listening to Port',port);
})