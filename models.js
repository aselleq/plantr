const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhose:5432/plantr');
module.exports = db;

const Gardener = db.define('garden', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Plot = db.define('plat', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN
})

const Vegetable = db.define('vegetable', {
    name: Sequelize.STRING,
    color: Sequelize.INTEGER,
    'planted_on': Sequelize.DATE
})

Vegetable.belongsToMany(Plot, {through: 'argriculture'})
Plot.belongsToMany(Vegetable, {through: 'argriculture'})

Gardener.belongsTo(Vegetable, {as: 'fave_Vegetable'})