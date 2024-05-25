export async function json(request,response){
	const buffer = [];

	for await(const chunks of request) {
		buffer.push(chunks);
	}

	try{
		request.body = JSON.parse(Buffer.concat(buffer).toString());
	} catch(e) {
		request.body = null
		console.log(e)
	}

	response.setHeader('Content-type', 'Application/json');
}
