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
        allowNull: false,
        validate: {
            notEmpty: {
              msg: "Pole jest wymagane",
            },
            len: {
              args: [1, 9],
              msg: "Pole powinno zawirać od 1 do 9 znaków",
            },
            isNumeric: {
              msg: "Pole powinno zawierać liczbę",
            },
          },
    },
    discount:{
        type:Sequelize.DECIMAL(10,2),
        allowNull:true,
        validate: {
          isNumeric: {
            msg: "Pole powinno zawierać liczbę",
          },
          len: {
            args: [1, 2],
            msg: "Pole powinno zawirać od 1 do 2 znaków",
          },
        },
    },
    amount:{
        type:Sequelize.INTEGER,
        allowNull:false,
        validate: {
            notEmpty: {
              msg: "Pole jest wymagane",
            },
            len: {
              args: [1, 9],
              msg: "Pole powinno zawirać od 1 do 9 znaków",
            },
            isNumeric: {
              msg: "Pole powinno zawierać liczbę",
            },
          },
    },
    comments:{
        type:Sequelize.STRING,
        allowNull:true,
        validate: {
          len: {
            args: [1, 200],
            msg: "Pole powinno zawirać od 1 do 200 znaków",
          },
     }
    },
    orders_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
       }
    },
    products_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
       }
    }
});

module.exports = OrderDetails;