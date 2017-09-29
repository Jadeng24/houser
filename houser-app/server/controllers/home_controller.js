module.exports = {
    getHomes: function(req, res, next) {
        const db = req.app.get('db');
        const homeId = req.params.homeId
        db.getHomes([homeId])
        .then(homes => {
            res.status(200).send(homes);
        })
        .catch(err => {
            res.status(500).send(err);
        })
    }
}


