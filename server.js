const express = require('express');
const blogRoutes = require('./routes/blogsRoutes');
const connect = require("./config/database");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1',blogRoutes);

app.listen(PORT,()=>{
	console.log(`App is running on ${PORT}`);
})

app.get("/",(request, response)=>{
	response.send("<h1>This is BLOG_APP Backend project</h1>")
})

connect();

