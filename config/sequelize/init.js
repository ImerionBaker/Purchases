const sequelize = require("./sequelize");

const Order = require("../../model/sequelize/Order");
const OrderDetails = require("../../model/sequelize/OrderDetails");
const Products = require("../../model/sequelize/Products");

module.exports = () => {
  Products.hasMany(OrderDetails, {
    as: "orderdetails",
    foreignKey: { name: "products_id", allowNull: false },
    constraints: true,
    onDelete: "CASCADE",
  });
  OrderDetails.belongsTo(Products, {
    as: "products",
    foreignKey: { name: "products_id", allowNull: false },
  });
  Order.hasMany(OrderDetails, {
    as: "orderdetails",
    foreignKey: { name: "orders_id", allowNull: false },
    constraints: true,
    onDelete: "CASCADE",
  });
  OrderDetails.belongsTo(Order, {
    as: "order",
    foreignKey: { name: "orders_id", allowNull: false },
  });

  let allOrders, allProducts;
  return sequelize
    .sync({ force: true })
    .then(() => {
      return Products.findAll();
    })
    .then((prods) => {
      if (!prods || prods.length == 0) {
        return Products.bulkCreate([
          {
            productName: "Phone 13 Pro Max",
            description:
              "Smartfon APPLE iPhone 13 Pro Max 512GB 5G 6.7 120Hz Grafitowy MLL63PMA",
            productCode: "63878",
          },
          {
            productName: "Macbook Air M1",
            description:
              "Laptop APPLE Macbook Air 13.3 Retina M1 8GB SSD 256GB macOS Gwiezdna szarość",
            productCode: "56893",
          },
          {
            productName: "Pad Air",
            description:
              "Tablet APPLE iPad Air 10.9 4 gen. 256 GB LTE Wi-Fi Błękitny",
            productCode: "56383",
          },
        ]).then(() => {
          return Products.findAll();
        });
      } else {
        return prods;
      }
    })
    .then((prods) => {
      allProducts = prods;
      return Order.findAll();
    })
    .then((orders) => {
      if (!orders || orders.length == 0) {
        return Order.bulkCreate([
          {
            orderDate: "12.12.2000",
            customerFirstName: "Jan",
            customerLastName: "Kowalski",
            deliveryAddress: "Kazimierzowska 56, m.12",
          },
          {
            orderDate: "01.01.2002",
            customerFirstName: "Pawel",
            customerLastName: "Morowski",
            deliveryAddress: "Hoza 117, m.56",
          },
          {
            orderDate: "02.05.2004",
            customerFirstName: "Bartosz",
            customerLastName: "Kalinowski",
            deliveryAddress: "Czysta 4, m.78",
          },
        ]).then(() => {
          return Products.findAll();
        });
      } else {
        return orders;
      }
    })
    .then((orders) => {
      allOrders = orders;
      return OrderDetails.findAll();
    })
    .then((orderdet) => {
      if (!orderdet || orderdet.length == 0) {
        return OrderDetails.bulkCreate([
          {
            products_id: allProducts[0]._id,
            orders_id: allOrders[0]._id,
            cost: 5000,
            discount: 0,
            amount: 1,
            comments: "Prosze szybczej",
          },
          {
            products_id: allProducts[1]._id,
            orders_id: allOrders[0]._id,
            cost: 6400,
            discount: 5,
            amount: 2,
            comments: "-",
          },
          {
            products_id: allProducts[0]._id,
            orders_id: allOrders[1]._id,
            cost: 2000,
            discount: 0,
            amount: 1,
            comments: "Prosze o znizkie",
          },
        ]);
      } else {
        return orderdet;
      }
    });
};
