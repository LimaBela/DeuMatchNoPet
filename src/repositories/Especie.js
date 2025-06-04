const pool = require('../config/db.js');

class Especie
{
    static async create(especie) 
    {
        const {nomeEspecie} = especie;
        const res = await pool.query
        (
            'INSERT INTO login (nomeEspecie) VALUES ($1) RETURNING *',
            [nomeEspecie]
        );
        return res.rows[0];
    }
    
}

module.exports = Especie;