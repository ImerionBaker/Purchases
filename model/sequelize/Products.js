const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Products = sequelize.define('Products',{
    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    productName: {
        type: Sequelize.STRING,
        allowNull:false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: true
    },
    productCode:{
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: true
    }
});

module.exports = Products;