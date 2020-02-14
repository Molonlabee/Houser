//FUNCTIONALITY ENDPOINTS

//GET
getHouse:(req, res) => {
    const db =req.app.get('db')
    db.getHouses()
    .then(houses => res.status(200).send(houses))
    .catch(err => 
        res.status(500).send(err))
},
//POST
addHouse:(req, res) => {
    const db = req.app.get('db')
    const {name, address, city, state, zip, img, mortgage, rent} = req.body
    db.addHouse(name, address, city, state, zip, img, mortgage, rent)
    .then(house => {
        res.status(200).send(house)
    }) 
    .catch(err => res.status(500).send(err))
},
//DELETE
deleteHouse:(req,res) => {
    const db = req.app.get('db')
    const {id} = req.params 
    db.deleteHouse(id)
    .then(() => {
        res.status(200)
    })
    .catch(err => res.status(500).send(err))
},

//MODULE.EXPORTS
module.exports = {
    getHouse,
    addHouse,
    deleteHouse,
}