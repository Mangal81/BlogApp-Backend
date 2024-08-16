const Post = require('../models/post');

const postController = async (request, response) =>{
	try {
		const {title, body} = request.body;
		const post =await new Post({
			title, body
		}).save();

		response.json({
			success : true,
			data:post,
			message:"Post Created "
		})
		
	} 
	catch (error) {
		console.log(error);
		response.status(500).json({
			success:false,
			message:"Internal server error",
			error:error
		})
	}
}

module.exports = postController;