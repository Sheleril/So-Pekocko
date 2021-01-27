const passwordSchema = require ('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.writeHead(400, 'La longueur minimum de votre mot de passe doit être de 8 caractères, il doit contenir minuscule et majuscule, doit contenir au moins 2 chiffres, sans espace', {
        'content-type': 'application/json'
    });
    res.end('Format du mot de passe incorrect');
    } else {
        next();
    }
};