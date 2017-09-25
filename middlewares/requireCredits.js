module.exports = (req, res, next) => {
    if(!req.user.credits) {
        console.log('req.user.redits', req.user.redits)
        return res.status(403).send({error: 'Not enough cretis'});
    }

    next();
}