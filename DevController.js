const axios = require('axios')
const Dev = require('../models/Dev');

module.export ={
   async store(req, res){
        const {username} = req.body;

        const userExists = await findOne({ user: username });

        if(userExists){
            return res.json(userExists);
        }
        
        const response = await axios.get(`https://github.com/${username}`)
        
       const { name, bio, avatar_url: avatar  }= response.data;
       
        const dev = await Dev.create({ 
            name,
            user: username,
            bio,
            avatar
        });


        return res.json(response.data);
    }
};