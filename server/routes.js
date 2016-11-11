'use strict'

const Marker = require('APP/db/models/marker')

const router = require('express').Router();

router.get('/markers', (req, res, next) => {
	Marker.findAll({})
	.then(markers=>{
		console.log('went to get markers but what are they?', markers)
		res.send(markers)
	})
	.catch(next)
})

router.post('/markers', (req, res, next) => {
	console.log('trying to post the new marker', req.body)
	Marker.create(req.body)
	.then(marker=>{
		res.send(marker)
	})
	.catch(next)
})

module.exports = router