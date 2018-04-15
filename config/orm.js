var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push('?')
    }

    return arr.toString();
}

function objToSql(ob) {

    var arr = [];

    for (var key in ob) {
        arr.push(key + '=' + ob[key]);
    }

    return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table + ' (' + cols.toString() + ') ' + 'VALUES (' + printQuestionMarks(vals.length) + ') ';

        console.log(queryString)

        connection.query(queryString, vals, function(err, result) {
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        var queryString = 'UPDATE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            cb(result);
        });
    }
    // };


        delete: function(table, cols, vals, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

//This was taken right from the sample code:
//     delete: function(table, condition, cb) {
//         var queryString = "DELETE FROM " + table;
//         queryString += " WHERE ";
//         queryString += condition;

//         connection.query(queryString, function(err, result) {
//             if (err) {
//                 throw err;
//             }

//             cb(result);
//         });
//     }
// };


//     deleteOne: function(table, objColVals, condition, cb) {
//         var queryString = 'DELETE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition;

//         DELETE FROM `burgers_db`.`burgers` WHERE `id`='19';

//         console.log("delete");

//         connection.query(queryString, function(err, result) {
//             cb(result);
//         });
//     }
// };

// deleteOne: function(table, cols, cals, cb) {
//     var queryStrong = 'DELETE FROM ' + table + 

//     console.log("deleted");

//     connection.query(queryString, vals, function(err, result) {
//         cb(result);
//     });
// }

module.exports = orm;