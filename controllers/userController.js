const {user} = require('../db/models/user.js');

exports.createUser = async(req,res)=>{
	let User = await new user(req.body);
 	User.save((err, UserStored) =>{
    	if(err){
      		res.status(500).send(err);
    	}
    	res.status(200).json({message: 'usuario creado', UserStored});
  	});
}