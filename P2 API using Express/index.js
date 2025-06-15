const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()
const port = 3000


app.get('/users', (req, res)=>{
    const html = `
        <ul>
            ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
        </ul>
    `;
    res.send(html);
})

// REST API
app.get('/api/users', (req, res)=>{
    return res.json(users);
})

/*
app.get('/api/users/:id', (req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})


app.patch('/api/users/:id', (req, res)=>{
    return res.json({status: "pending"});
})

app.delete('/api/users/:id', (req, res)=>{
    return res.json({status: "pending"});
})

*/

app.post('/api/users', (req, res)=>{
    return res.json({status: "pending"});
})

app.route('/api/users/:id')
    .get((req, res)=>{
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res)=>{
        return res.json({status: "pending"});
    })
    .delete((req, res)=>{
        return res.json({status: "pending"});
    })



app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})