const express = require('express')
const path = require('path')
const pages = require('./pages.js')

// Iniciando o Express
const server = express()
server

	// Utilizando os arquivos estáticos
	.use(express.static('public'))

	// Configurando a template engine
	.set('views', path.join(__dirname, "views"))
	.set('view engine', 'hbs')

	// Criação das rotas
	.get('/', pages.index)
	.get('/orphanage', pages.orphanage)
	.get('/orphanages', pages.orphanages)
	.get('/create-orphanage', pages.createOrphanage)

// Iniciando o servidor
server.listen(5500)