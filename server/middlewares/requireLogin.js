module.exports = (req, res, next) => {
    if(!req.user) {
        return res.status(401).send({ Error: 'You must log in!' }); 
    }
    next();
};