var orm = require ("../config/orm")

var burger = {
    all: function (cb){
        orm.all("burgers", function(res){
            cb(res);
        })
    }
    // create:  function (columns, values, cb) {
    //     orm.create("burgers", columns, values, function (res){
    //         cb(res);
    //     });
    // },

    // update: function (targetColVals, condition, cb){
    //     orm.update("burgers", targetColVals, condition, function (res){
    //         cb(res);
    //     });
    // }
};

module.exports = burger;