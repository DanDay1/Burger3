var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    },
    // };



    deleteOne: function(objColVals, condition, cb) {
        orm.deleteOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

//This was taken right from the saple code:
//     delete: function(condition, cb) {
//         orm.delete("burgers", condition, function(res) {
//             cb(res);
//         });
//     }
// };



module.exports = burger