//Import ORM to create functions that interact with database
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  //Cols and vals arrays
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
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
