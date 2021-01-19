const Sauce = require('../models/Sauce');
const fs = require('fs'); //UTILISATION DE FS POUR SUPPRESSION DE FICHIERS

//CREATION DE LA SAUCE
exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    const sauce = new Sauce({ 
      ...sauceObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    sauce.save()
      .then(() => res.status(201).json ({ message: 'Sauce enregistrée !'}))
      .catch(error => res.status(400).json({ error }));
  };

//MODIFICATION DE LA SAUCE
exports.modifySauce = (req, res, next) => {
    const sauceObject = req.file ?
    {
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
  Sauce.updateOne({ _id: req.params.id }, { ...sauceObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Sauce modifiée !'}))
    .catch(error => res.status(400).json({ error }));
};

//SUPPRESSION DE LA SAUCE
exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Sauce supprimée !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};

//TROUVER TOUTES LES SAUCES
exports.getAllSauce = (req, res, next) => {
    Sauce.find()
      .then(sauces => res.status(200).json(sauces))
      .catch(error => res.status(400).json({ error }));
};

//TROUVER UNE SAUCE
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
      .then(sauce => res.status(200).json(sauce))
      .catch(error => res.status(404).json({ error }));
};

// AIMER OU NE PAS AIMER
exports.likeOrDislikeSauce = (req, res, next) => {
  const sauceObject = req.body
  const userId = sauceObject.userId
  const like = sauceObject.like

  Sauce.findOne({ _id: req.params.id }) 
    .then ((sauce) => {
      if(like == 1) {
        sauce.usersLiked.push(userId)
        sauce.likes++
      }
      else if(like == -1) {
        sauce.usersDisliked.push(userId)
        sauce.dislikes++
      }
      else if(like == 0 && sauce.usersLiked.includes(userId)){
        sauce.likes--
        let position = sauce.usersLiked.indexOf(userId)
        sauce.usersLiked.splice(position,1)
      }
      else if(like == 0 && sauce.usersDisliked.includes(userId)){
        sauce.dislikes--
        let position = sauce.usersDisliked.indexOf(userId)
        sauce.usersDisliked.splice(position,1)
      }
      Sauce.updateOne({ _id: req.params.id }, { usersLiked: sauce.usersLiked, usersDisliked: sauce.usersDisliked, likes: sauce.likes, dislikes: sauce.dislikes, _id: req.params.id})
      .then (() => res.status(200).json({ message: 'Avis pris en compte !'}))
      .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
}
