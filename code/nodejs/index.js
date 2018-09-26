const port = process.env.PORT || 3000
const upstream_service = process.env.UPSTREAM_URI || 'http://localhost:5000/'
const local_service = process.env.SERVICE_NAME || 'helloworld-node'

const express = require('express')
const app = express()
const request = require('request-promise-native')

app.get('/', async(req, res) => {
	const begin = Date.now()

	const headers = forwardTraceHeaders(req)

	let up
	try {
		up = await request({
			url: upstream_service,
			headers: headers
		})
	} catch (error) {
		//up = error
		res.status(500).end()
	}
	const timeSpent = (Date.now() - begin) / 1000 + "secs"

    res.end(`Time spent: ${timeSpent}\n${local_service} -> ${upstream_service}:\n${up}`)
})

function forwardTraceHeaders(req) {
	incoming_headers = [
		'x-request-id',
		'x-b3-traceid',
		'x-b3-spanid',
		'x-b3-parentspanid',
		'x-b3-sampled',
		'x-b3-flags',
		'x-ot-span-context',
		'x-dev-user',
		'fail',
		'end-user'
	]
	const headers = {}
	for (let h of incoming_headers) {
		if (req.header(h))
			headers[h] = req.header(h)
	}
	return headers
}

app.listen(port, () => {
	console.log(`${local_service} listening on port ${port}!`)
})