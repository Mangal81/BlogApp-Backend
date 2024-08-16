const mongoose = require('mongoose');
require('dotenv').config();


const connect = () =>{
	try {
		mongoose.connect(process.env.DB_URL)
		.then(()=>{
			console.log("Database connected successfully");
		})
		.catch((error)=>{
			console.log(error)
		})
	} 
	catch (error) {
		console.log(error);
	}
}

module.exports = connect;
