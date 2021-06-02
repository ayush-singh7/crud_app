const axios = require('axios')
exports.homeRoutes = (req,res)=>{
    axios.get('http://localhost:800/api/users')
    .then(function(response){
        console.log(response)
        
    })

    res.render('index',{users:"new daaata/"});    
}

exports.add_user = (req,res)=>{
    res.render('add_user')
}


exports.update_user = (req,res)=>{
    res.render('update_user')
}


