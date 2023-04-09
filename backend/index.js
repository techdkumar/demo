const express = require('express');
const cors = require('cors');
require('./db/config');
const user = require('./db/User')
const app = express();

app.use(express.json());
app.use(cors());

app.post('/register',async (req,resp)=>{
	//resp.send('api in progress');
	resp.send(req.body);
	let user = new User(req.body);
	let result = await user.save();
	resp.send(result);
	
});

app.listen(5000);


