const db = require('../config/db');

const Animal = {
    getAll: (callback) => {
        const sql = 'SELECT * FROM animais';
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },

    getById: (id, callback) => {
        const sql = 'SELECT * FROM animais WHERE id_pet = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    },

    add: (data, callback) => {
        const sql = 'INSERT INTO animais SET ?';
        db.query(sql, data, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    update: (id, data, callback) => {
        const sql = 'UPDATE animais SET ? WHERE id_pet = ?';
        db.query(sql, [data, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    delete: (id, callback) => {
        const sql = 'DELETE FROM animais WHERE id_pet = ?';
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
};

module.exports = Animal;
