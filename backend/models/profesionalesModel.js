var pool = require('./bd');

async function getProfesionales() {
    var query = 'select * from profesionales';
    var rows = await pool.query(query);
    return rows;
}

async function insertProfesionales(obj) {
    try {
        var query = 'insert into profesionales set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getProfesionalesById(id) {
    var query = 'select * from profesionales where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}



async function modificarProfesionalById(obj, id) {
    try {
        var query = 'update profesionales set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function deleteProfesionalesByID(id) {
    var query = 'delete from profesionales where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getProfesionales, insertProfesionales, deleteProfesionalesByID, getProfesionalesById, modificarProfesionalById }