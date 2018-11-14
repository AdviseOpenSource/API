import express from 'express';

import cors from 'cors';

import routes from './routes';

const

	app = express(),

	port = 7000;

// Make the application CORS enabled for all origins.
app.use(cors());

// Parses incoming requests with JSON payloads.
app.use(express.json());

// Routes.
app.use(routes);

// Run the server.
app.listen(port, () => console.log(`Listening on port ${port}.`));
