const

	express = require('express'),

	app = express(),

	port = 7000,

	cors = require('cors');

// Make public folder an static directory.
app.use(express.static('public'));

// Make the application CORS enabled for all origins.
app.use(cors());

// Hello world!
app.get('/', (request, response) => response.json({ messages: [ { body: 'Hello world!' } ] }));

// Run the server on port ${port}.
app.listen(port, () => console.log(`Listening on port ${port}.`));
