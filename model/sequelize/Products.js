const Sequelize = require("sequelize");
const sequelize = require("../../config/sequelize/sequelize");

const Products = sequelize.define("Products", {
  _id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  productName: {
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
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  productCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Pole jest wymagane",
      },
      len: {
        args: [4, 9],
        msg: "Pole powinno zawirać od 4 do 9 znaków",
      },
      isNumeric: {
        msg: "Pole powinno zawierać liczbę",
      },
    },
  },
});

module.exports = Products;
