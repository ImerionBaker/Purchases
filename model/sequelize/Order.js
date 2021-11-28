const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Orders = sequelize.define('Orders',{
    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    orderDate:{
        type: Sequelize.DATE,
        allowNull: false
    },
    customerFirstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    customerLastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    deliveryAddress: {
        type: Sequelize.STRING,
        allowNull:false
    }
});

module.exports = Orders;