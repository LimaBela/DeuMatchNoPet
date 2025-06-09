const pool = require('../config/db');

class Raca
{
    static async create(raca) 
    {
        const {nome_raca} = raca;
        const res = await pool.query
        (
            'INSERT INTO raca (nome_raca) VALUES ($1) RETURNING *',
            [nome_raca]
        );
        return res.rows[0];
    }
}

module.exports = Raca;