// jshint esversion:6
const row = require('./row');

const sequelizeHelper = {
    init: function() {
        row.sync({force: true}).then(() =>
        row.create({col1: 0, col2: 0, col3: 0, col4: 0, col5: 0, col6: 0, col7: 0}))
        .then(() => row.create({col1: 0, col2: 0, col3: 0, col4: 0, col5: 0, col6: 0, col7: 0}))
        .then(() => row.create({col1: 0, col2: 0, col3: 0, col4: 0, col5: 0, col6: 0, col7: 0}))
        .then(() => row.create({col1: 0, col2: 0, col3: 0, col4: 0, col5: 0, col6: 0, col7: 0}))
        .then(() => row.create({col1: 0, col2: 0, col3: 0, col4: 0, col5: 0, col6: 0, col7: 0}))
        .then(() => row.create({col1: 0, col2: 0, col3: 0, col4: 0, col5: 0, col6: 0, col7: 0}));
    },

    checkCell: function(rowid, colnum, cb) {
        row.findOne({where: {id: rowid}})
        .then(rowData => cb(null, rowData.dataValues[`col${colnum}`]))
        .catch(err => cb(err));
    },

    addPiece: function(colnum, player, rowid=1) {
        if (rowid > 6) {
            return;
        }
        row.findOne({where: {id: rowid}})
        .then(rowData => {
            if (rowData.dataValues[`col${colnum}`]) {
                sequelizeHelper.addPiece(colnum, player, rowid + 1);
            } else {
                return rowData.update({[`col${colnum}`]: player > 0 ? 1 : -1});
            }
        });
    }
};

sequelizeHelper.checkCell(4, 6, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

module.exports = sequelizeHelper;
