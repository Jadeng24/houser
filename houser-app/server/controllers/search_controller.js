module.exports = {
    search: (req, res, next) => {
        const { category } = req.query;
        if ( !category ) {
            res.status(200).send();
        } else {
            const filteredHomes = homes.filter( homes => home.category === category );
            res.status(200).send( filteredHomes )
        }
    }
}