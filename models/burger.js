//Import ORM to create functions that interact with database
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  //Cols and vals arrays
  createOne: function(cols, vals, cb) {
    orm.createOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(condition, cb) {
    orm.updateOne("burgers", { devoured: true }, condition, function(res) {
      console.log("burg");
      cb(res);
    });
  }
};

//Export Database functions for controller (burgers_controller.js)
module.exports = burger;

// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   });
//   return User;
// };
