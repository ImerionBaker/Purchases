const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const OrderDetails = sequelize.define('OrderDetails',{
    _id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true,
    },
    cost:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    discount:{
        type:Sequelize.DECIMAL(10,2),
        allowNull:true,
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    comments:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    orders_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    products_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = OrderDetails;