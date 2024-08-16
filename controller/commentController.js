const Post = require('../models/post');
const Comment = require('../models/comment');

const commentController = async (request, response) =>{
	try {
		const {post, user, body} = request.body;

		// creating comment object
		const comment = new Comment({
			post, user, body
		})
		const savedComment =await comment.save(); // save the new comment to the database

		const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments:savedComment._id}},{new:true}).populate("comments").exec();
		//findByIdAndUpdate(post, {$push:{comment:savedComment._id}},{new:true})
		// id is post, $post is an update function, new true means return the updated object
		//populate will give you actual document not id
		//exec means execute
		//////console.log(updatedPost);
		response.json({
			post:updatedPost
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

module.exports = commentController;