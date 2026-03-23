// GET, POST, DELETE, PUT

require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const postModel = require('./models/post.model')	
const router = require('./routes/post.route')
const app = express()

const fileUpload = require('express-fileupload')
const requireTimer = require('./middlewares/request-time')
app.use(express.json())

// app.get('/', )


// route
app.use(requireTimer)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({}));
app.use(express.static('static'));

app.use("/api/post", router);


const PORT = process.env.PORT || 8080
const DB_URL = process.env.DB_URL

// the best mongoose framework for working with MongoDB in Node.js 

//how to connect to MongoDB using mongoose
const bootstrap = async () => {
	try {
		await mongoose
			.connect(process.env.DB_URL)
			.then(() => console.log('Connected DB'))

		app.listen(PORT, () =>
			console.log(`Listening on - http://localhost:${PORT}`)
		)
	} catch (error) {
		console.log(`Error connecting with DB: ${error}`)
	}
}
bootstrap()