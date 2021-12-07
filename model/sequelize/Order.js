const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Orders = sequelize.define("Orders", {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  orderDate: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      notEmpty: {
          msg: "Pole jest wymagane"
      },
 }
  },
  customerFirstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
      len: {
        args: [2, 60],
        msg: "Pole powinno zawirać od 2 do 60 znaków",
      },
    },

  },
  customerLastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
      len: {
        args: [2, 60],
        msg: "Pole powinno zawirać od 2 do 60 znaków",
      },
    },
  },
  deliveryAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
      len: {
        args: [10, 200],
        msg: "Pole powinno zawirać od 10 do 200 znaków",
      },
    },
  },
});

module.exports = Orders;
