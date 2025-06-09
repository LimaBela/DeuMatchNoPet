const pool = require('../config/db.js');

class Especie
{
    static async create(especie) 
    {
        const {nome_especie} = especie;
        const res = await pool.query
        (
            'INSERT INTO login (nome_especie) VALUES ($1) RETURNING *',
            [nome_especie]
        );
        return res.rows[0];
    }
}

module.exports = Especie;