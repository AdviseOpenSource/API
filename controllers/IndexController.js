module.exports = {
	async index(request, response) {

		response

			.status(200)

			.json({
				messages: [
					{
						body: 'Hello world!',
						success: true
					}
				]
			});

	}
};
