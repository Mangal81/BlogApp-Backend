
const Post = require('../models/post')
const Like = require('../models/like')

const like = async (request, response) =>{
	try {
		const {post, user} = request.body;
		const like = await new Like({
			post, user
		}).save();

		const updatedPost = await Post.findByIdAndUpdate(post, {$push:{likes:like._id}},{new:true}).populate("likes").exec();

		response.json({
			success:true,
			post:updatedPost,
			message:"liked"
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


//for delete like
const unlike = async (request, response) =>{
	try {
		const {post, like} = request.body;
		const updatedLike = await Like.findOneAndDelete({post:post,_id: like})

		const updatedPost = await Post.findByIdAndUpdate(post, {$pull:{likes:updatedLike._id}},{new:true})
		.populate("likes").populate('comments').exec();

		response.json({
			success:true,
			post:updatedPost,
			message:"unliked"
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




const homePage = (request, response)=>{
	response.send("<h2>This is homepage</h2>")
}


module.exports = {homePage, like, unlike};


