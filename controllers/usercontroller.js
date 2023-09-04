const db = require('../models/index');
const User = db.User;

exports.index = async (req, res) => {
    try{
        const user = await User.findAll();
        return res.status(200).json({
            message : "Utilisateur recupere",
            data: user
        })
    }catch(error){
        return res.status(500).json({message : error.message});
    } 
}

exports.store = async (req, res) => {
    try{
        const {name, firstname, email, password, age} = req.body;
        const user = await User.create({
           name,firstname,password,email,age
        });
        return res.status(200).json({
            message: "Utilisateur crée avec succés",
            data : user
        })
    }catch(error){
        return res.status(500).json({message : error.message});
    } 
}

exports.read = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByPk(id);
        return res.status(200).json({
            message : "Utilisateur recuperé avec succés",
            data : user
        })
    }catch(error){
        return res.status(500).json({message : error.message});
    } 
}

exports.update = async (req, res) => {
    try{
        const {id} = req.params;
        const {name, firstname, email, password, age} = req.body;
        const user = await User.update({name,firstname,email,password,age},{
            where:{id: id}
        })
        return res.status(200).json({
            message : "Utilisateur modifié avec succcès",
            data : user
        })

    }catch(error){
        return res.status(500).json({message : error.message});
    } 
}

exports.delete = async (req, res) => {
    try{
     const {id} = req.params; 
     await User.destroy({where: {id: id}});
     return res.status(200).json({
        message : "Utilisateur supprimé avec succès"
     })
    }catch(error){
        return res.status(500).json({message : error.message});
    } 
}
