// GET, POST, DELETE, PUT

require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const postModel = require('./models/post.model')	
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
	try {
		const posts = await postModel.find()
		res.json(posts)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
})

app.post('/', async (req, res) => {
try {
		const { body, title } = req.body
 const newPost = await postModel.create({body, title})
	res.status(201).json(newPost)
} catch (error) {
	res.status(500).json({ error: error.message })
}
})
//heayy ada

app.delete('/:id', (req, res) => {
	const { id } = req.params
	res.send(id)
})

app.put('/:id', (req, res) => {
	const { id } = req.params
	const body = req.body

	res.json({ id, body })
})

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